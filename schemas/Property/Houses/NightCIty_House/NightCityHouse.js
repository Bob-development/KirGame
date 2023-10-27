import { House } from "../BaseHouse/House";

export class NightCityHouse extends House{
    #NIGHT_CITY_HOUSE_SRC = '../../public/Houses/HouseNightCity.jpg'
    
    constructor({
        area,
        size,
        price,
        description,
        imgSrc
    }){
        super(
            area = '',
            size,
            price,
            description,
            imgSrc
        )

        this.setArea('Night City');
        this.setSize(50); // sq m
        this.setPrice(40000);
        this.setDescription('Night City is comprised of six districts, of which the most impressive is City Center. The city center is the heart of the city, home to corporations, clusters of neon and the quintessence of luxury');
        this.setImgSrc(this.#NIGHT_CITY_HOUSE_SRC); 
    }
}