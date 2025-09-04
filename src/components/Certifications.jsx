import { Container, Row, Col, Card } from 'react-bootstrap'

const Certifications = () => {
  const certifications = [
    {
      title: "Eduskill Google AI-ML Virtual Internship",
      issuer: "Eduskill",
      date: "March 2024"
    },
    {
      title: "Acmegrade Artificial Intelligence Internship",
      issuer: "Acmegrade",
      date: "March 2024"
    },
    {
      title: "Machine Learning A-Z: AI, Python",
      issuer: "Udemy",
      date: "April 2025"
    },
    {
      title: "The Python Bootcamp",
      issuer: "Udemy",
      date: "April 2024"
    }
  ]

  return (
    <section id="certifications" className="certifications-section">
      <Container>
        <h2 className="section-title">
          <a href="https://github.com/MiteshSakhare/Certifications" target="_blank" rel="noopener noreferrer">
            Certifications
          </a>
        </h2>
        <Row>
          {certifications.map((cert, index) => (
            <Col lg={6} className="mb-4" key={index}>
              <Card className="cert-card">
                <Card.Body>
                  <Card.Title>{cert.title}</Card.Title>
                  <Card.Text className="issuer">{cert.issuer}</Card.Text>
                  <Card.Text className="date">Issued: {cert.date}</Card.Text>
                </Card.Body>
              </Card>
            </Col>
          ))}
        </Row>
      </Container>
    </section>
  )
}

export default Certifications