const mongoose = require('mongoose');

const ticketSchema = new mongoose.Schema({
    subtotal: Number,
    iva: Number,
    total: Number,
    articulos: [{ type: mongoose.Schema.Types.ObjectId, ref: 'Articulo' }],
    usuario: { type: mongoose.Schema.Types.ObjectId, ref: 'Usuario' },
});

const Ticket = mongoose.model('Ticket', ticketSchema);

module.exports = Ticket;
