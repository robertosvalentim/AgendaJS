export default class User {
    name
    phone
    address
    city
    state
    email
    id
    constructor(name, phone, address, city, state, email, id) {
        this.name = name;
        this.phone = phone;
        this.address = address;
        this.city = city;
        this.state = state;
        this.email = email;
        this.id = id;
    }
}