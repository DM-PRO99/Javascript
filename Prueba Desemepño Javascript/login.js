import { loginUser } from '../services.js';
import { navigate } from '../router.js';

export function init() {
  const form = document.getElementById('loginForm');
  if (form) {
    form.addEventListener('submit', async (e) => {
      e.preventDefault();
      const email = document.getElementById('email').value;
      const password = document.getElementById('password').value;
      const user = await loginUser(email, password);
      if (user) {
        localStorage.setItem('user', JSON.stringify(user));
        alert('Inicio de sesión exitoso');
        navigate('/dashboard');
      } else {
        alert('Credenciales incorrectas');
      }
    });
  }
}
