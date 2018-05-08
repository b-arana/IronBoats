require("dotenv").config();

const mongoose = require('mongoose');
const bcrypt = require('bcrypt');
const User = require('../../models/User');
const Boat = require('../../models/Boat');
const Reservation = require('../../models/Reservation');

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
        usarname: "Pepito",
        password: bcrypt.hashSync('1234', 10),
        email: "pepe@pepe.com",
        role: "Shipmaster"
    }

];


const boats = [{
        name: "Mariah 215 SX",
        class: "Lancha",
        year: 2014,
        capacity: 10,
        size: {
            lenght: 6.4, // Eslora
            width: 2.4, // Manga
            openwork: 0.5
        },
        imgBoat: 'https://static1.clickandboat.com/v1/p/r2gwtwpexvl3ptxwqgjxsqm2p8exl58x.medium.jpg.gz',


    },

    // {
    //     name: "Azimut 43 Fly",
    //     class: "Lancha",
    //     year: 2014,
    //     capacity: 11,
    //     size: {
    //         lenght: 12.75, // Eslora
    //         width: 4.22, // Manga
    //         openwork: 1.27
    //     },
    //     imgBoat: 'https://static1.clickandboat.com/v1/p/fcdommw0tb4y2afosts2w5x9eucgyz6l.big.jpg.gz'

    // },

];


User.create(users, (err, userDocs) => {
            if (err) {
                throw (err);
            }
            const userAdded = userDocs[0];
            console.log("Created User");

            Boat.create(boats, (err, boatDocs) => {
                if (err) {
                    throw (err);
                }
                
            const boatAdded = boatDocs[0];
            console.log(`Created ${boats.length} boats`);
                
            const reservations = [{
                    _author: userAdded._id,
                    _boat:boatAdded._id,
                    origin: "Club Nautico Ibiza",
                    destination: "Club Nautico Altea",
                    price: 300
                }];
                Reservation.create(reservations)
                    .then(reservationDocs => {
                        reservationDocs.forEach(e => {
                            userAdded.reservations.push(e._id);
                            boatAdded.reservations.push(e._id);
                        });
                    })
                
                    .then(() => {
                        userAdded.save();
                        boatAdded.save().then(() => console.log(`Created ${reservations.length} reservations`));
                    });

            });
        });
    
    




// User.create(users, (err, arrayUser) => {
//     if (err) {
//         throw (err);
//     }
//         console.log(`Created ${users.length} users`);

//     Boat.create(boats, (err) => {
//         if (err) {
//             throw (err);
//         }
//         console.log(`Created ${boats.length} boats`);

//         Reservation.create(reservations, (err, arrayReservations) => {
//             if (err) {
//                 throw (err);
//             }
//             arrayReservations[0].update({
//                     _author: arrayUser[0]
                    
//                 })
//                 .then(() => {
//                     console.log(`Created ${reservations.length} reservations`);
//                     mongoose.disconnect();
//                 });

//         });
//     });
// });


