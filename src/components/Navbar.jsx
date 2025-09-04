import { Container, Navbar as BootstrapNavbar, Nav } from 'react-bootstrap'

const Navbar = ({ darkMode, setDarkMode }) => {
  const scrollToSection = (sectionId) => {
    const element = document.getElementById(sectionId)
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' })
    }
  }

  return (
    <BootstrapNavbar expand="lg" fixed="top" className="custom-navbar">
      <Container>
        <BootstrapNavbar.Brand href="#home" className="brand">
          Mitesh Sakhare
        </BootstrapNavbar.Brand>
        <BootstrapNavbar.Toggle aria-controls="basic-navbar-nav" />
        <BootstrapNavbar.Collapse id="basic-navbar-nav">
          <Nav className="ms-auto">
            <Nav.Link onClick={() => scrollToSection('education')}>Education</Nav.Link>
            <Nav.Link onClick={() => scrollToSection('projects')}>Projects</Nav.Link>
            <Nav.Link onClick={() => scrollToSection('skills')}>Skills</Nav.Link>
            <Nav.Link onClick={() => scrollToSection('certifications')}>Certifications</Nav.Link>
            <Nav.Link onClick={() => scrollToSection('contact')}>Contact</Nav.Link>
            <button 
              className="theme-toggle-btn"
              onClick={() => setDarkMode(!darkMode)}
            >
              {darkMode ? '☀️' : '🌙'}
            </button>
          </Nav>
        </BootstrapNavbar.Collapse>
      </Container>
    </BootstrapNavbar>
  )
}

export default Navbar