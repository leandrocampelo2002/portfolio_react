import { useEffect } from 'react'
import projetos from '../data/projetos'

function ProjectCard({ projeto }) {
  return (
    <article className="project-card">
      <div className="project-img">
        <img src={projeto.img} alt={projeto.nome} loading="lazy" />
      </div>
      <div className="project-info">
        <span className="project-tag">{projeto.tag}</span>
        <h3 className="project-name">{projeto.nome}</h3>
        <p className="project-desc">{projeto.desc}</p>
        <div className="tech-badges">
          {projeto.tecnologias.map((tech) => (
            <span className="tech-badge" key={tech}>{tech}</span>
          ))}
        </div>
        <div className="project-footer">
          <a href={projeto.link} className="project-link">
            <i className="fas fa-external-link-alt"></i> Ver Projeto
          </a>
          <a href={projeto.link} className="project-link">
            <i className="fab fa-github"></i> Codigo
          </a>
        </div>
      </div>
    </article>
  )
}

function Projects() {
  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add('visible')
            observer.unobserve(entry.target)
          }
        })
      },
      { threshold: 0.12 }
    )
    document.querySelectorAll('.project-card, .skill-item').forEach((el) => {
      el.classList.add('reveal')
      observer.observe(el)
    })
    return () => observer.disconnect()
  }, [])
  return (
    <section id="projetos" className="projects-section">
      <div className="container">
        <div className="section-header">
          <span className="section-tag">Meu Trabalho</span>
          <h2 className="section-title">Projetos</h2>
        </div>

        {/* Array de projetos renderizado dinamicamente via .map() */}
        <div className="projects-grid">
          {projetos.map((projeto) => (
            <ProjectCard key={projeto.nome} projeto={projeto} />
          ))}
        </div>
      </div>
    </section>
  )
}

export default Projects
