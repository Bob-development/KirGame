import { AdvancedComponent, Component } from "../../core/Component";
import { HeroAvatar } from "../../schemas/Hero";
import { append, appendMany } from "../../core/append";

import './getHero.css'

export class getHero{
    constructor(){
        const getHeroApp = new Component({
            tagName: 'div',
            className: 'getHeroApp'
        })

        const menImages = new AdvancedComponent({
            tagName: 'div',
            className: 'menBTNS',
            children:[
                new HeroAvatar('Jackie'),
                new HeroAvatar('Kirill_Silverhand'),
                new HeroAvatar('V'),
            ]
        })

        const btnsWrapper = new Component({
            tagName: 'div',
            className: 'btns-wrapepr',
            children: [
                new AdvancedComponent({
                    tagName: 'button',
                    className: 'men-button',
                    textContent: 'MEN',
                    events:{
                        click: ()=>{
                            this.isButtonActive(menImages)
                        }
                    }
                }),

                new AdvancedComponent({
                    tagName: 'button',
                    className: 'women-button',
                    textContent: 'WOMEN',
                    events:{
                        click: ()=>{
                            this.isButtonActive(womenImages)
                        }
                    }
                })
            ]
        })

        const womenImages = new AdvancedComponent({
            tagName: 'div',
            className: 'womenBTNS',
            children:[
                new HeroAvatar('Evelyn_Parker'),
                new HeroAvatar('Judy'),
                new HeroAvatar('Panam'),
            ]
        })

        appendMany(getHeroApp, [menImages, btnsWrapper, womenImages]);

        return getHeroApp;
    }

    isButtonActive(images){
        if(images.style.display === 'none'){
            images.style.display = 'grid';
        } else {
            images.style.display = 'none';
        }
    }
}