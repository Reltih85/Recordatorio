// Registro de usuario
if (document.getElementById('registerForm')) {
    document.getElementById('registerForm').addEventListener('submit', async function (e) {
      e.preventDefault();
  
      const username = document.getElementById('regUsername').value;
      const password = document.getElementById('regPassword').value;
  
      try {
        const response = await fetch('/api/auth/register', {
          method: 'POST',
          headers: {
            'Content-Type': 'application/json'
          },
          body: JSON.stringify({ username, password })
        });
  
        const data = await response.json();
        document.getElementById('registerMessage').textContent = response.ok ? data.message : data.message;
      } catch (error) {
        document.getElementById('registerMessage').textContent = 'Error en el servidor';
      }
    });
  }
  
  // Inicio de sesión de usuario
  if (document.getElementById('loginForm')) {
    document.getElementById('loginForm').addEventListener('submit', async function (e) {
      e.preventDefault();
  
      const username = document.getElementById('logUsername').value;
      const password = document.getElementById('logPassword').value;
  
      try {
        const response = await fetch('/api/auth/login', {
          method: 'POST',
          headers: {
            'Content-Type': 'application/json'
          },
          body: JSON.stringify({ username, password })
        });
  
        const data = await response.json();
        if (response.ok) {
          // Redirecciona al dashboard si el login es exitoso
          window.location.href = 'dashboard.html';
        } else {
          document.getElementById('loginMessage').textContent = data.message;
        }
      } catch (error) {
        document.getElementById('loginMessage').textContent = 'Error en el servidor';
      }
    });
  }
  