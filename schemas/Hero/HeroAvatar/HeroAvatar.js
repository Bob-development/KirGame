import { AdvancedComponent } from "../../../core/Component";
import { heroes } from "../../../utils";

export class HeroAvatar{
    constructor(hero){
        const foundHero = heroes.find((obj)=>{
            return obj.name === hero;
        })

        const avatarWrapper = new AdvancedComponent({
            tagName: 'div',
            className: 'avatar-wrapper',
            children: [
                new AdvancedComponent({
                    tagName: 'img',
                    className: `${foundHero.name}-avatar`,
                    src: foundHero.src
                })
            ]
        })

        return avatarWrapper;
    }
}