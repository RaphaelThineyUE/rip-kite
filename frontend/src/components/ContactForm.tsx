import { useState } from 'react'
import { motion } from 'framer-motion'

interface ContactFormProps {
  onSuccess?: () => void
}

export const ContactForm: React.FC<ContactFormProps> = ({ onSuccess }) => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    topic: 'inquiry',
    message: '',
  })
  const [isLoading, setIsLoading] = useState(false)
  const [messages, setMessages] = useState<{ type: 'success' | 'error'; text: string } | null>(
    null,
  )

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement | HTMLTextAreaElement>,
  ) => {
    const { name, value } = e.target
    setFormData(prev => ({ ...prev, [name]: value }))
  }

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    setIsLoading(true)

    try {
      const response = await fetch('/api/contact', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(formData),
      })

      const data = await response.json()

      if (response.ok) {
        setMessages({ type: 'success', text: 'Message sent! We'll be in touch soon.' })
        setFormData({ name: '', email: '', topic: 'inquiry', message: '' })
        onSuccess?.()
        setTimeout(() => setMessages(null), 5000)
      } else {
        setMessages({ type: 'error', text: data.error || 'Failed to send message' })
      }
    } catch (error) {
      setMessages({ type: 'error', text: 'Network error. Please try again.' })
    } finally {
      setIsLoading(false)
    }
  }

  return (
    <form onSubmit={handleSubmit} className="space-y-4">
      <div>
        <label className="block text-sm font-medium text-slate mb-1">Name</label>
        <input
          type="text"
          name="name"
          value={formData.name}
          onChange={handleChange}
          required
          className="w-full px-4 py-2 bg-charcoal border border-slate/20 rounded text-cloud focus:border-fujin-orange focus:outline-none"
          placeholder="Your name"
        />
      </div>

      <div>
        <label className="block text-sm font-medium text-slate mb-1">Email</label>
        <input
          type="email"
          name="email"
          value={formData.email}
          onChange={handleChange}
          required
          className="w-full px-4 py-2 bg-charcoal border border-slate/20 rounded text-cloud focus:border-fujin-orange focus:outline-none"
          placeholder="your@email.com"
        />
      </div>

      <div>
        <label className="block text-sm font-medium text-slate mb-1">Topic</label>
        <select
          name="topic"
          value={formData.topic}
          onChange={handleChange}
          className="w-full px-4 py-2 bg-charcoal border border-slate/20 rounded text-cloud focus:border-fujin-orange focus:outline-none"
        >
          <option value="inquiry">General Inquiry</option>
          <option value="sales">Sales</option>
          <option value="support">Support</option>
          <option value="press">Press</option>
        </select>
      </div>

      <div>
        <label className="block text-sm font-medium text-slate mb-1">Message</label>
        <textarea
          name="message"
          value={formData.message}
          onChange={handleChange}
          required
          rows={5}
          className="w-full px-4 py-2 bg-charcoal border border-slate/20 rounded text-cloud focus:border-fujin-orange focus:outline-none resize-none"
          placeholder="Your message..."
        />
      </div>

      {messages && (
        <motion.div
          initial={{ opacity: 0, y: -10 }}
          animate={{ opacity: 1, y: 0 }}
          className={`p-4 rounded ${
            messages.type === 'success'
              ? 'bg-green-900/30 text-green-400 border border-green-700/50'
              : 'bg-red-900/30 text-red-400 border border-red-700/50'
          }`}
        >
          {messages.text}
        </motion.div>
      )}

      <button
        type="submit"
        disabled={isLoading}
        className="button-primary w-full disabled:opacity-50"
      >
        {isLoading ? 'Sending...' : 'Send Message'}
      </button>
    </form>
  )
}
