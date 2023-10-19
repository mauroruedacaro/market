const express = require('express');
const router = express.Router();
const Articulo = require('../models/articulo');

// Ruta para obtener todos los artículos
router.get('/', async (req, res) => {
    try {
    const articulos = await Articulo.find();
    res.json(articulos);
    } catch (err) {
    res.status(500).json({ error: 'Error al obtener los artículos' });
    }
});

// Otras rutas para crear, actualizar y eliminar artículos

module.exports = router;
