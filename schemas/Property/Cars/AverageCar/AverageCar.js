import { Car } from "../BaseCar/Car";

export class AverageCar extends Car{
    #AVERAGE_CAR_SRC = '../../public/Cars/MiddleCostCar.jpg';

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
        this.setCarPower(300);
        this.setPrice(85000);
        this.setDescription('Now that looks like a cybered up car that can handle any situation!')
        this.setImgSrc(this.#AVERAGE_CAR_SRC);
    }
}
