import { AdvancedComponent } from "../../../../core/Component";

export class House {
    #area;
    #location;
    #price;
    #description;
    #element;
    #elementImg;
    
    constructor(){
        this.#elementImg = new AdvancedComponent({
            tagName: 'img',
            className: 'house-img',
            src: '../../public/Houses/House1.jpg'
        })

        this.#element = new AdvancedComponent({
            tagName: 'div',
            className: 'house',
            children:[
                this.#elementImg
            ]
        })
    }
}