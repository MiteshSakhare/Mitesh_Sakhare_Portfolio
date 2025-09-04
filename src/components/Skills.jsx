import { Container } from 'react-bootstrap'

const Skills = () => {
  const skillCategories = [
    {
      category: "Programming Languages",
      skills: [
        { name: "Python", level: 85 },
        { name: "JavaScript", level: 85 },
        { name: "HTML/CSS", level: 95 }
      ]
    },
    {
      category: "Technologies & Frameworks",
      skills: [
        { name: "ReactJS", level: 80 },
        { name: "Django", level: 70 },
        { name: "Flask", level: 70 },
        { name: "FastAPI", level: 70 }
      ]
    },
    {
      category: "Database Technologies",
      skills: [
        { name: "MySQL", level: 80 },
        { name: "MongoDB", level: 60 },
        { name: "Snowflake", level: 60 }
      ]
    },
    {
      category: "Tools",
      skills: [
        { name: "Git", level: 85 },
        { name: "VS Code", level: 90 },
        { name: "Power BI", level: 60 }
      ]
    }
  ]

  const getSkillLevelText = (level) => {
    if (level >= 90) return "Expert"
    if (level >= 70) return "Advanced"
    if (level >= 50) return "Intermediate"
    return "Beginner"
  }

  return (
    <section id="skills" className="skills-section">
      <Container>
        <h2 className="section-title">Skills</h2>
        <div className="skills-container">
          {skillCategories.map((category, index) => (
            <div className="skill-category" key={index}>
              <h4>{category.category}</h4>
              {category.skills.map((skill, i) => (
                <div className="skill-item" key={i}>
                  <div className="skill-info">
                    <span>{skill.name}</span>
                    <span>{getSkillLevelText(skill.level)}</span>
                  </div>
                  <div className="skill-bar">
                    <div 
                      className="skill-progress" 
                      style={{ width: `${skill.level}%` }}
                    ></div>
                  </div>
                </div>
              ))}
            </div>
          ))}
        </div>
      </Container>
    </section>
  )
}

export default Skills