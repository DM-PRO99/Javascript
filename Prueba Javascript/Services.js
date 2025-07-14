const API = "http://localhost:3000";

export async function loginUser(email, password) {
  const res = await fetch(`${API}/users?email=${email}&password=${password}`);
  const users = await res.json();
  return users.length > 0 ? users[0] : null;
}

export async function registerUser(user) {
  const res = await fetch(`${API}/users`, {
    method: "POST",
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify(user)
  });
  return await res.json();
}
