export class House {
    #area;
    #size;
    #price;
    #description;
    #imgSrc
    
    constructor({
        area,
        size,
        price,
        description,
        imgSrc
    }){
       this.#area = area; 
       this.#size = size; 
       this.#price = price; 
       this.#description = description;
       this.#imgSrc = imgSrc;
    }

    setArea(area){
        this.#area = area;
    }

    getArea(){
        return this.#area;
    }

    //--------------------------------

    setSize(size){
        this.#size = size;
    }

    getSize(){
        return this.#size;
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

    getDescription(){
        return this.#description;
    }

    //--------------------------------

    setImgSrc(imgSrc){
        this.#imgSrc = imgSrc;
    }

    getImgSrc(){
        return this.#imgSrc;
    }
}