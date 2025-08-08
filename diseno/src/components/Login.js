import React, { useState } from "react";
import "../CSS/Login.css";
import logo from "../assets/logo.jpeg";
import { loginApi } from "../apis/authApi";

function Login({ onSubmit, onShowRegister }) {
  const [usuario, setUsuario] = useState("");
  const [contrasena, setContrasena] = useState("");
  const [error, setError] = useState("");

  const handleSubmit = async (e) => {
    e.preventDefault();
    setError("");

    if (!usuario.trim() || !contrasena.trim()) {
      setError("Por favor completa ambos campos.");
      return;
    }

    try {
      const data = await loginApi({ usuario, contrasena });
      localStorage.setItem("token", data.token);
      localStorage.setItem("rol", data.rol);

      alert(`Bienvenido, ${data.usuario}`);
      // Llamar la función onSubmit que viene desde App.js
      if (typeof onSubmit === "function") {
        onSubmit({ usuario: data.usuario, contrasena });
      }
    } catch (err) {
      setError(err.message);
    }
  };

  return (
    <div className="auth-bg">
      <div className="auth-card">
        <div className="auth-logo-wrapper">
          <div className="auth-logo">
            <img src={logo} alt="Logo" className="auth-logo-img" />
          </div>
        </div>
        <h2 className="auth-title">PETPLAZA</h2>
        <p className="auth-subtitle">HOSPIVET</p>

        <form className="auth-form" onSubmit={handleSubmit}>
          <label className="auth-label">
            Usuario
            <input
              type="text"
              className="auth-input"
              placeholder="Ingrese su usuario"
              value={usuario}
              onChange={(e) => setUsuario(e.target.value)}
              required
            />
          </label>

          <label className="auth-label">
            Contraseña
            <input
              type="password"
              className="auth-input"
              placeholder="Ingrese su contraseña"
              value={contrasena}
              onChange={(e) => setContrasena(e.target.value)}
              required
            />
          </label>

          {error && <div className="auth-error">{error}</div>}

          <button type="submit" className="auth-button-primary">
            Iniciar Sesión
          </button>
        </form>

        <div className="auth-alt-action">
          <button
            type="button"
            className="auth-link-button"
            onClick={onShowRegister}
          >
            ¿No tienes cuenta? Regístrate aquí
          </button>
        </div>
      </div>
    </div>
  );
}

export default Login;