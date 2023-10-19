const express = require('express');
const mongoose = require('mongoose');
const app = express();
const port = process.env.PORT || 3000;
mongodb://mauricior:mrclfm5126@cluster0mrc.eoxa1w9.mongodb.net
// Conectar a la base de datos
mongoose.connect('mongodb://localhost/supermercado', {
    useNewUrlParser: true,
    useUnifiedTopology: true,
});

const db = mongoose.connection;
db.on('error', console.error.bind(console, 'Error de conexión a MongoDB:'));
db.once('open', () => {
    console.log('Conexión a MongoDB exitosa.');
});

// Importar los modelos
const Articulo = require('./models/articulo');
const Ticket = require('./models/ticket');

// Configurar las rutas
app.use(express.json());

// Rutas para los artículos
const articulosRouter = require('./routes/articulos');
app.use('/articulos', articulosRouter);

// Rutas para los tickets
const ticketsRouter = require('./routes/tickets');
app.use('/tickets', ticketsRouter);

// Iniciar el servidor
app.listen(port, () => {
    console.log(`La aplicación está escuchando en el puerto ${port}`);
});
