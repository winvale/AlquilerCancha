const express = require('express');
const bodyParser = require('body-parser');
const cors = require('cors');

const app = express();
const port = 3001;

app.use(cors());
app.use(bodyParser.json());

//--- Base de datos en memoria ---
let canchas = [
    {
        id: 1,
        nombre: 'La Diego Armando',
        codigoInterno: 'ful-AF321',
        tipo: 'Cancha de 11',
        servicios: { vestuario: true, iluminacion: true, cespedSintetico: false }
    },
    {
        id: 2,
        nombre: 'El Templo',
        codigoInterno: 'ful-JR10',
        tipo: 'Cancha de 7',
        servicios: { vestuario: true, iluminacion: true, cespedSintetico: true }
    },
    {
        id: 3,
        nombre: 'La Bombonera de bolsillo',
        codigoInterno: 'ful-BP001',
        tipo: 'Cancha de 5',
        servicios: { vestuario: false, iluminacion: true, cespedSintetico: true }
    }
];

let reservas = [];
let proximoIdReserva = 1;

//--- Endpoints API ---

// GET: Obtener todas las canchas
app.get('/api/canchas', (req, res) => {
    res.json(canchas);
});

// GET: Obtener todas las reservas
app.get('/api/reservas', (req, res) => {
    const reservasConDetalle = reservas.map(reserva => {
        const cancha = canchas.find(c => c.id === reserva.canchaId);
        return { ...reserva, cancha: cancha ? cancha.nombre : 'Cancha no encontrada' };
    });
    res.json(reservasConDetalle);
});

// POST: Crear una nueva reserva
app.post('/api/reservas', (req, res) => {
    const { canchaId, cliente, empleado, fechaTurno } = req.body;

    if (!canchaId || !cliente || !empleado || !fechaTurno) {
        return res.status(400).json({ message: 'Todos los campos son obligatorios' });
    }

    const cancha = canchas.find(c => c.id === parseInt(canchaId));
    if (!cancha) {
        return res.status(404).json({ message: 'La cancha solicitada no existe' });
    }

    const nuevaReserva = {
        id: proximoIdReserva++,
        canchaId: parseInt(canchaId),
        cliente,
        empleado,
        fechaReserva: new Date(), // Se setea automáticamente
        fechaTurno
    };

    reservas.push(nuevaReserva);
    console.log('Nueva reserva creada:', nuevaReserva);
    res.status(201).json(nuevaReserva);
});

app.listen(port, () => {
    console.log(`Servidor corriendo en http://localhost:${port}`);
});
