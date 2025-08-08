import React from "react";
import "../CSS/Dashboard.css";
import logo from "../assets/logo.jpeg";
import { FaFacebook, FaInstagram, FaWhatsapp } from "react-icons/fa";

function Dashboard() {
  return (
    <div className="dashboard-container">
      <aside className="sidebar">
        <div className="logo-section">
          <img src={logo} alt="Pet Plaza" className="logo-img" />
          <p className="logo-text">PET PLAZA<br />HOSPIVET</p>
        </div>
        <ul className="menu">
          <li>🏠 Inicio</li>
          <li>🐶 Mascotas</li>
          <li>📅 Citas</li>
          <li>👩‍⚕️ Veterinarios</li>
          <li>🛒 Productos</li>
          <li>⚙️ Configuración</li>
          <li>🔒 Cerrar sesión</li>
        </ul>
      </aside>
      
      <main className="main-content">
        <h1 className="title">Bienvenido a Pet Plaza</h1>

        <div className="search-bar">
          <input type="text" placeholder="Buscar..." />
        </div>

        <nav className="nav-links">
          <a href="#">INICIO</a>
          <a href="#">QUIÉNES SOMOS</a>
          <a href="#">SERVICIOS</a>
          <a href="#">BLOG</a>
          <a href="#">CONTÁCTENOS</a>
          <a href="#">AGENDA TU CITA</a>
        </nav>

        <div className="cards">
          <div className="card">
            <p>🐾 Mascotas registradas</p>
            <strong>124</strong>
          </div>
          <div className="card">
            <p>📅 Citas programadas</p>
            <strong>16</strong>
          </div>
          <div className="card">
            <p>💉 Vacunas aplicadas</p>
            <strong>32</strong>
          </div>
          <div className="card">
            <p>🛍 Productos en Stock</p>
            <strong>58</strong>
          </div>
          <div className="card">
            <p>📆 Recordatorios de hoy</p>
            <strong>4</strong>
          </div>
        </div>

        <div className="action-buttons">
          <button className="btn btn-primary">➕ Registrar Mascota</button>
          <button className="btn btn-primary">📅 Agendar Cita</button>
          <button className="btn btn-primary">💊 Agregar Producto</button>
        </div>

        <div className="footer-icons">
          <FaFacebook />
          <FaInstagram />
          <FaWhatsapp />
        </div>
      </main>
    </div>
  );
}

export default Dashboard;
