function Footer() {
  return (
    <footer id="contato">
      <div className="footer-content">
        <h3 className="footer-name">Leandro Campelo</h3>
        <p className="footer-sub">Desenvolvedor em formação - Lagoa do Sítio, PI</p>

        <div className="footer-links">
          <a href="mailto:leandrocampelo@gmail.com" className="footer-link">
            <i className="fas fa-envelope"></i>
            leandrocampelo@gmail.com
          </a>
          <a
            href="https://www.linkedin.com/in/leandro-campelo"
            target="_blank"
            rel="noopener noreferrer"
            className="footer-link"
          >
            <i className="fab fa-linkedin"></i>
            LinkedIn
          </a>
          <a
            href="https://github.com"
            target="_blank"
            rel="noopener noreferrer"
            className="footer-link"
          >
            <i className="fab fa-github"></i>
            GitHub
          </a>
        </div>

        <p className="footer-copy">
          &copy; 2026 Leandro Campelo. Todos os direitos reservados.
        </p>
      </div>
    </footer>
  )
}

export default Footer
