require("dotenv").config();

const mongoose = require('mongoose');
const bcrypt = require('bcrypt');
const Reservation = require('../../models/Reservation');
const User = require('../../models/User');


const db = process.env.DB_URL;
mongoose.Promise = Promise;
mongoose
    .connect(db, {
        useMongoClient: true
    })
    .then(() => {
        console.log("Connected to Mongo!");
    })
    .catch(err => {
        console.error("Error connecting to mongo", err);
    });


const reservation = [
    {
    _author: user._id,
    origin: "Club Nautico Ibiza",
    destination: "Club Nautico Altea",
    _place: boat._id,
    price: 300

}
    
];

Reservation.create(reservation, (err) => {
    if (err) {
        throw (err);
    }
   
    console.log(`Created ${reservation.length} reservations`);
});



