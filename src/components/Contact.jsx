// src/components/Contact.jsx
import { Container, Row, Col, Card, Form, Button } from 'react-bootstrap'
import { FaEnvelope, FaPhone, FaMapMarkerAlt, FaLinkedin, FaPaperPlane } from 'react-icons/fa'
import { useRef, useState } from 'react'
import emailjs from '@emailjs/browser'

const SERVICE_ID = 'service_hwlbexr'
const TEMPLATE_ID = 'template_yohhy7a'
const PUBLIC_KEY = import.meta.env?.VITE_EMAILJS_PUBLIC_KEY || 'xkLsSVlNKa-DLWhK2'

const Contact = () => {
  const form = useRef()
  const [isSubmitting, setIsSubmitting] = useState(false)
  const [submitStatus, setSubmitStatus] = useState(null)
  const [errors, setErrors] = useState({})

  const validate = (fields) => {
    const next = {}
    if (!fields.user_name?.trim()) next.user_name = 'Name is required'
    if (!fields.user_email?.match(/^[^\s@]+@[^\s@]+\.[^\s@]+$/)) next.user_email = 'Valid email required'
    if (!fields.subject?.trim()) next.subject = 'Subject required'
    if (!fields.message?.trim()) next.message = 'Message required'
    return next
  }

  const sendEmail = async (e) => {
    e.preventDefault()
    if (isSubmitting) return
    const data = Object.fromEntries(new FormData(form.current))
    const v = validate(data)
    setErrors(v)
    if (Object.keys(v).length) return
    if (data.bot_field) return

    setIsSubmitting(true)
    setSubmitStatus(null)
    try {
      const res = await emailjs.sendForm(SERVICE_ID, TEMPLATE_ID, form.current, { publicKey: PUBLIC_KEY })
      console.log('SUCCESS!', res.status, res.text)
      setSubmitStatus('success')
      form.current.reset()
    } catch (err) {
      console.log('FAILED...', err?.text || err)
      setSubmitStatus('error')
    } finally {
      setIsSubmitting(false)
      setTimeout(() => setSubmitStatus(null), 5000)
    }
  }

  return (
    <section id="contact" className="contact-section">
      <Container>
        <h2 className="section-title">Contact</h2>
        <Row>
          <Col lg={4} className="mb-4">
            <Card className="contact-card h-100">
              <div className="contact-item">
                <div className="contact-icon"><FaMapMarkerAlt /></div>
                <div className="contact-text">
                  <h5>Location</h5>
                  <p>Pune, Maharashtra, India</p>
                </div>
              </div>
              <div className="contact-item">
                <div className="contact-icon"><FaEnvelope /></div>
                <div className="contact-text">
                  <h5>Email</h5>
                  <a href="mailto:miteshsakhare301@gmail.com">miteshsakhare301@gmail.com</a>
                </div>
              </div>
              <div className="contact-item">
                <div className="contact-icon"><FaPhone /></div>
                <div className="contact-text">
                  <h5>Phone</h5>
                  <p>+91 8177807432</p>
                </div>
              </div>
              <div className="contact-item">
                <div className="contact-icon"><FaLinkedin /></div>
                <div className="contact-text">
                  <h5>LinkedIn</h5>
                  <a href="https://www.linkedin.com/in/miteshsakhare/" target="_blank" rel="noopener noreferrer">
                    linkedin.com/in/miteshsakhare
                  </a>
                </div>
              </div>
            </Card>
          </Col>
          <Col lg={8}>
            <Card className="contact-form h-100">
              <Card.Body>
                <h4 className="mb-4">Send me a message</h4>
                <Form ref={form} onSubmit={sendEmail} noValidate>
                  <input type="text" name="bot_field" tabIndex={-1} autoComplete="off" style={{ display: 'none' }} />
                  <Row>
                    <Col md={6}>
                      <Form.Group className="mb-3">
                        <Form.Label>Your Name</Form.Label>
                        <Form.Control
                          type="text"
                          name="user_name"
                          placeholder="Enter your name"
                          aria-invalid={!!errors.user_name}
                          required
                        />
                        {errors.user_name && <div className="invalid-feedback d-block">{errors.user_name}</div>}
                      </Form.Group>
                    </Col>
                    <Col md={6}>
                      <Form.Group className="mb-3">
                        <Form.Label>Your Email</Form.Label>
                        <Form.Control
                          type="email"
                          name="user_email"
                          placeholder="Enter your email"
                          aria-invalid={!!errors.user_email}
                          required
                        />
                        {errors.user_email && <div className="invalid-feedback d-block">{errors.user_email}</div>}
                      </Form.Group>
                    </Col>
                  </Row>
                  <Form.Group className="mb-3">
                    <Form.Label>Subject</Form.Label>
                    <Form.Control
                      type="text"
                      name="subject"
                      placeholder="Enter subject"
                      aria-invalid={!!errors.subject}
                      required
                    />
                    {errors.subject && <div className="invalid-feedback d-block">{errors.subject}</div>}
                  </Form.Group>
                  <Form.Group className="mb-3">
                    <Form.Label>Message</Form.Label>
                    <Form.Control
                      as="textarea"
                      rows={5}
                      name="message"
                      placeholder="Enter your message"
                      aria-invalid={!!errors.message}
                      required
                    />
                    {errors.message && <div className="invalid-feedback d-block">{errors.message}</div>}
                  </Form.Group>
                  <Button type="submit" variant="primary" disabled={isSubmitting} className="d-flex align-items-center">
                    {isSubmitting ? 'Sending...' : 'Send Message'}
                    <FaPaperPlane className="ms-2" />
                  </Button>
                  {submitStatus === 'success' && (
                    <div className="alert alert-success mt-3 mb-0">Message sent successfully!</div>
                  )}
                  {submitStatus === 'error' && (
                    <div className="alert alert-danger mt-3 mb-0">Failed to send message. Please try again.</div>
                  )}
                </Form>
              </Card.Body>
            </Card>
          </Col>
        </Row>
      </Container>
    </section>
  )
}

export default Contact
