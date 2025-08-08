const Usuario = require("../models/Usuario");
const bcrypt = require("bcryptjs");
const jwt = require("jsonwebtoken");

exports.registrar = async (req, res) => {
  try {
    const { usuario, email, nombreCompleto, contrasena, rol } = req.body;

    const existe = await Usuario.findOne({ usuario });
    if (existe) return res.status(400).json({ mensaje: "Usuario ya existe" });

    const hash = await bcrypt.hash(contrasena, 10);
    const nuevoUsuario = new Usuario({ usuario, email, nombreCompleto, contrasena: hash, rol });
    await nuevoUsuario.save();

    res.status(201).json({ mensaje: "Usuario registrado correctamente" });
  } catch (err) {
    res.status(500).json({ mensaje: "Error en el servidor", error: err.message });
  }
};

exports.login = async (req, res) => {
  try {
    const { usuario, contrasena } = req.body;

    const user = await Usuario.findOne({ usuario });
    if (!user) return res.status(400).json({ mensaje: "Usuario no encontrado" });

    const match = await bcrypt.compare(contrasena, user.contrasena);
    if (!match) return res.status(400).json({ mensaje: "Contraseña incorrecta" });

    const token = jwt.sign({ id: user._id, rol: user.rol }, process.env.JWT_SECRET, {
      expiresIn: "1d",
    });

    res.status(200).json({ token, usuario: user.usuario, rol: user.rol });
  } catch (err) {
    res.status(500).json({ mensaje: "Error en el servidor", error: err.message });
  }
};