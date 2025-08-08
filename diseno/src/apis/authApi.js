// src/apis/authApi.js

// const BASE_URL = "http://localhost:5000/api/auth";
const BASE_URL = "/api/auth"; // mismo dominio en Render // ajusta según tu backend

export async function loginApi({ usuario, contrasena }) {
  const res = await fetch(`${BASE_URL}/login`, {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify({ usuario, contrasena }),
  });

  const data = await res.json();

  if (!res.ok) throw new Error(data.mensaje || "Error en login");

  return data; // retorna token, usuario, rol
}

export async function registerApi(formData) {
  const res = await fetch(`${BASE_URL}/register`, {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify(formData),
  });

  const data = await res.json();

  if (!res.ok) throw new Error(data.mensaje || "Error en registro");

  return data; // mensaje de éxito
}