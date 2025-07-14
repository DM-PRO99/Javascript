import { checkAuth } from './auth.js';
import { router, navigate } from './router.js';

document.addEventListener('DOMContentLoaded', () => {
  checkAuth();
  router();

  document.body.addEventListener('click', e => {
    if (e.target.matches('a[data-link]')) {
      e.preventDefault();
      navigate(e.target.getAttribute('href'));
    }
  });

  window.onpopstate = () => router();
});
