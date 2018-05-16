export interface Boats {

    name: String;
    type: String;
    year: Number;
    capacity: Number;
    description:String;
    owner: String;
    size: {
        eslora: Number,  
        width: Number,   
        openwork: Number 
    };
    place: String;
    price: Number;
    location: Object;
    imgBoat: {
        type: String,
        default: ''
    };
    created_at: Date;

}
