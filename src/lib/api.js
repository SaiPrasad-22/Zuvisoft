const BASE_URL = import.meta.env.VITE_API_BASE_URL || ''

async function request(path, options = {}) {
  const res = await fetch(`${BASE_URL}${path}`, {
    headers: { 'Content-Type': 'application/json' },
    ...options,
  })
  const data = await res.json().catch(() => ({}))
  if (!res.ok) {
    throw new Error(data.error || 'Request failed')
  }
  return data
}

export function submitContactForm(payload) {
  return request('/api/contact', { method: 'POST', body: JSON.stringify(payload) })
}

// Future endpoints hang off the same request() helper:
// export function bookAppointment(payload) { return request('/api/appointments', { method: 'POST', body: JSON.stringify(payload) }) }
// export function login(payload) { return request('/api/auth/login', { method: 'POST', body: JSON.stringify(payload) }) }
