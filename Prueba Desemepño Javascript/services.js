const API = "http://localhost:3000";

//funcion para obtener un usuario por su email y password
export async function loginUser(email, password) {
  const res = await fetch(`${API}/users?email=${email}&password=${password}`);
  const users = await res.json();
  return users.length > 0 ? users[0] : null;
}


//funcion para obtener un usuario por su ID
export async function registerUser(user) {      // Function to register a new user
  const res = await fetch(`${API}/users`, {
    method: "POST",
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify(user)
  });
  return await res.json();
} 


//funcion para obtener todos los eventos
export async function getEvents() {  // Function to get all events
  const res = await fetch(`${API}/events`);
  return await res.json();
}



//funcion para obtener un evento por su ID
export async function createEvent(event) {  // Function to create a new event
  const res = await fetch(`${API}/events`, {
    method: "POST",
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify(event)
  });
  return await res.json();
} 
