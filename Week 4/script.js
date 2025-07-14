// Display data from Local Storage when the page loads
window.addEventListener('DOMContentLoaded', () => {
  mostrarDatos();
  contarInteracciones();
});

// Get references to DOM elements
const nameInput = document.getElementById('name');
const ageInput = document.getElementById('age');
const outputDiv = document.getElementById('output');
const contadorDiv = document.getElementById('contador');

const saveBtn = document.getElementById('saveBtn');
const clearBtn = document.getElementById('clearBtn');

// Save data to Local Storage
saveBtn.addEventListener('click', () => {
  const name = nameInput.value.trim();
  const age = ageInput.value.trim();

  if (!name || !age) {
    alert('Please enter both name and age.');
    return;
  }

  const usuario = {
    nombre: name,
    edad: age
  };

  localStorage.setItem('usuario', JSON.stringify(usuario));
  console.log('Data saved to Local Storage:', usuario);
  mostrarDatos();
});

// Display data from Local Storage
function mostrarDatos() {
  const datos = localStorage.getItem('usuario');
  if (datos) {
    const usuario = JSON.parse(datos);
    outputDiv.textContent = `Name: ${usuario.nombre}, Age: ${usuario.edad}`;
  } else {
    outputDiv.textContent = 'No information stored.';
  }
}

// Interaction counter using Session Storage
function contarInteracciones() {  // This function runs when the page loads
  let contador = sessionStorage.getItem('contador');    // Retrieves the interaction counter from Session Storage
  contador = contador ? parseInt(contador) + 1 : 1;      // If it exists, increment it; if not, start at 1
  sessionStorage.setItem('contador', contador);         // Save the updated counter to Session Storage
  contadorDiv.textContent = `Interactions: ${contador}`;
  console.log('Interaction counter in Session Storage:', contador);
}

// This event clears data from Local Storage
clearBtn.addEventListener('click', () => {    // Deletes data from Local Storage
  localStorage.removeItem('usuario');
  console.log('Data removed from Local Storage.');
  mostrarDatos();
});
