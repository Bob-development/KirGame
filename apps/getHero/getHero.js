import { AdvancedComponent, Component } from "../../core/Component";
import { HeroAvatar } from "../../schemas/Hero";
import { append, appendMany } from "../../core/append";
import { render } from "../../core/render";
import { app } from "../../main";

import './getHero.css'

export class GetHero{    
    constructor({heroClass}){
        //MEN HEROES
        const Jackie = new HeroAvatar('Jackie', heroClass);
        const Kirill_Silverhand = new HeroAvatar('Kirill_Silverhand', heroClass);
        const V = new HeroAvatar('V', heroClass);
        
        //WOMEN HEROES
        const EvelynParker = new HeroAvatar('Evelyn_Parker', heroClass);
        const Judy = new HeroAvatar('Judy', heroClass);
        const Panam = new HeroAvatar('Panam', heroClass);

        const getHeroApp = new Component({
            tagName: 'div',
            className: 'getHeroApp'
        })

        const menImages = new AdvancedComponent({
            tagName: 'div',
            className: 'menBTNS',
            children:[
                Jackie,
                Kirill_Silverhand,
                V,
            ]
        })

        const womenImages = new AdvancedComponent({
            tagName: 'div',
            className: 'womenBTNS',
            children:[
                EvelynParker,
                Judy,
                Panam,
            ]
        })

        const mainWindow = new AdvancedComponent({
            tagName: 'div',
            id: 'mainWindow',
            children: [
                new Component({
                    tagName: 'div',
                    className: 'btns-wrapepr',
                    children: [
                        new AdvancedComponent({
                            tagName: 'div',
                            className: 'man-wrapper',
                            children: [
                                new AdvancedComponent({
                                    tagName: 'img',
                                    className: 'men-button',
                                    src: '../../public/AdditionalImages/Gender/ChoiceOfMen.png',
                                    events:{
                                        click: (e)=>{
                                            e.target.classList.toggle('-active');
        
                                            if(e.target.className === 'men-button -active'){
                                                heroClass.setGender('Male');
                                                menImages.style.display = 'grid';
                                            }else {
                                                heroClass.setGender(undefined);
                                                menImages.style.display = 'none';
                                            }
                                        }
                                    }
                                }),

                                new AdvancedComponent({
                                    tagName: 'div',
                                    className: 'img-descr',
                                    textContent: 'Man'
                                })
                            ]
                        }),

                        new AdvancedComponent({
                            tagName: 'div',
                            className: 'woman-wrapper',
                            children: [
                                new AdvancedComponent({
                                    tagName: 'img',
                                    className: 'women-button',
                                    src: '../../public/AdditionalImages/Gender/ChoiceOfWomen.png',
                                    events:{
                                        click: (e)=>{
                                            e.target.classList.toggle('-active');
        
                                            if(e.target.className === 'women-button -active'){
                                                heroClass.setGender('Female');
                                                womenImages.style.display = 'grid';
                                            }else {
                                                heroClass.setGender(undefined);
                                                womenImages.style.display = 'none';
                                            }
                                        }
                                    }
                                }),

                                new AdvancedComponent({
                                    tagName: 'div',
                                    className: 'img-descr',
                                    textContent: 'Woman'
                                })
                            ]
                        }),
                    ]
                })
            ]
        })



        appendMany(getHeroApp, [menImages, mainWindow, womenImages]);

        return getHeroApp;
    }
}