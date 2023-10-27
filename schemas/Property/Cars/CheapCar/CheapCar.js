import { Car } from "../BaseCar/Car";

export class CheapCar extends Car{
    #CHEAP_CAR_SRC = '../../public/Cars/LowCostCar.jpg';

    constructor({
        body,
        power, 
        price, 
        description
    }){
        super(
            body = '', 
            power, 
            price, 
            description
        );
        
        this.setCarBody('Coupe');
        this.setCarPower(150);
        this.setPrice(40000);
        this.setDescription('It may look like a late 20th century car, but this baby’s got some speed.')
        this.setImgSrc(this.#CHEAP_CAR_SRC);
    }
}
