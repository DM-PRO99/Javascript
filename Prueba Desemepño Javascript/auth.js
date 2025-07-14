export function checkAuth() {  // Función para verificar la autenticación del usuario.
  // Obtiene el usuario almacenado en localStorage y la ruta actual.
  const user = JSON.parse(localStorage.getItem('user'));  //  Convierte el usuario almacenado en localStorage a un objeto.
  const path = window.location.pathname;   // Obtiene la ruta actual del navegador.
 
  if (!user && path !== '/login' && path !== '/register') {  // Si no hay usuario autenticado y la ruta no es de login o registro.
    history.pushState({}, '', '/not-found');  // Redirige a una ruta no encontrada.
  }

  if (user && (path === '/login' || path === '/register')) {    //  Si hay un usuario autenticado y la ruta es de login o registro.
    window.location.href = '/dashboard';    // Redirige al dashboard.
  }
}
