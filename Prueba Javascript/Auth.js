export function checkAuth() {
  const user = JSON.parse(localStorage.getItem('user'));
  const path = window.location.pathname;

  if (!user && path !== '/login' && path !== '/register') {
    history.pushState({}, '', '/not-found');
  }

  if (user && (path === '/login' || path === '/register')) {
    window.location.href = '/dashboard';
  }
}
