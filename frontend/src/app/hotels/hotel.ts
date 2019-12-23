
export class Hotel {
    amenities: any[];
    constructor(
        id=0,
        name='',
        stars=0,
        price=0,
        image='',
        amenities=[]
    ){
        this.id=id;
        this.name=name;
        this.stars=stars;
        this.price=price;
        this.image=image;
        this.amenities=amenities

    }
    id: number;
    name: string;
    stars: number;
    price: number;
    image: string;
}