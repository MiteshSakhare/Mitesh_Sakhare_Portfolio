import { Container, Row, Col, Card, Badge } from 'react-bootstrap'
import { FaExternalLinkAlt, FaGithub } from 'react-icons/fa'

const Projects = () => {
  const projects = [
    {
      title: "Text Summarization Using Pegasus & GEMINI",
      period: "August 2024 - April 2025",
      description: "Developed an advanced text summarization system using state-of-the-art machine learning models like Pegasus and GEMINI.",
      achievements: [
        "Achieved 65% improvement in summary coherence and relevance",
        "Enabled support for multiple models (Pegasus, T5, GPT)",
        "Implemented multi-language summary translation features"
      ],
      technologies: ["Python", "Flask", "NLTK", "Google Translate API"],
      link: "https://github.com/MiteshSakhare/Text-Summarization-Using-Pegasus-and-Gemini",
      github: "https://github.com/MiteshSakhare/Text-Summarization-Using-Pegasus-and-Gemini"
    },
    {
      title: "Personal Finance Tracker",
      period: "May 2025 - July 2025",
      description: "Designed and implemented a full-stack finance tracker with FastAPI backend and React frontend.",
      achievements: [
        "Built RESTful APIs and CRUD flows",
        "Connected frontend components to backend endpoints",
        "Created reusable data models and utility scripts"
      ],
      technologies: ["React", "FastAPI", "Python", "JavaScript"],
      link: "https://github.com/MiteshSakhare/Personal-Finance-Tracker-Using-Python-and-React",
      github: "https://github.com/MiteshSakhare/Personal-Finance-Tracker-Using-Python-and-React"
    },
    {
      title: "Movie Recommendation System",
      period: "January 2024 - April 2024",
      description: "Implemented a content-based recommender using TF-IDF and cosine similarity.",
      achievements: [
        "Integrated recommendation engine into a Django app",
        "Optimized TF-IDF vectorization and similarity matrix",
        "Movie recommendations served in under 2 seconds"
      ],
      technologies: ["Python", "Django", "scikit-learn", "Bootstrap"],
      link: "https://github.com/MiteshSakhare/ReelAdvisor---Movie-Recommendation-System",
      github: "https://github.com/MiteshSakhare/ReelAdvisor---Movie-Recommendation-System"
    }
  ]

  return (
    <section id="projects" className="projects-section">
      <Container>
        <h2 className="section-title">Projects</h2>
        <Row>
          {projects.map((project, index) => (
            <Col lg={4} md={6} className="mb-4" key={index}>
              <Card className="project-card h-100">
                <Card.Body>
                  <div className="project-header">
                    <Card.Title>{project.title}</Card.Title>
                    <div className="project-links">
                      <a href={project.github} target="_blank" rel="noopener noreferrer">
                        <FaGithub />
                      </a>
                      <a href={project.link} target="_blank" rel="noopener noreferrer">
                        <FaExternalLinkAlt />
                      </a>
                    </div>
                  </div>
                  <Card.Subtitle className="mb-2 project-period">{project.period}</Card.Subtitle>
                  <Card.Text className="project-description">{project.description}</Card.Text>
                  <div className="achievements">
                    <h6>Key Achievements:</h6>
                    <ul>
                      {project.achievements.map((achievement, i) => (
                        <li key={i}>{achievement}</li>
                      ))}
                    </ul>
                  </div>
                  <div className="technologies">
                    {project.technologies.map((tech, i) => (
                      <Badge bg="secondary" className="me-1 mb-1 tech-badge" key={i}>{tech}</Badge>
                    ))}
                  </div>
                </Card.Body>
              </Card>
            </Col>
          ))}
        </Row>
      </Container>
    </section>
  )
}

export default Projects