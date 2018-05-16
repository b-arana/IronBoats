const express = require('express');
const router = express.Router();
const User = require('../models/User');
const Boat = require('../models/Boat');
const Reservation = require('../models/Reservation');
const islogginIn = require('../middlewares/isAuthenticated');
const isOwner = require('../middlewares/isOwner');

// Creating a reserve

router.post("/:boat", islogginIn, (req, res, next) => {
    const author = req.user.id;
    const boat = req.params.boat;
    console.log(author);
    console.log(boat);
    const {
        initialDay,
        endDay,
        isWithSkipper,
        totalPrice
    } = req.body;

    const newReservation = new Reservation({
        author,
        boat,
        totalPrice,
        initialDay,
        endDay,
        isWithSkipper
    });
    newReservation.save()
        .then((reserva) => res.status(200).json(reserva))
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
        .then(reserva => res.status(200).json(reserva))
        .catch(e => res.status(500).json(e));
});


module.exports = router;