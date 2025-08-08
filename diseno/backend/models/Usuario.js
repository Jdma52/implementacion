const mongoose = require("mongoose");

const usuarioSchema = new mongoose.Schema({
  usuario: { type: String, required: true, unique: true },
  email: { type: String, required: true, unique: true },
  nombreCompleto: { type: String, required: true },
  contrasena: { type: String, required: true },
  rol: { type: String, enum: ['doctor', 'lab_staff', 'inventory_staff', 'admin'], default: 'doctor' }
});

module.exports = mongoose.model("Usuario", usuarioSchema);