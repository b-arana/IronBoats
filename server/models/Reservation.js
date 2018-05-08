const mongoose = require('mongoose');
const Schema = mongoose.Schema;
const User = require('./User');

const reservationSchema = new Schema({
    _author: {
        type: Schema.Types.ObjectId,
        ref: 'User'
    },
    origin: String,
    destination: String,
    _place: {
        type: Schema.Types.ObjectId,
        ref: 'Boat'
    },
    price: Number

});

const Reservation = mongoose.model('Reservation', reservationSchema);
module.exports = Reservation;