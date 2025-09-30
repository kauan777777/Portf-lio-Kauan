const themeToggle = document.getElementById('themeToggle');
const body = document.body;
const icon = themeToggle.querySelector('i');

// Iniciar com o modo salvo
if (localStorage.getItem('theme') === 'light') {
    body.classList.add('light-mode');
    icon.classList.remove('fa-sun');
    icon.classList.add('fa-moon');
    themeToggle.innerHTML = '<i class="fas fa-moon"></i> Modo Escuro';
} else {
    body.classList.remove('light-mode');
    icon.classList.remove('fa-moon');
    icon.classList.add('fa-sun');
    themeToggle.innerHTML = '<i class="fas fa-sun"></i> Modo Claro';
}

// Evento de clique no botão
themeToggle.addEventListener('click', () => {
    body.classList.toggle('light-mode');

    if (body.classList.contains('light-mode')) {
        localStorage.setItem('theme', 'light');
        icon.classList.remove('fa-sun');
        icon.classList.add('fa-moon');
        themeToggle.innerHTML = '<i class="fas fa-moon"></i> Modo Escuro';
    } else {
        localStorage.setItem('theme', 'dark');
        icon.classList.remove('fa-moon');
        icon.classList.add('fa-sun');
        themeToggle.innerHTML = '<i class="fas fa-sun"></i> Modo Claro';
    }
});

// Animações com IntersectionObserver
const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            entry.target.classList.add('show');
        }
    });
});

document.querySelectorAll('.hidden').forEach((el) => observer.observe(el));