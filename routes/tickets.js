const express = require('express');
const router = express.Router();
const Ticket = require('../models/ticket');

// Ruta para obtener todos los tickets
router.get('/', async (req, res) => {
    try {
        const tickets = await Ticket.find();
        res.json(tickets);
    } catch (err) {
        res.status(500).json({ error: 'Error al obtener los tickets' });
    }
});

// Otras rutas para crear, actualizar y eliminar tickets

module.exports = router;
