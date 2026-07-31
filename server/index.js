import express from 'express'
import path from 'path'
import { fileURLToPath } from 'url'
import nodemailer from 'nodemailer'

const __dirname = path.dirname(fileURLToPath(import.meta.url))
const app = express()
const PORT = process.env.PORT || 8787

app.use(express.json())

// Basic in-memory rate limit: 5 submissions / 10 min per IP
const hits = new Map()
function rateLimited(ip) {
  const now = Date.now()
  const windowMs = 10 * 60 * 1000
  const entry = hits.get(ip) || { count: 0, start: now }
  if (now - entry.start > windowMs) {
    hits.set(ip, { count: 1, start: now })
    return false
  }
  entry.count += 1
  hits.set(ip, entry)
  return entry.count > 5
}

function getTransporter() {
  if (!process.env.SMTP_HOST) return null
  return nodemailer.createTransport({
    host: process.env.SMTP_HOST,
    port: Number(process.env.SMTP_PORT || 587),
    secure: process.env.SMTP_SECURE === 'true',
    auth: {
      user: process.env.SMTP_USER,
      pass: process.env.SMTP_PASS,
    },
  })
}

app.post('/api/contact', async (req, res) => {
  try {
    const ip = req.headers['x-forwarded-for'] || req.socket.remoteAddress
    if (rateLimited(ip)) {
      return res.status(429).json({ error: 'Too many requests. Please try again later.' })
    }

    const { name, company, email, phone, budget, message, timeline } = req.body || {}
    if (!name || !email || !message) {
      return res.status(400).json({ error: 'Name, email, and message are required.' })
    }
    const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/
    if (!emailPattern.test(email)) {
      return res.status(400).json({ error: 'Invalid email address.' })
    }

    const transporter = getTransporter()
    const fields = { name, company, email, phone, budget, timeline, message }
    if (!transporter) {
      // No SMTP configured yet — log so the message isn't silently lost.
      console.log('[contact] SMTP not configured. Submission:', fields)
      return res.status(200).json({ ok: true, note: 'Received (SMTP not configured yet).' })
    }

    const summaryLines = [
      `Name: ${name}`,
      company && `Company: ${company}`,
      `Email: ${email}`,
      phone && `Phone: ${phone}`,
      budget && `Budget: ${budget}`,
      timeline && `Timeline: ${timeline}`,
    ].filter(Boolean)

    await transporter.sendMail({
      from: process.env.SMTP_FROM || `"ZuviSoft Website" <${process.env.SMTP_USER}>`,
      to: process.env.CONTACT_TO || 'hello@zuvisoft.in',
      replyTo: email,
      subject: `New project inquiry from ${name}`,
      text: `${summaryLines.join('\n')}\n\n${message}`,
      html: `<p>${summaryLines.join('<br/>')}</p><p>${String(message).replace(/\n/g, '<br/>')}</p>`,
    })

    res.status(200).json({ ok: true })
  } catch (err) {
    console.error('Contact form error:', err)
    res.status(500).json({ error: 'Something went wrong. Please email us directly.' })
  }
})

// Serve the built frontend
const distPath = path.join(__dirname, '..', 'dist')
app.use(express.static(distPath))
app.get('*', (req, res) => {
  res.sendFile(path.join(distPath, 'index.html'))
})

app.listen(PORT, () => {
  console.log(`ZuviSoft server running on port ${PORT}`)
})
