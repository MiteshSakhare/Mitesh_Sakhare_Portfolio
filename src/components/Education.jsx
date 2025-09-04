import { Container } from 'react-bootstrap'

const Education = () => {
  const educationData = [
    {
      degree: "B.E Computer Engineering",
      institution: "International Institute of Information Technology",
      location: "Hinjewadi, Pune",
      duration: "2021-2025",
      details: "CGPA: 7.30"
    },
    {
      degree: "Class 12, HSC",
      institution: "Sri Chaitanya Educational Institutions",
      location: "Aundh, Pune",
      duration: "2019-2021",
      details: "Percentage: 86.17%"
    },
    {
      degree: "Class 10, CBSE",
      institution: "Blossom Public School",
      location: "Tathawade, Pune",
      duration: "2018-2019",
      details: "Percentage: 80.02%"
    }
  ]

  return (
    <section id="education" className="education-section">
      <Container>
        <h2 className="section-title">Education</h2>
        <div className="timeline">
          {educationData.map((edu, index) => (
            <div className="timeline-item" key={index}>
              <div className="timeline-content">
                <h3>{edu.degree}</h3>
                <p className="institution">{edu.institution} • {edu.location}</p>
                <p className="duration">{edu.duration}</p>
                <p>{edu.details}</p>
              </div>
            </div>
          ))}
        </div>
      </Container>
    </section>
  )
}

export default Education