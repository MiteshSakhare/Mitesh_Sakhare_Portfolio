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
    if (data.bot_field) return // Anti-spam

    setIsSubmitting(true)
    setSubmitStatus(null)

    try {
      // Send email with proper template variables
      const templateParams = {
        from_name: data.user_name,
        from_email: data.user_email,
        subject: data.subject,
        message: data.message,
        to_name: 'Mitesh Sakhare',
        reply_to: data.user_email
      }

      const res = await emailjs.send(SERVICE_ID, TEMPLATE_ID, templateParams, PUBLIC_KEY)
      console.log('SUCCESS!', res.status, res.text)
      setSubmitStatus('success')
      form.current.reset()
      setErrors({})
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
          <Col lg={6} className="mb-4">
            <Card className="contact-card h-100">
              <Card.Body>
                <div className="contact-item">
                  <div className="contact-icon">
                    <FaMapMarkerAlt />
                  </div>
                  <div className="contact-text">
                    <h5>Location</h5>
                    <p>Pune, Maharashtra, India</p>
                  </div>
                </div>

                <div className="contact-item">
                  <div className="contact-icon">
                    <FaEnvelope />
                  </div>
                  <div className="contact-text">
                    <h5>Email</h5>
                    <p>
                      <a href="mailto:miteshsakhare301@gmail.com">
                        miteshsakhare301@gmail.com
                      </a>
                    </p>
                  </div>
                </div>

                <div className="contact-item">
                  <div className="contact-icon">
                    <FaPhone />
                  </div>
                  <div className="contact-text">
                    <h5>Phone</h5>
                    <p>
                      <a href="tel:+918177807432">+91 8177807432</a>
                    </p>
                  </div>
                </div>

                <div className="contact-item">
                  <div className="contact-icon">
                    <FaLinkedin />
                  </div>
                  <div className="contact-text">
                    <h5>LinkedIn</h5>
                    <p>
                      <a 
                        href="https://linkedin.com/in/miteshsakhare" 
                        target="_blank" 
                        rel="noopener noreferrer"
                      >
                        linkedin.com/in/miteshsakhare
                      </a>
                    </p>
                  </div>
                </div>
              </Card.Body>
            </Card>
          </Col>

          <Col lg={6}>
            <div className="contact-form">
              <h3>Send me a message</h3>
              <Form ref={form} onSubmit={sendEmail}>
                {/* Anti-spam field */}
                <input type="text" name="bot_field" style={{ display: 'none' }} />
                
                <Form.Group className="mb-3">
                  <Form.Control
                    type="text"
                    name="user_name"
                    placeholder="Your Name"
                    required
                    className={errors.user_name ? 'is-invalid' : ''}
                  />
                  {errors.user_name && <div className="invalid-feedback">{errors.user_name}</div>}
                </Form.Group>

                <Form.Group className="mb-3">
                  <Form.Control
                    type="email"
                    name="user_email"
                    placeholder="Your Email"
                    required
                    className={errors.user_email ? 'is-invalid' : ''}
                  />
                  {errors.user_email && <div className="invalid-feedback">{errors.user_email}</div>}
                </Form.Group>

                <Form.Group className="mb-3">
                  <Form.Control
                    type="text"
                    name="subject"
                    placeholder="Subject"
                    required
                    className={errors.subject ? 'is-invalid' : ''}
                  />
                  {errors.subject && <div className="invalid-feedback">{errors.subject}</div>}
                </Form.Group>

                <Form.Group className="mb-3">
                  <Form.Control
                    as="textarea"
                    rows={5}
                    name="message"
                    placeholder="Message"
                    required
                    className={errors.message ? 'is-invalid' : ''}
                  />
                  {errors.message && <div className="invalid-feedback">{errors.message}</div>}
                </Form.Group>

                <Button
                  variant="primary"
                  type="submit"
                  disabled={isSubmitting}
                  className="w-100"
                >
                  <FaPaperPlane className="me-2" />
                  {isSubmitting ? 'Sending...' : 'Send Message'}
                </Button>

                {submitStatus === 'success' && (
                  <div className="alert alert-success mt-3">
                    Message sent successfully!
                  </div>
                )}

                {submitStatus === 'error' && (
                  <div className="alert alert-danger mt-3">
                    Failed to send message. Please try again.
                  </div>
                )}
              </Form>
            </div>
          </Col>
        </Row>
      </Container>
    </section>
  )
}

export default Contact
