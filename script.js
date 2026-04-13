// ===== MENU MOBILE =====
const menuToggle = document.getElementById('menuToggle');
const navLinks   = document.getElementById('navLinks');

menuToggle.addEventListener('click', () => {
    navLinks.classList.toggle('open');
});

navLinks.querySelectorAll('a').forEach(link => {
    link.addEventListener('click', () => navLinks.classList.remove('open'));
});

// ===== NAVBAR SCROLL =====
const navbar = document.getElementById('navbar');
window.addEventListener('scroll', () => {
    navbar.style.background = window.scrollY > 50
        ? 'rgba(13,13,20,0.98)'
        : 'rgba(13,13,20,0.85)';
});

// ===== ARRAY DE PROJETOS (renderizado dinamicamente via JS) =====
// Cada objeto representa um projeto com: tag, nome, descricao, tecnologias, imagem e link
const projetos = [
    {
        tag: 'Web',
        nome: 'Site Profissional',
        desc: 'Desenvolvimento de site responsivo utilizando HTML5, CSS3 e JavaScript, com foco em boa experiencia do usuario.',
        tecnologias: ['HTML5', 'CSS3', 'JavaScript'],
        img: 'https://agenciacolors.digital/wp-content/uploads/2023/05/dicas-e-praticas-recomendadas-criacao-de-site-profissional.png',
        link: '#'
    },
    {
        tag: 'Mobile',
        nome: 'Aplicativo Android',
        desc: 'Criacao de aplicativo mobile com interface intuitiva, voltado para facilitar o acesso a servicos digitais.',
        tecnologias: ['Java', 'Android Studio', 'Firebase'],
        img: 'https://studiovisual.com.br/wp-content/uploads/2024/09/Como-criar-um-Site-Profissional-Passo-a-Passo-1-1.jpg.webp',
        link: '#'
    },
    {
        tag: 'Games',
        nome: 'Jogo Online',
        desc: 'Jogo interativo desenvolvido para o navegador com logica de programacao JavaScript e animacoes CSS.',
        tecnologias: ['JavaScript', 'CSS3', 'Canvas API'],
        img: 'https://blog.goweb.pt/wp-content/uploads/2021/10/requisitos-tecnicos-website-profissional-700x467.jpg',
        link: '#'
    }
];

// Seleciona o container de projetos no HTML
const grid = document.getElementById('Projetos');

// Percorre o array e cria um card HTML para cada projeto
projetos.forEach(projeto => {
    // Gera as badges de tecnologias usadas no projeto
    const tecnologiasHTML = projeto.tecnologias
        .map(tech => '<span class="tech-badge">' + tech + '</span>')
        .join('');

    // Cria o elemento de card
    const card = document.createElement('article');
    card.className = 'project-card';

    // Preenche o HTML interno do card com os dados do objeto
    card.innerHTML =
        '<div class="project-img">' +
            '<img src="' + projeto.img + '" alt="' + projeto.nome + '" loading="lazy">' +
        '</div>' +
        '<div class="project-info">' +
            '<span class="project-tag">' + projeto.tag + '</span>' +
            '<h3 class="project-name">' + projeto.nome + '</h3>' +
            '<p class="project-desc">' + projeto.desc + '</p>' +
            '<div class="tech-badges">' + tecnologiasHTML + '</div>' +
            '<div class="project-footer">' +
                '<a href="' + projeto.link + '" class="project-link">' +
                    '<i class="fas fa-external-link-alt"></i> Ver Projeto' +
                '</a>' +
                '<a href="' + projeto.link + '" class="project-link">' +
                    '<i class="fab fa-github"></i> Codigo' +
                '</a>' +
            '</div>' +
        '</div>';

    grid.appendChild(card);
});

// ===== SCROLL REVEAL =====
const revealObserver = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            entry.target.classList.add('revealed');
            revealObserver.unobserve(entry.target);
        }
    });
}, { threshold: 0.12 });

function initReveal() {
    document.querySelectorAll('.skill-item, .project-card').forEach(el => {
        el.style.opacity = '0';
        el.style.transform = 'translateY(28px)';
        el.style.transition = 'opacity 0.55s ease, transform 0.55s ease';
        revealObserver.observe(el);
    });
}

// Com defer, o DOM já está pronto ao executar o script
initReveal();

// Injeta classe revealed via CSS
const revealStyle = document.createElement('style');
revealStyle.textContent = '.revealed { opacity: 1 !important; transform: translateY(0) !important; }';
document.head.appendChild(revealStyle);
