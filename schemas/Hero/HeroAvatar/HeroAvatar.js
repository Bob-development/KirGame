import { AdvancedComponent, Component } from "../../../core/Component";
import { heroes } from "../../../utils";
import { Driver, Clerk, Netrunner, Admin, Doctor } from "../../Entities";
import { render } from "../../../core/render";
import { GetHeroClass } from "../../../apps/getHeroClass/getHeroClass";

import './HeroAvatar.css'

export class HeroAvatar{
    #HERO_NAME;
    #HERO_SURNAME;

    constructor(hero, heroClass){
        const foundHero = heroes.find((obj)=>{
            return obj.name === hero;
        })

        switch (foundHero.name) {
            case 'Jackie':
                this.#HERO_NAME = 'Jackie'
                this.#HERO_SURNAME = 'Welles'
                break;
                
            case 'Kirill_Silverhand':
                this.#HERO_NAME = 'Kirill Silverhand'
                this.#HERO_SURNAME = 'Linder'
                break;

            case 'V':
                this.#HERO_NAME = 'V'
                this.#HERO_SURNAME = 'Brown'
                break;

            case 'Evelyn_Parker':
                this.#HERO_NAME = 'Evelyn'
                this.#HERO_SURNAME = 'Parker'
                break;

            case 'Judy':
                this.#HERO_NAME = 'Judy'
                this.#HERO_SURNAME = 'Álvarez'
                break;

            case 'Panam':
                this.#HERO_NAME = 'Panam'
                this.#HERO_SURNAME = 'Palmer'
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
                    src: foundHero.src,
                    events: {
                        click: ()=>{
                            heroClass.setName(this.#HERO_NAME);
                            heroClass.setSurname(this.#HERO_SURNAME);
                            
                            return this.showHeroForm(avatarWrapper, heroClass); 
                        }
                    }
                }),

                new AdvancedComponent({
                    tagName: 'div',
                    className: 'hero-title',
                    textContent: `${this.#HERO_NAME} ${this.#HERO_SURNAME}`,
                })
            ]
        })

        return avatarWrapper;
    }

    showHeroForm(avatar, heroClass){
        const heroForm = new AdvancedComponent({
            tagName: 'div',
            id: 'heroFormWrapper',

            children: [
                new Component({
                    tagName: 'div',
                    className: 'heroForm',
                    children: [
                        new AdvancedComponent({
                            tagName: 'img',
                            className: 'hero-form-img',
                            src: avatar.children[0].src
                        }),
        
                        new AdvancedComponent({
                            tagName: 'div',
                            className: 'hero-data-wrapper',
                            children: [
                                new Component({
                                    tagName: 'div',
                                    className: 'name-wrapepr',
                                    children: [
                                        new AdvancedComponent({
                                            tagName: 'div',
                                            textContent: 'Name:  '
                                        }),
                
                                        new AdvancedComponent({
                                            tagName: 'div',
                                            className: 'hero-name',
                                            textContent: `${heroClass.getName()}`
                                        }),
                                    ]
                                }),
                
                                new Component({
                                    tagName: 'div',
                                    className: 'surname-wrapepr',
                                    children: [
                                        new AdvancedComponent({
                                            tagName: 'div',
                                            textContent: 'Surname:  '
                                        }),
                
                                        new AdvancedComponent({
                                            tagName: 'div',
                                            className: 'hero-surname',
                                            textContent: `${heroClass.getSurname()}`
                                        }),
                                    ]
                                }),
                
                                new Component({
                                    tagName: 'div',
                                    className: 'gender-wrapepr',
                                    children: [
                                        new AdvancedComponent({
                                            tagName: 'div',
                                            textContent: 'Gender:  '
                                        }),
                
                                        new AdvancedComponent({
                                            tagName: 'div',
                                            className: 'hero-gender',
                                            textContent: `${heroClass.getGender()}`
                                        }),
                                    ]
                                }),

                                new Component({
                                    tagName: 'div',
                                    className: 'age-wrapepr',
                                    children: [
                                        new AdvancedComponent({
                                            tagName: 'div',
                                            textContent: 'Age:  '
                                        }),
                
                                        new AdvancedComponent({
                                            tagName: 'div',
                                            className: 'hero-age',
                                            textContent: `${heroClass.getAge()}`
                                        }),
                                    ]
                                }),

                                new AdvancedComponent({
                                    tagName: 'button',
                                    className: 'add-year',
                                    textContent: 'Live a year',
                                    events: {
                                        click: ()=>{
                                            const heroAge = document.querySelector('.hero-age');
                                            const heroAgeTextContent = +heroAge.textContent;

                                            heroAge.textContent = heroAgeTextContent + 1;
                                        }
                                    }
                                }),

                                new AdvancedComponent({
                                    tagName: 'button',
                                    className: 'add-month',
                                    textContent: 'Live a month',
                                    events: {
                                        click: ()=>{
                                            const heroAge = document.querySelector('.hero-age');
                                            let ageNum = +heroAge.textContent;
                                            
                                            heroAge.textContent = this.monthCounter(heroAge.textContent, ageNum); 
                                        }
                                    }
                                })
                            ]
                        })     
                    ]
                }),

                new Component({
                    tagName: 'div',
                    className: 'btns-wrapper',
                    children: [
                        new AdvancedComponent({
                            tagName: 'button',
                            id: 'start-game-btn',
                            textContent: 'Start',
                            events: {
                                //start game
                            }
                        }),

                        new AdvancedComponent({
                            tagName: 'button',
                            id: 'make-new-hero-btn',
                            textContent: 'Change Hero',
                            events: {
                                click: ()=>{
                                    render(app, new GetHeroClass({}));
                                }
                            }
                        })
                    ]
                }),
            ]
        })

        render(app, heroForm);
    }

    monthCounter(heroAge, ageNum){
        //count month, begin from 0 months, if 12 add 1 year delete month
        ageNum += 0.01;
        heroAge = ageNum.toFixed(2);
        
        if(heroAge.slice(heroAge.indexOf('.') + 1) === '12'){
            ageNum += 0.88;
            heroAge = ageNum.toFixed(2);
        }

        return heroAge;
    }
}