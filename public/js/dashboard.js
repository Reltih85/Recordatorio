// Cambio de tema claro/oscuro
const themeToggle = document.getElementById('themeToggle');
themeToggle.addEventListener('click', () => {
  document.body.classList.toggle('dark-mode');
  document.body.classList.toggle('light-mode');

  // Cambia el texto del botón
  themeToggle.textContent = 
    document.body.classList.contains('dark-mode') 
      ? 'Cambiar a Modo Claro' 
      : 'Cambiar a Modo Oscuro';
});

// Simulación de recordatorios
document.addEventListener('DOMContentLoaded', () => {
  const reminderItems = document.getElementById('reminderItems');
  
  // Datos simulados
  const reminders = [
    { title: 'Reunión con el equipo', time: 'Hoy a las 3:00 PM' },
    { title: 'Comprar provisiones', time: 'Mañana a las 10:00 AM' },
    { title: 'Enviar reporte', time: 'Viernes a las 5:00 PM' },
  ];

  reminders.forEach(reminder => {
    const li = document.createElement('li');
    li.innerHTML = `<strong>${reminder.title}</strong><br>${reminder.time}`;
    reminderItems.appendChild(li);
  });
});
