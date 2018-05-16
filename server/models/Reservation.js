const mongoose = require('mongoose');
const Schema = mongoose.Schema;
const User = require('./User');

const reservationSchema = new Schema({
    author: {
        type: Schema.Types.ObjectId,
        ref: 'User'
    },
    boat: {
        type: Schema.Types.ObjectId,
        ref: 'Boat'
    },
    isWithSkipper: {
        type: Boolean,
        default: false
    },
    totalPrice: Number,
    initialDay: Date,
    endDay: Date

});

const Reservation = mongoose.model('Reservation', reservationSchema);
module.exports = Reservation;