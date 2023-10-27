import { Car } from "../BaseCar/Car";

export class ExpensiveCar extends Car{
    #EXPENSIVE_CAR_SRC = '../../public/Cars/ExpensiveCar.jpg';

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
        
        this.setCarBody('Sedan');
        this.setCarPower(499);
        this.setPrice(150000);
        this.setDescription('Don’t worry about the lack of windows, Rayfield’s CyberDome tech’s got you covered.')
        this.setImgSrc(this.#EXPENSIVE_CAR_SRC);
    }
}
