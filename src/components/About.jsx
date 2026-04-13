const tecnologias = [
  {
    nome: 'HTML5',
    icone: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/html5/html5-original.svg',
  },
  {
    nome: 'CSS3',
    icone: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/css3/css3-original.svg',
  },
  {
    nome: 'JavaScript',
    icone: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/javascript/javascript-original.svg',
  },
  {
    nome: 'Git',
    icone: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/git/git-original.svg',
  },
]

function About() {
  return (
    <section id="sobre" className="about-section">
      <div className="container">
        <div className="section-header">
          <span className="section-tag">Conheca-me</span>
          <h2 className="section-title">Sobre Mim</h2>
        </div>

        <div className="about-grid">
          <div className="about-text">
            <p>
              Sou aluno do curso de{' '}
              <strong>Tecnologia em Sistemas para Internet</strong> pela{' '}
              <strong>UAPI</strong>, polo de Lagoa do Sítio- Piaui. Tenho
              paixão por desenvolvimento web e mobile, sempre buscando
              aprimorar minhas habilidades e criar projetos que impactem
              positivamente a vida das pessoas.
            </p>
          </div>

          <div className="skills-box">
            <h3>Tecnologias</h3>
            <div className="skills-list">
              {tecnologias.map((tech) => (
                <div className="skill-item" key={tech.nome}>
                  <img src={tech.icone} alt={tech.nome} />
                  <span>{tech.nome}</span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

export default About
