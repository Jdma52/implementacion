import React, { useState } from "react";
import Login from "./components/Login";
import Register from "./components/Register";
import Dashboard from "./components/Dashboard";
import "./App.css";

function App() {
  const [view, setView] = useState("login"); // login | register | logged
  const [fakeUser, setFakeUser] = useState(null);

  // Simula login
  const handleLogin = ({ usuario, contrasena }) => {
    console.log("LOGIN:", { usuario, contrasena });
    setFakeUser({ usuario });
    setView("logged");
  };

  // Simula registro
  const handleRegister = (formData) => {
    console.log("REGISTER:", formData);
    alert("Registro simulado. Ahora inicia sesión.");
    setView("login");
  };

  const handleLogout = () => {
    setFakeUser(null);
    setView("login");
  };

  // Renderizar vistas según el estado
  return (
    <>
      {view === "login" && (
        <Login
          onSubmit={handleLogin}
          onShowRegister={() => setView("register")}
        />
      )}

      {view === "register" && (
        <Register
          onSubmit={handleRegister}
          onCancel={() => setView("login")}
        />
      )}

      {view === "logged" && fakeUser && (
        <Dashboard usuario={fakeUser.usuario} onLogout={handleLogout} />
      )}
    </>
  );
}

export default App;