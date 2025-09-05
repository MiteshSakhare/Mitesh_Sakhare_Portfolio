import { Container, Row, Col, Button } from 'react-bootstrap'
import { FaGithub, FaLinkedin, FaEnvelope, FaDownload } from 'react-icons/fa'
import { useEffect, useState, useMemo } from 'react'

const Hero = () => {
  const [displayText, setDisplayText] = useState('')
  const [currentIndex, setCurrentIndex] = useState(0)
  const [currentWordIndex, setCurrentWordIndex] = useState(0)
  const [isDeleting, setIsDeleting] = useState(false)

  // ✅ Memoize words so dependency warning goes away
  const words = useMemo(() => ['Developer', 'Artist', 'Freelancer', 'Designer'], [])

  useEffect(() => {
    const currentWord = words[currentWordIndex]

    const type = () => {
      if (isDeleting) {
        if (currentIndex > 0) {
          setDisplayText(currentWord.substring(0, currentIndex - 1))
          setCurrentIndex(prev => prev - 1)
        } else {
          setIsDeleting(false)
          setCurrentWordIndex((prev) => (prev + 1) % words.length)
        }
      } else {
        if (currentIndex < currentWord.length) {
          setDisplayText(currentWord.substring(0, currentIndex + 1))
          setCurrentIndex(prev => prev + 1)
        } else {
          setTimeout(() => setIsDeleting(true), 1500) // pause before deleting
        }
      }
    }

    const timer = setTimeout(type, isDeleting ? 50 : 100)
    return () => clearTimeout(timer)
  }, [currentIndex, isDeleting, currentWordIndex, words])

  const downloadResume = () => {
    const link = document.createElement('a')
    link.href = '/resume.pdf'
    link.download = 'Mitesh_Sakhare_Resume.pdf'
    document.body.appendChild(link)
    link.click()
    document.body.removeChild(link)
  }

  return (
    <section id="hero" className="hero-section">
      <Container>
        <Row className="align-items-center min-vh-100">
          {/* Left Content */}
          <Col lg={6} className="order-2 order-lg-1">
            <div className="hero-content">
              <p className="greeting">Hello, I'm</p>
              <h1 className="hero-name display-3 fw-bold mb-3">
                Mitesh Sakhare
              </h1>
              <h2 className="hero-title mb-4">
                Creative <span className="typed-text">{displayText}</span>
                <span className="cursor">|</span>
              </h2>
              <p className="hero-description lead mb-4">
                Passionate about creating innovative solutions using cutting-edge technologies.
                Earned my B.E. in Computer Engineering with a strong foundation in AI/ML and Full-Stack Development.
              </p>

              {/* Action Buttons */}
              <div className="hero-buttons mb-4">
                <Button
                  variant="primary"
                  size="lg"
                  className="me-3 mb-2"
                  onClick={() => document.getElementById('projects').scrollIntoView({ behavior: 'smooth' })}
                >
                  View Projects
                </Button>
                <Button
                  variant="outline-primary"
                  size="lg"
                  className="mb-2"
                  onClick={downloadResume}
                >
                  <FaDownload className="me-2" />
                  Resume
                </Button>
              </div>

              {/* Social Icons - Mobile Optimized */}
              <div className="social-icons d-flex flex-wrap justify-content-center justify-lg-start gap-3">
                <a 
                  href="https://github.com/MiteshSakhare" 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="social-link"
                  aria-label="GitHub Profile"
                  title="GitHub"
                >
                  <FaGithub />
                </a>
                <a 
                  href="https://linkedin.com/in/miteshsakhare" 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="social-link"
                  aria-label="LinkedIn Profile"
                  title="LinkedIn"
                >
                  <FaLinkedin />
                </a>
                <a 
                  href="mailto:miteshsakhare301@gmail.com"
                  className="social-link"
                  aria-label="Email Contact"
                  title="Email"
                >
                  <FaEnvelope />
                </a>
              </div>
            </div>
          </Col>

          {/* Right Content - Hero Visual */}
          <Col lg={6} className="order-1 order-lg-2 mb-4 mb-lg-0">
            <div className="hero-visual">
              <div className="main-icon">
                <div className="icon-background">
                  <div className="icon-content">MS</div>
                </div>
              </div>
              
              {/* Floating Shapes */}
              <div className="floating-shapes">
                <div className="shape shape-1"></div>
                <div className="shape shape-2"></div>
                <div className="shape shape-3"></div>
                <div className="shape shape-4"></div>
              </div>
            </div>
          </Col>
        </Row>
      </Container>

      {/* Particles Background */}
      <div className="particles-container" id="particles"></div>
    </section>
  )
}

export default Hero
