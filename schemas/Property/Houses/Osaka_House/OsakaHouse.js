import { House } from "../BaseHouse/House";

export class OsakaHouse extends House{
    #OSAKA_HOUSE_SRC = '../../public/Houses/HouseOsaka.jpg'
    
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

        this.setArea('Osaka Town');
        this.setSize(70); // sq m
        this.setPrice(400000);
        this.setDescription('Osaka  is a designated city in the Kansai region of Japan. It is the capital city of Osaka Prefecture and the largest component of the Keihanshin Metropolitan Area, the second largest metropolitan area in Japan and among the largest in the world with more than 31 million inhabitants.');
        this.setImgSrc(this.#OSAKA_HOUSE_SRC); 
    }
}