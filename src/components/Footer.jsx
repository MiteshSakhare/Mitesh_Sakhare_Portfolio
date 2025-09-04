import { Container } from 'react-bootstrap'

const Footer = () => {
  return (
    <footer className="footer">
      <Container>
        <p>&copy; {new Date().getFullYear()} Mitesh Sakhare. All rights reserved.</p>
      </Container>
    </footer>
  )
}

export default Footer