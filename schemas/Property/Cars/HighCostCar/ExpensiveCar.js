import { Car } from "../BaseCar/Car";

export class ExpensiveCar extends Car{
    #HIGH_COST_CAR_IMG = '../../public/Cars/HighCostCar.jpg';

    constructor({
        carBody,
        carPower, 
        price, 
        description
    }){
        super(
            carBody, 
            carPower, 
            price, 
            description
        );

        // console.log(this.carBody);
        this.setImgSrc(this.HIGH_COST_CAR_IMG);
    }
}

//car is an obj , another are HTML