import { useState } from 'react'
import { submitContactForm } from '../lib/api.js'

const INITIAL_FORM = {
  name: '', company: '', email: '', phone: '', budget: '', message: '', timeline: '',
}

export function useContactForm() {
  const [form, setForm] = useState(INITIAL_FORM)
  const [status, setStatus] = useState('idle') // idle | sending | sent | error
  const [errorMessage, setErrorMessage] = useState('')

  const onChange = (e) => setForm((f) => ({ ...f, [e.target.name]: e.target.value }))

  const onSubmit = async (e) => {
    e.preventDefault()
    setStatus('sending')
    setErrorMessage('')
    try {
      await submitContactForm(form)
      setStatus('sent')
      setForm(INITIAL_FORM)
    } catch (err) {
      setStatus('error')
      setErrorMessage(err.message || 'Something went wrong.')
    }
  }

  return { form, status, errorMessage, onChange, onSubmit }
}
