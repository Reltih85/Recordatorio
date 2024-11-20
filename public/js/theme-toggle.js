// Modo claro/oscuro
const themeToggle = document.getElementById('themeToggle');
themeToggle.addEventListener('click', () => {
  document.body.classList.toggle('dark-mode');
  document.body.classList.toggle('light-mode');
  themeToggle.textContent = document.body.classList.contains('dark-mode')
    ? 'Cambiar a Modo Claro'
    : 'Cambiar a Modo Oscuro';
});

// Botón de cerrar sesión
const logoutButton = document.getElementById('logoutButton');
logoutButton.addEventListener('click', () => {
  window.location.href = 'index.html'; // Redirige al inicio de sesión
});
