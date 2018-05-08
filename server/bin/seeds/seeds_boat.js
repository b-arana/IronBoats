require("dotenv").config();


const mongoose = require('mongoose');
const bcrypt = require('bcrypt');
const Boat = require('../../models/Boat');
const reservationSchema = require('../../models/Reservation');


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




const boat = [
    {
    name: "Lagon450",
    class:"Catamaran",
    year: 2016,
    capacity: 12,
    size: {
        lenght: 14, // Eslora
        width: 7, // Manga
        openwork: 1
    },
    imgBoat: 'https://static1.clickandboat.com/v1/p/osecm2ilwqknoww6zutkojpa8g04pp6o.medium.jpg.gz'

    },

     {
         name: "Alliaura Marine Privilege 615",
         class: "Catamaran",
         year: 2007,
         capacity: 12,
         size: {
             lenght: 18.5, // Eslora
             width: 9.3, // Manga
             openwork: 1.2
         },
         imgBoat: 'https://static1.clickandboat.com/v1/p/f88xmw40ydnzt2egzrfkws64qpn6ufqo.medium.jpg.gz'


     },
    {
        name: "Belize 43",
        class: "Catamaran",
        year: 2010,
        capacity: 12,
        size: {
            lenght: 13.95, // Eslora
            width: 7, // Manga
            openwork: 1.1
        },
        imgBoat: 'https://static1.clickandboat.com/v1/p/juxoajfwoodmshmyv3io687911uvrvzr.medium.jpg.gz'

    },
   {
       name: "Comar Comet 52",
       class: "Velero",
       year: 2009,
       capacity: 6,
       size: {
           lenght: 15.8, // Eslora
           width: 4.7, // Manga
           openwork: 2.7
       },
       imgBoat: 'https://static1.clickandboat.com/v1/p/ry3ebyudvdbzrbeoe3aehvsvo1zcuuy7.medium.jpg.gz'

   },
   {
       name: "Beneteau oceanis 343",
       class: "Velero",
       year: 2007,
       capacity: 4,
       size: {
           lenght: 11, // Eslora
           width: 3.48, // Manga
           openwork: 1.85
       },
       imgBoat: 'https://static1.clickandboat.com/v1/p/3jvyl0jg76nunw4r5jbu7bqp3mc30dkt.medium.jpg.gz',
       

   },
  {
      name: "AMICA 44",
      class: "Velero",
      year: 1991,
      capacity: 12,
      size: {
          lenght: 14, // Eslora
          width: 3.6, // Manga
          openwork: 2.1
      },
      imgBoat: 'https://static1.clickandboat.com/v1/p/jybocztlfwbm268c4lcyynr45pt376w8.medium.jpg.gz',

  },
  {
      name: "Monterey 322",
      class: "Lancha",
      year: 2005,
      capacity: 10,
      size: {
          lenght: 10, // Eslora
          width: 3.3, // Manga
          openwork: 0.6
      },
      imgBoat: 'https://static1.clickandboat.com/v1/p/0i67g5mbduuv2gjp1b54jumv0iiz0kzg.medium.jpg.gz',
    

  },

  {
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

    {
        name: "Azimut 43 Fly",
        class: "Lancha",
        year: 2014,
        capacity: 11,
        size: {
            lenght: 12.75, // Eslora
            width: 4.22, // Manga
            openwork: 1.27
        },
        imgBoat: 'https://static1.clickandboat.com/v1/p/fcdommw0tb4y2afosts2w5x9eucgyz6l.big.jpg.gz'

    },

];

Boat.create(boat, (err) => {
    if (err) {
        throw (err);
    }
    console.log(`Created ${boat.length} boats`);
});