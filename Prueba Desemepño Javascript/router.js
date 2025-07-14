export function navigate(path) {  // funcion para navegar entre rutas.
  history.pushState({}, '', path); // Actualiza la URL sin recargar la página.
  router(); // Llama a la función router para cargar el contenido de la nueva ruta.
}


export function router() {    // Función para manejar el enrutamiento de la aplicación.
  const path = window.location.pathname;  // Obtiene la ruta actual del navegador.
  const app = document.getElementById('app');  // Obtiene el elemento principal donde se cargará el contenido.

  fetch(`${path}.html`)   //  Intenta cargar el archivo HTML correspondiente a la ruta actual.
    .then(res => {    // Comprueba si la respuesta es exitosa.
      if (!res.ok) throw new Error('404');   // Si no es exitosa, lanza un error.
      return res.text();    // Convierte la respuesta a texto.
    })
    .then(html => {    // Si la respuesta es exitosa, actualiza el contenido del elemento principal.
      app.innerHTML = html;
      loadScript(path);  // Carga el script correspondiente a la ruta actual.
    })
    .catch(() => {
      fetch('/not-found.html')
        .then(res => res.text())
        .then(html => app.innerHTML = html);
    });
}



// Función para cargar scripts específicos según la ruta actual.
function loadScript(path) {   // Verifica la ruta actual y carga el script correspondiente.
  if (path === '/login') import('./views/login.js').then(m => m.init());
  if (path === '/register') import('./views/register.js').then(m => m.init());
  if (path === '/dashboard') import('./views/dashboard.js').then(m => m.init());
  if (path === '/eventos') import('./views/eventos.js').then(m => m.init());
}
