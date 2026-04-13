# 💼 Portfólio — Josenilton Landim

Primeira versão do portfólio pessoal desenvolvido como atividade prática do curso de **Tecnologia em Sistemas para Internet** — AUPI, polo de Cristino Castro, Piauí.

---

## 📋 Sobre o Projeto

Página web de portfólio profissional construída com **React + Vite**. Apresenta informações pessoais, habilidades técnicas e projetos renderizados dinamicamente a partir de um array de objetos.

---

## ✅ Requisitos Atendidos

| Requisito | Implementação |
|---|---|
| Estrutura Semântica HTML5 | `<header>`, `<nav>`, `<main>`, `<section>`, `<article>`, `<footer>` nos componentes JSX |
| Cabeçalho com menu | Componente `Navbar.jsx` com `<header>` e `<nav>` |
| Seção Sobre Mim | Componente `About.jsx` — `<section id="sobre">` |
| Seção Meus Projetos | Componente `Projects.jsx` — `<section id="projetos">` |
| Rodapé | Componente `Footer.jsx` com contato e redes sociais |
| Flexbox | Navbar, hero, footer, cards internos |
| CSS Grid | Seção "Sobre" (2 colunas) e grid de projetos |
| Responsividade | Media queries para mobile (≤900px e ≤520px) |
| Array de objetos JS | `src/data/projetos.js` com 3 projetos |
| Renderização dinâmica | `.map()` em `Projects.jsx` gerando `<ProjectCard />` para cada objeto |

---

## 🗂️ Estrutura de Arquivos

```
josenilton_portifolio-atv1-main/
├── index.html              # Entry point do Vite
├── vite.config.js          # Configuração do Vite + plugin React
├── package.json            # Dependências do projeto
├── README.md               # Documentação
├── public/
│   └── perfil.jpeg         # Foto de perfil (servida em /perfil.jpeg)
└── src/
    ├── main.jsx            # Monta o app React no #root
    ├── App.jsx             # Componente raiz — organiza a página
    ├── index.css           # Estilos globais (Flexbox, Grid, responsividade)
    ├── components/
    │   ├── Navbar.jsx      # Cabeçalho com menu e lógica de scroll
    │   ├── Hero.jsx        # Seção de apresentação com foto
    │   ├── About.jsx       # Seção Sobre Mim + grid de tecnologias
    │   ├── Projects.jsx    # Seção Meus Projetos (renderização dinâmica)
    │   └── Footer.jsx      # Rodapé com contato e redes
    └── data/
        └── projetos.js     # Array de objetos exportado
```

---

## 🛠️ Tecnologias Utilizadas

- **React 18** — componentização e gerenciamento de estado
- **Vite** — bundler e servidor de desenvolvimento
- **HTML5** — estrutura semântica nos componentes JSX
- **CSS3** — Flexbox, Grid, variáveis CSS, media queries, animações
- **Google Fonts** — fonte Poppins
- **Font Awesome 6** — ícones

---

## 📐 Estrutura de Componentes

```
App.jsx
├── Navbar.jsx       ← Cabeçalho com menu (useState + useEffect)
├── main
│   ├── Hero.jsx     ← Apresentação e foto de perfil
│   ├── About.jsx    ← Sobre Mim e grid de tecnologias
│   └── Projects.jsx ← Meus Projetos — renderiza array via .map()
└── Footer.jsx       ← Rodapé com contato e redes sociais
```

---

## ⚙️ Como os Projetos são Renderizados

Os dados ficam em `src/data/projetos.js` como um array de objetos:

```js
const projetos = [
  {
    tag: 'Web',
    nome: 'Site Profissional',
    desc: 'Descrição do projeto...',
    tecnologias: ['HTML5', 'CSS3', 'JavaScript'],
    img: 'url-da-imagem',
    link: '#',
  },
  // ...
]

export default projetos
```

O componente `Projects.jsx` importa o array e usa `.map()` para criar um `<ProjectCard />` para cada objeto:

```jsx
{projetos.map((projeto) => (
  <ProjectCard key={projeto.nome} projeto={projeto} />
))}
```

---

## 📱 Responsividade

| Breakpoint | Comportamento |
|---|---|
| > 900px | Layout em duas colunas (hero + foto lado a lado) |
| ≤ 900px | Layout empilhado, menu hamburguer ativado |
| ≤ 520px | Cards de projetos em coluna única, footer empilhado |

---

## ▶️ Como Executar

```bash
# Instalar dependências
npm install

# Iniciar servidor de desenvolvimento
npm run dev

# Gerar build de produção
npm run build
```

Acesse em: `http://localhost:5173`

---

## 👤 Autor

**Josenilton Landim**  
Estudante de Tecnologia em Sistemas para Internet — AUPI  
Polo: Cristino Castro, Piauí  
📧 joseniltonrolim77@gmail.com
