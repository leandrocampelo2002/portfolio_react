import { useState, useEffect } from 'react'

function Navbar() {
  const [menuAberto, setMenuAberto] = useState(false)
  const [scrolled, setScrolled] = useState(false)

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 50)
    window.addEventListener('scroll', handleScroll)
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  const fecharMenu = () => setMenuAberto(false)

  return (
    <header id="cabecalho">
      <nav
        id="navbar"
        style={{
          background: scrolled
            ? 'rgba(13,13,20,0.98)'
            : 'rgba(13,13,20,0.85)',
        }}
      >
        <div className="nav-container">
          <span className="nav-logo">LC</span>

          <ul className={`nav-links${menuAberto ? ' open' : ''}`} id="navLinks">
            <li><a href="#projetos" onClick={fecharMenu}>Ver Projetos</a></li>
            <li><a href="#sobre" onClick={fecharMenu}>Sobre Mim</a></li>
          </ul>

          <button
            className="menu-toggle"
            id="menuToggle"
            aria-label="Abrir menu"
            onClick={() => setMenuAberto(!menuAberto)}
          >
            <i className={`fas ${menuAberto ? 'fa-times' : 'fa-bars'}`}></i>
          </button>
        </div>
      </nav>
    </header>
  )
}

export default Navbar
