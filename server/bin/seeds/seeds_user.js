require("dotenv").config();

const mongoose = require('mongoose');
const bcrypt = require('bcrypt');
const User = require('../../models/User');
const dbURL = process.env.dbURL;

const bcryptSalt = 10;

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

const user = [
{
    usarname: "Admin",
    password: bcrypt.hashSync('1234', 10),
    email: "admin@admin.com",
    role: "Admin"

}, {
    usarname: "Pepito",
    password: bcrypt.hashSync('1234', 10),
    email: "pepe@pepe.com",
    role: "Shipmaster"

},
{
    usarname: "Juanito",
    password: bcrypt.hashSync('1234', 10),
    email: "juan@juan.com",
    role: "Client"

},


];


User.create(user, (err)=>{
    if(err) {
        throw (err);
    }


    console.log(`Created ${user.length} users`);
});