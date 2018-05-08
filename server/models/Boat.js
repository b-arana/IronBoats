const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const boatSchema = new Schema({
    name: String,
    class: String,
    year: Number,
    capacity: Number,
    size: {
        lenght: Number,  // Eslora
        width: Number,   // Manga
        openwork: Number // Calado
    },
    place: {
        latitude: Number,
        longitude: Number
    },
    imgBoat: {
        type: String,
        default: ''
    },
    reservations: Array

}, {
    timestamps: {
        createdAt: 'created_at',
        updatedAt: 'updated_at'
    }
});

const Boat = mongoose.model('Boat', boatSchema);
module.exports = Boat;