const express = require('express');
const router = express.Router();
const User = require('../models/User');
const Boat = require('../models/Boat');
const Reservation = require('../models/Reservation');
const islogginIn = require('../middlewares/isAuthenticated');


// Creating a reserve

router.post("/new", islogginIn,(req, res, next) => {
    const author = req.user._id;
    const {
        origin,
        destination,
        price
    } = req.body;

    const reservation = new Reservation({
        author,
        origin,
        destination,
        price
    });
    reservation.save()
        .then((savedReservation) => res.status(200).json(savedReservation))
        .catch((e) => res.status(500).json(e));
});


//Showing reservas

router.get("/show",islogginIn, (req, res, next) => {
    Reservation.find()
        .then((boatsFound) => res.status(200).json(boatsFound))
        .catch((e) => res.status(500).json(e));

});

router.get("/showReservation/:id", (req, res, next) => {
    
    Reservation.findById(req.params.id)
        .then((boatsFound) => res.status(200).json(boatsFound))
        .catch((e) => res.status(500).json(e));

});



//CRUD => DELETE

router.get('/deleteReservation/:id', function (req, res, next) {
    Reservation.findByIdAndRemove(req.params.id)
        .then(() => res.status(200).json({
            message: 'removed'
        }))
        .catch(e => res.status(500).json(e));
});


module.exports = router;