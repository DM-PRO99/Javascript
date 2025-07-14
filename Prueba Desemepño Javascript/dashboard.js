export function init() {
  const container = document.getElementById('eventList');
  const user = JSON.parse(localStorage.getItem('user'));

  if (container && user) {
    container.innerHTML = `
      <p>Bienvenido, <strong>${user.name}</strong> (${user.role})</p>
      <button id="logoutBtn">Cerrar sesión</button>
    `;

    document.getElementById('logoutBtn').addEventListener('click', () => {
      localStorage.removeItem('user');
      window.location.href = '/login';
    });
  }
}
