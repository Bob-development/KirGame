import { AdvancedComponent } from "../../../../core/Component";

export class Car {
    // #LOW_COST_CAR_IMG = '../../public/Cars/LowCostCar.jpg';
    // #MIDDLE_COST_CAR_IMG = '../../public/Cars/MiddleCostCar.jpg';
    // #HIGH_COST_CAR_IMG = '../../public/Cars/HighCostCar.jpg';
    
    #carBody;
    #carPower;
    #price;
    #description;
    #element;
    #elementImg;
    #imgSrc;
    
    constructor({
        carBody, 
        carPower, 
        price, 
        description,
    }){
        this.#carBody = carBody;
        this.#carPower = carPower;
        this.#price = price;
        this.#description = description;
        
        this.#elementImg = new AdvancedComponent({
            tagName: 'img',
            className: 'car-img',
            src: this.#imgSrc
        })

        this.#element = new AdvancedComponent({
            tagName: 'div',
            className: 'car',
            children:[
                this.#elementImg
            ]
        })

        
        // return this.#element;
    }

    setCarBody(value){
        this.#carBody = value;
    }

    setCarPower(value){
        this.#carPower = value;
    }

    setPrice(value){
        this.#price = value;
    }

    setDescription(value){
        this.#description = value;
    }

    setImgSrc(value){
       this.#imgSrc = value;
    }
}