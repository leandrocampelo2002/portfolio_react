function Hero() {
  return (
    <section id="home" className="hero">
      <div className="hero-content">
        <p className="hero-greeting">Ola, eu sou</p>
        <h1 className="hero-name">Leandro Campelo</h1>
        <h2 className="hero-title">Desenvolvedor de Sistemas para Internet</h2>
        <p className="hero-desc">
          Estudante apaixonado por tecnologia, criando solucoes digitais com proposito.
          Polo UAPI - Lagoa do Sítio, Piaui.
        </p>
      </div>

      <div className="hero-visual">
        <div className="profile-ring-outer">
          <div className="profile-ring-inner">
            <img id="img-perfil" src="/perfil.jpeg" alt="Foto de perfil" />
          </div>
        </div>
      </div>
    </section>
  )
}

export default Hero
