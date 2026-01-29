import express, { Request, Response, NextFunction } from 'express'
import cors from 'cors'

const app = express()
const PORT = process.env.PORT || 3001

// In-memory storage (for demo purposes)
interface ContactMessage {
  id: string
  name: string
  email: string
  topic: string
  message: string
  timestamp: string
}

interface TrackingEvent {
  event: string
  page: string
  ts: string
}

const contacts: ContactMessage[] = []
const events: TrackingEvent[] = []

// Middleware
app.use(cors())
app.use(express.json())

// Request logging middleware
app.use((req: Request, res: Response, next: NextFunction) => {
  const timestamp = new Date().toISOString()
  console.log(`[${timestamp}] ${req.method} ${req.path}`)
  next()
})

// Health check
app.get('/api/health', (req: Request, res: Response) => {
  res.json({ status: 'ok', timestamp: new Date().toISOString() })
})

// Contact form endpoint
app.post('/api/contact', (req: Request, res: Response) => {
  const { name, email, topic, message } = req.body

  // Validation
  if (!name || !email || !topic || !message) {
    return res.status(400).json({
      ok: false,
      error: 'Missing required fields: name, email, topic, message',
    })
  }

  // Email validation
  const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/
  if (!emailRegex.test(email)) {
    return res.status(400).json({
      ok: false,
      error: 'Invalid email format',
    })
  }

  // Message validation
  if (message.length < 10) {
    return res.status(400).json({
      ok: false,
      error: 'Message must be at least 10 characters',
    })
  }

  // Create contact record
  const id = `contact_${Date.now()}`
  const contactMessage: ContactMessage = {
    id,
    name,
    email,
    topic,
    message,
    timestamp: new Date().toISOString(),
  }

  contacts.push(contactMessage)

  // Log to console
  console.log('📧 New contact submission:')
  console.log(`  From: ${name} <${email}>`)
  console.log(`  Topic: ${topic}`)
  console.log(`  Message: ${message}`)

  res.status(201).json({
    ok: true,
    id,
    message: 'Contact message received',
  })
})

// Page tracking endpoint
app.post('/api/track', (req: Request, res: Response) => {
  const { event, page, ts } = req.body

  if (!event || !page) {
    return res.status(400).json({
      ok: false,
      error: 'Missing required fields: event, page',
    })
  }

  const trackingEvent: TrackingEvent = {
    event,
    page,
    ts: ts || new Date().toISOString(),
  }

  events.push(trackingEvent)

  res.json({ ok: true })
})

// Admin endpoints
app.get('/api/admin/contacts', (req: Request, res: Response) => {
  const lastTen = contacts.slice(-10).reverse()
  res.json({ count: contacts.length, recent: lastTen })
})

app.get('/api/admin/events', (req: Request, res: Response) => {
  const lastFifty = events.slice(-50).reverse()
  res.json({ count: events.length, recent: lastFifty })
})

// Error handler
app.use((err: Error, req: Request, res: Response) => {
  console.error(err)
  res.status(500).json({ error: 'Internal server error' })
})

// 404 handler
app.use((req: Request, res: Response) => {
  res.status(404).json({ error: 'Not found' })
})

// Start server
app.listen(PORT, () => {
  console.log(`🚀 Fujin API Server running at http://localhost:${PORT}`)
  console.log(`📧 Contact submissions: POST http://localhost:${PORT}/api/contact`)
  console.log(`📈 Event tracking: POST http://localhost:${PORT}/api/track`)
})
