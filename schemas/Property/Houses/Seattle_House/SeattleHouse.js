import { House } from "../BaseHouse/House";

export class SeattleHouse extends House{
    #SEATTLE_HOUSE_SRC = '../../public/Houses/HouseOsaka.jpg'
    
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

        this.setArea('Seattle');
        this.setSize(35); // sq m
        this.setPrice(30000);
        this.setDescription('Seattle is the most populous metropolis in the Pacific Northwestern Free State of Washington.');
        this.setImgSrc(this.#SEATTLE_HOUSE_SRC); 
    }
}