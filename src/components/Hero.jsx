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
    <section id="home" className="hero-section">
      <Container>
        <Row className="align-items-center min-vh-100">
          {/* Left Content */}
          <Col lg={6}>
            <div className="hero-content">
              <h4 className="greeting">Hello, I'm</h4>
              <h1 className="hero-name">Mitesh Sakhare</h1>
              <h2 className="hero-title">
                Creative <span className="typed-text">{displayText}</span>
                <span className="cursor">|</span>
              </h2>
              <p className="hero-description">
                Passionate about creating innovative solutions using cutting-edge technologies. 
                Earned my B.E. in Computer Engineering with a strong foundation in AI/ML and Full-Stack Development.
              </p>
              <div className="hero-buttons">
                <Button 
                  variant="primary" 
                  className="me-3"
                  onClick={() => document.getElementById('projects').scrollIntoView({ behavior: 'smooth' })}
                >
                  View Projects
                </Button>
                <Button 
                  variant="outline-primary"
                  href="https://github.com/MiteshSakhare"
                  target="_blank"
                >
                  <FaGithub className="me-2" /> GitHub
                </Button>
                <Button 
                  variant="outline-primary"
                  onClick={downloadResume}
                >
                  <FaDownload className="me-2" />
                  Resume
                </Button>
              </div>
              <div className="social-icons mt-4">
                <a href="https://www.linkedin.com/in/miteshsakhare/" target="_blank" rel="noopener noreferrer">
                  <FaLinkedin />
                </a>
                <a href="https://github.com/MiteshSakhare" target="_blank" rel="noopener noreferrer">
                  <FaGithub />
                </a>
                <a href="mailto:miteshsaksahre301@gmail.com">
                  <FaEnvelope />
                </a>
              </div>
            </div>
          </Col>

          {/* Right Content */}
          <Col lg={6}>
            <div className="hero-image text-center">
              <div className="hero-visual">
                <div className="floating-shapes">
                  <div className="shape shape-1"></div>
                  <div className="shape shape-2"></div>
                  <div className="shape shape-3"></div>
                  <div className="shape shape-4"></div>
                </div>
                <div className="main-icon">
                  <div className="icon-background">
                    <div className="icon-content">MS</div>
                  </div>
                </div>
              </div>
            </div>
          </Col>
        </Row>
      </Container>
    </section>
  )
}

export default Hero
