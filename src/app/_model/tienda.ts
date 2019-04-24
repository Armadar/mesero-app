export class Tienda {
    _id: number;
    name: string;
    address: string;
    image: string;

    constructor(id: number, name: string, address: string, image: string) {
        this._id = id;
        this.name = name;
        this.address = address;
        this.image = image;
    }
}