  
import { checkAuth } from './auth.js';  //  Importa la función de autenticación.
import { router, navigate } from './router.js';  // Importa las funciones de enrutamiento y navegación.

// Inicializa la aplicación al cargar el DOM.
// Verifica la autenticación del usuario y configura el enrutamiento.
document.addEventListener('DOMContentLoaded', () => {
  checkAuth();
  router();


//  Configura el evento de clic para enlaces con el atributo data-link.
  document.body.addEventListener('click', e => { // Verifica si el elemento clicado es un enlace con data-link.
    if (e.target.matches('a[data-link]')) {  // Si es un enlace con data-link.
      e.preventDefault(); // Previene el comportamiento por defecto del enlace.
      navigate(e.target.getAttribute('href'));    // Navega a la ruta especificada en el enlace.
    }
  });

  window.onpopstate = () => router();  //el metodo onpopstate se ejecuta cuando el usuario navega hacia atrás o adelante en el historial del navegador.
});

