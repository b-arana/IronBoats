const express = require('express');
const router = express.Router();
const User = require('../models/User');
const Boat = require('../models/Boat');
const Reservation = require('../models/Reservation');
const islogginIn = require('../middlewares/isAuthenticated');


// Creating a reserve

router.post("/:boat", islogginIn, (req, res, next) => {
    const author = req.user.id;
    const boat = req.params.boat;
    console.log(author);
    console.log(boat);
    const {
        origin,
        destination,
        price
    } = req.body;

    const newReservation = new Reservation({
        author,
        boat,
        origin,
        destination,
        price
    });
    newReservation.save()
        .then((savedReservation) => res.status(200).json(savedReservation))
        .catch((e) => res.status(500).json(e));
});


//Showing reservas

router.get("/show/:id_reserva", islogginIn, (req, res, next) => {
    const user = req.user.id;
    console.log(user);
    const {id_reserva} = req.params;
    Reservation.findById(id_reserva)
        .populate('author')      
        .populate('boat')
        .then( reserva => res.status(200).json(reserva))
        .catch((e) => res.status(500).json(e));
});


//Delete a reserve

router.get('/delete/:id', islogginIn, (req, res, next) => {
    const reserva = req.params.id;
    console.log(reserva);
    Reservation.findByIdAndRemove(req.params.id)
        .then( reservationDelete => res.status(200).json(reservationDelete))
        .catch(e => res.status(500).json(e));
});


module.exports = router;