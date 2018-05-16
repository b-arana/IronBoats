export interface Reservation {
    author: String,
    boat: String,
    totalPrice: Number,
    initialDay: Date,
    endDay: Date,
    isWithSkipper: {type: Boolean , default: false}
}
