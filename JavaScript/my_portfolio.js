document.addEventListener('DOMContentLoaded', () => {
    const currentYear = document.getElementById('current-year');
    if (currentYear) currentYear.textContent = new Date().getFullYear();
});

const modeToggle = document.querySelector('.mode-toggle');
const modeIcon = document.getElementById('mode-icon');
const body = document.body;

function setMode(isDark) {
    if (isDark) {
        body.classList.add('dark-mode');
        modeIcon.classList.replace('fa-sun', 'fa-moon');
        localStorage.setItem('theme', 'dark');
    } else {
        body.classList.remove('dark-mode');
        modeIcon.classList.replace('fa-moon', 'fa-sun');
        localStorage.setItem('theme', 'light');
    }
}

const savedTheme = localStorage.getItem('theme');
const prefersDark = window.matchMedia('(prefers-color-scheme: dark)').matches;
setMode(savedTheme === 'dark' || (!savedTheme && prefersDark));

modeToggle.addEventListener('click', () => {
    setMode(!body.classList.contains('dark-mode'));
});

const projects = [
    {
        title: "Chat Bot AI",
        description: "Interactive chatbot using HTML, CSS, and JavaScript.",
        liveUrl: "https://deep-seek-open-ai.vercel.app/",
        repoUrl: "https://github.com/Abun-Hara/DeepSeek_OpenAi.git",
        imageUrl: "./image/chat_bot_ai.png"
    },
    {
        title: "Image Slider",
        description: "Responsive image slider with smooth transitions and controls.",
        liveUrl: "https://image-slider-brown-psi.vercel.app/",
        repoUrl: "https://github.com/Abun-Hara/-Image-Slider.git",
        imageUrl: "./image/image_slider.png"
    },
    {
        title: "Movie Search App",
        description: "React app to browse and search movies with live API.",
        liveUrl: "https://movie-search-app-x393.vercel.app/",
        repoUrl: "https://github.com/Abun-Hara/Movie-Search-Application.git",
        imageUrl: "./image/movie_search.png"
    },
    {
        title: "Online Shop",
        description: "E-commerce UI built in React featuring cart and product listings.",
        liveUrl: "https://online-shopping-nine-mu.vercel.app/",
        repoUrl: "https://github.com/Abun-Hara/Online_Shopping-.git",
        imageUrl: "./image/online_shoping.png"
    },
    {
        title: "Weather App",
        description: "Weather forecast web app using public API and JS.",
        liveUrl: "https://weather-application-1zjn.vercel.app/",
        repoUrl: "https://github.com/Abun-Hara/Weather_Application.git",
        imageUrl: "./image/weather_fetcher.png"
    },
    {
        title: "Node.js Project",
        description: "Server-side app (Coming Soon)",
        liveUrl: "#",
        repoUrl: "#",
        disabled: true,
        imageUrl: "./image/un_finish_project.jpg"
    },
];

const projectContainer = document.getElementById('projects-container');

const cardObserver = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            entry.target.classList.add('in-view');
            cardObserver.unobserve(entry.target);
        }
    });
}, { threshold: 0.2 });

projects.forEach(p => {
    const card = document.createElement('div');
    card.className = 'project-card';
    const liveLink = p.disabled ? `<a class="disabled" aria-disabled="true" tabindex="-1">Live Soon</a>` : `<a href="${p.liveUrl}" target="_blank">Live Demo</a>`;
    const repoLink = p.disabled ? `<a class="disabled" aria-disabled="true" tabindex="-1">Repo Soon</a>` : `<a href="${p.repoUrl}" target="_blank">GitHub Repo</a>`;
    card.innerHTML = `
        <img src="${p.imageUrl}" alt="${p.title}">
        <div class="project-content">
            <h3>${p.title}</h3>
            <p>${p.description}</p>
            <div class="project-links">
                ${liveLink}
                ${repoLink}
            </div>
        </div>
    `;
    projectContainer.appendChild(card);
    cardObserver.observe(card);
});

const hamburger = document.querySelector('.hamburger');
const navLinks = document.getElementById('nav-links');
hamburger.addEventListener('click', () => navLinks.classList.toggle('active'));
navLinks.querySelectorAll('a').forEach(a => a.addEventListener('click', () => navLinks.classList.remove('active')));

const socialLinks = [
    { name: 'Twitter', url: 'https://twitter.com/@Abunu_Mezgebu', icon: 'fa-brands fa-x-twitter' },
    { name: 'LinkedIn', url: 'https://linkedin.com/in/Abunu Mezgebu', icon: 'fa-brands fa-linkedin' },
    { name: 'Instagram', url: 'https://instagram.com/abune_hara', icon: 'fa-brands fa-instagram' },
    { name: 'Telegram', url: 'https://t.me/hara2127', icon: 'fa-brands fa-telegram' },
    { name: 'Email', url: 'mailto:abunuwudu@gmail.com', icon: 'fa-solid fa-envelope' }
];

const socialContainer = document.getElementById('social-links');
socialLinks.forEach(s => {
    const a = document.createElement('a');
    a.href = s.url;
    a.target = '_blank';
    a.classList.add('social-link');
    a.innerHTML = `<i class="${s.icon}"></i><span>${s.name}</span>`;
    socialContainer.appendChild(a);
});
