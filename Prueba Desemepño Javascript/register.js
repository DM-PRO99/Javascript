import { registerUser } from '../services.js';
import { navigate } from '../router.js';

export function init() {
  const form = document.getElementById('registerForm');
  if (form) {
    form.addEventListener('submit', async (e) => {
      e.preventDefault();
      const name = document.getElementById('name').value;
      const email = document.getElementById('email').value;
      const password = document.getElementById('password').value;
      const role = document.getElementById('role').value;

      const user = { name, email, password, role };
      await registerUser(user);
      alert('Usuario registrado');
      navigate('/login');
    });
  }
}
