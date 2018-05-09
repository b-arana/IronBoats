require("dotenv").config();

const mongoose = require('mongoose');
const bcrypt = require('bcrypt');
const User = require('../models/User');
const Boat = require('../models/Boat');
const Reservation = require('../models/Reservation');

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

const users = [{
    username: "Pepito",
    password: bcrypt.hashSync('1234', 10),
    email: "pepe@pepe.com",
    role: "Shipmaster"
}];


const boats = [{
    name: "Mariah 215 SX",
    type: "Lancha",
    year: 2014,
    capacity: 10,
    size: {
        lenght: 6.4, // Eslora
        width: 2.4, // Manga
        openwork: 0.5
    },
    imgBoat: 'https://static1.clickandboat.com/v1/p/r2gwtwpexvl3ptxwqgjxsqm2p8exl58x.medium.jpg.gz',
}];

User.collection.drop();
Boat.collection.drop();
Reservation.collection.drop();


User.create(users)
.then(userDocs => {
    const boatsWithOwner = boats.map(b => {
        b.owner = userDocs[0]._id;
        return b;
    });

    return Boat.create(boatsWithOwner).then(boatDocs => {
        const reservations = [{
            author: userDocs[0]._id,
            boat: boatDocs[0]._id,
            origin: "Club Nautico Ibiza",
            destination: "Club Nautico Altea",
            price: 300
        }];
        return Reservation.create(reservations);
    });
})
.then(() => {
    console.log("ALL CREATED");
    mongoose.disconnect();
})
.catch(e => {
    console.log(e);
});



