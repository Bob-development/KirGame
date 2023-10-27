import { AdvancedComponent } from "../../../../core/Component";

export class Car {
    #body;
    #power;
    #price;
    #description;
    // #element;
    // #elementImg;
    #imgSrc;
    
    constructor({
        body, 
        power, 
        price, 
        description,
        imgSrc
    }){
        this.#body = body;
        this.#power = power;
        this.#price = price;
        this.#description = description;
        this.#imgSrc = imgSrc;
        
        // this.#elementImg = new AdvancedComponent({
        //     tagName: 'img',
        //     className: 'car-img',
        //     src: this.#imgSrc
        // })

        // this.#element = new AdvancedComponent({
        //     tagName: 'div',
        //     className: 'car',
        //     children:[
        //         this.#elementImg
        //     ]
        // })

        
    }

    setCarBody(body){
        this.#body = body;
    }

    getCarBody(){
        return this.#body;
    }

    //--------------------------------

    setCarPower(power){
        this.#power = power;
    }


    getCarPower(){
        return this.#power;
    }

    //--------------------------------

    setPrice(price){
        this.#price = price + ' €$';
    }

    getPrice(){
        return this.#price;
    }

    //--------------------------------

    setDescription(description){
        this.#description = description;
    }

    getDescription(description){
        return this.#description;
    }

    //--------------------------------

    setImgSrc(src){
       this.#imgSrc = src;
    }
    
    getImgSrc(){
       return this.#imgSrc;
    }
}