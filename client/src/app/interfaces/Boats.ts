export interface Boats {

    name: String;
    type: String;
    year: Number;
    capacity: Number;
    owner: String;
    size: {
        lenght: Number,  // Eslora
        width: Number,   // Manga
        openwork: Number // Calado
    };
    place: String;
    price: Number;
    coordinates: Array<Number>;
    imgBoat: {
        type: String,
        default: ''
    };
    created_at: Date;

}
