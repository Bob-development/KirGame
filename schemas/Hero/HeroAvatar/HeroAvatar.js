import { AdvancedComponent, Component } from "../../../core/Component";
import { heroes } from "../../../utils";

export class HeroAvatar{
    #HERO_NAME;

    constructor(hero){
        const foundHero = heroes.find((obj)=>{
            return obj.name === hero;
        })

        switch (foundHero.name) {
            case 'Jackie':
                this.#HERO_NAME = 'Jackie'
                break;

            case 'Kirill_Silverhand':
                this.#HERO_NAME = 'Kirill Silverhand'
                break;

            case 'V':
                this.#HERO_NAME = 'V'
                break;

            case 'Evelyn_Parker':
                this.#HERO_NAME = 'Evelyn Parker'
                break;

            case 'Judy':
                this.#HERO_NAME = 'Judy'
                break;

            case 'Panam':
                this.#HERO_NAME = 'Panam'
                break;

            default:
                break;
        }

        const avatarWrapper = new AdvancedComponent({
            tagName: 'div',
            className: 'avatar-wrapper',
            children: [
                new AdvancedComponent({
                    tagName: 'img',
                    className: `${foundHero.name}-avatar`,
                    src: foundHero.src
                }),

                new AdvancedComponent({
                    tagName: 'div',
                    className: 'hero-title',
                    textContent: this.#HERO_NAME,
                })
            ]
        })

        return avatarWrapper;
    }
}