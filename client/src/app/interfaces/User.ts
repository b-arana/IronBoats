export interface User {
    username: String;
    password: String;
    email: String;
    isOwner: {
        type: Boolean,
        default: 'false'
    };
    imgUser: String;
    valoration: String;

}
