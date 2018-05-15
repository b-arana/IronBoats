const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const boatSchema = new Schema({
    name: String,
    type: String,
    year: Number,
    capacity: Number,
    owner: {
        type: Schema.Types.ObjectId,
        ref: 'User'
    },
    size: {
        lenght: Number,  // Eslora
        width: Number,   // Manga
        openwork: Number // Calado
    },
    place: String,
//     location:{type: {type: String, coordinates:[Number]},
// },
    location:[], 
    imgBoat: {
        type: String,
        default: ''
    },
    description:String,
    price: Number, default:0
}, {
    timestamps: {
        createdAt: 'created_at',
        updatedAt: 'updated_at'
    }
});

//boatSchema.index({ location: "2dsphere" });

const Boat = mongoose.model('Boat', boatSchema);
module.exports = Boat;