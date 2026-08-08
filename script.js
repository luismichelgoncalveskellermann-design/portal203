// Seleciona o botão de troca de tema
const themeToggle = document.getElementById('theme-toggle');

// Verifica se o usuário já tinha uma preferência salva no navegador
const currentTheme = localStorage.getItem('theme');
if (currentTheme) {
    document.documentElement.setAttribute('data-theme', currentTheme);
    if (currentTheme === 'dark') {
        themeToggle.textContent = '☀️ Modo';
    }
}

// Escuta o clique do botão para alternar os temas
themeToggle.addEventListener('click', () => {
    let theme = 'light';

    // Se o atributo atual for light ou não existir, muda para dark
    if (document.documentElement.getAttribute('data-theme') !== 'dark') {
        theme = 'dark';
        themeToggle.textContent = '☀️ Modo';
    } else {
        themeToggle.textContent = '🌙 Modo';
    }

    // Aplica o tema na tag <html> e salva a escolha localmente
    document.documentElement.setAttribute('data-theme', theme);
    localStorage.setItem('theme', theme);
});
