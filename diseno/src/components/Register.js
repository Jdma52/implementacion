import React, { useState } from "react";
import "../CSS/Register.css";
import logo from "../assets/logo.jpeg";
import { registerApi } from "../apis/authApi";

function Register({ onCancel }) {
  const [form, setForm] = useState({
    usuario: "",
    email: "",
    nombreCompleto: "",
    contrasena: "",
    rol: "doctor",
  });
  
  const [error, setError] = useState("");

  const handleChange = (field) => (e) => {
    setForm((f) => ({ ...f, [field]: e.target.value }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setError("");

    if (
      !form.usuario.trim() ||
      !form.email.trim() ||
      !form.nombreCompleto.trim() ||
      !form.contrasena.trim()
    ) {
      setError("Todos los campos son obligatorios.");
      return;
    }

    try {
      await registerApi(form);
      alert("Registro exitoso, por favor inicia sesión");
      onCancel();
    } catch (err) {
      setError(err.message);
    }
  };

  return (
    <div className="reg-bg">
      <div className="reg-card">
        <div className="reg-logo-wrapper">
          <div className="reg-logo">
            <img src={logo} alt="Logo" className="reg-logo-img" />
          </div>
        </div>
        <h2 className="reg-title">PETPLAZA</h2>
        <p className="reg-subtitle">HOSPIVET</p>

        <form className="reg-form" onSubmit={handleSubmit}>
          <label className="reg-label">
            Usuario
            <input
              type="text"
              className="reg-input"
              value={form.usuario}
              onChange={handleChange("usuario")}
              required
            />
          </label>

          <label className="reg-label">
            Email
            <input
              type="email"
              className="reg-input"
              value={form.email}
              onChange={handleChange("email")}
              required
            />
          </label>

          <label className="reg-label">
            Nombre Completo
            <input
              type="text"
              className="reg-input"
              value={form.nombreCompleto}
              onChange={handleChange("nombreCompleto")}
              required
            />
          </label>

          <label className="reg-label">
            Contraseña
            <input
              type="password"
              className="reg-input"
              value={form.contrasena}
              onChange={handleChange("contrasena")}
              required
            />
          </label>

          <label className="reg-label">
            Rol
            <select
              className="reg-input"
              value={form.rol}
              onChange={handleChange("rol")}
            >
              <option value="doctor">Doctor</option>
              <option value="lab_staff">Personal de Laboratorio</option>
              <option value="inventory_staff">Personal de Inventario</option>
              <option value="admin">Administrador</option>
            </select>
          </label>

          {error && <div className="reg-error">{error}</div>}

          <div className="reg-button-row">
            <button
              type="button"
              className="reg-button reg-button-secondary"
              onClick={onCancel}
            >
              Cancelar
            </button>
            <button type="submit" className="reg-button reg-button-primary">
              Registrar
            </button>
          </div>
        </form>
      </div>
    </div>
  );
}

export default Register;