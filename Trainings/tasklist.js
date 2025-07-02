const form = document.getElementById('form-tarea');
const mensaje = document.getElementById('mensaje');

form.addEventListener('submit', async (e) => {
  e.preventDefault();

  const titulo = document.getElementById('titulo').value;
  const descripcion = document.getElementById('descripcion').value;
  const prioridad = document.getElementById('prioridad').value;

  const nuevaTarea = {
    titulo,
    descripcion,
    prioridad,
    estado: 'pendiente'
  };

  


  try {
    const res = await fetch('http://localhost:3000/tareas', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify(nuevaTarea)
    });

    if (res.ok) {
      const data = await res.json();
      mensaje.textContent = `✅ Tarea agregada con ID: ${data.id}`;
      form.reset();
    } else {
      mensaje.textContent = '❌ Error al agregar tarea.';
    }
    cargarTareas(); // Cargar tareas después de agregar una nueva
  } catch (error) {
    mensaje.textContent = '❌ No se pudo conectar al servidor.';
    console.error(error);
  }
});

function  cargarTareas() {
  fetch('http://localhost:3000/tareas')
    .then(res => res.json())
    .then(tareas => {
      const listaTareas = document.getElementById('mensaje');
      listaTareas.innerHTML = '';

      tareas.forEach(tarea => {
        listaTareas.innerHTML += `
          <div>
            <h3>${tarea.titulo}</h3>
            <p>${tarea.descripcion}</p>
            <p>Prioridad: ${tarea.prioridad}</p>
            <p>Estado: ${tarea.estado}</p><button onclick="cambiarEstado('${tarea.id}')">Completado</button>
            <Button onclick="eliminarTarea('${tarea.id}')">Eliminar</BUTTON>
            </div>
        `;
      });
    })
    .catch(error => {
      console.error('Error al cargar las tareas:', error);
    });
}

// function cambiarEstado(id) {  
//   let estado = '';
  
// fetch(`http://localhost:3000/tareas/${id}`)
//     .then(res => res.json())
//     .then(tarea => {
//       if (tarea.estado === 'pendiente') {
//       estado = 'completada';
//     }
//     else {
//       estado = 'pendiente';
//     }
//     fetch(`http://localhost:3000/tareas/${id}`, {
//     method: 'PATCH',
//     headers: {
//       'Content-Type': 'application/json'
//     },
//     body: JSON.stringify({ estado: estado })
//   })

//     })
    

  
// }

function cambiarEstado(id) {
  fetch(`http://localhost:3000/tareas/${id}`, {
    method: 'PATCH',
    headers: {
    'Content-Type': 'application/json'   
    },
    body: JSON.stringify({ estado: 'completada' })  
  })
    }

  function eliminarTarea(id) {
      fetch(`http://localhost:3000/tareas/${id}`, {
        method: 'DELETE'
      })
        .then(res => res.json())
        .then(() => {
          cargarTareas(); 
        })
        .catch(error => {
          console.error('Error al eliminar la tarea:', error);
        });
    }
    cargarTareas(); 
