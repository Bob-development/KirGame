import { House } from "../BaseHouse/House";

export class TychoHouse extends House{
    #TYCHO_HOUSE_SRC = '../../public/Houses/HouseOsaka.jpg'
    
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

        this.setArea('Tycho');
        this.setSize(32); // sq m
        this.setPrice(40000);
        this.setDescription('Tycho is the largest human colony on the Moon.');
        this.setImgSrc(this.#TYCHO_HOUSE_SRC); 
    }
}