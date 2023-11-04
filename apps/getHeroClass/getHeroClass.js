import { AdvancedComponent, Component } from "../../core/Component";
import { Driver, Clerk, Netrunner, Admin, Doctor } from "../../schemas/Entities";
import { append, appendMany } from "../../core/append";
import { app } from "../../main";

import './getHeroClass.css'
import { render } from "../../core/render";

export class GetHeroClass extends AdvancedComponent{
    constructor(){

        const heroClassApp = new Component({
            tagName: 'div',
            className: 'heroClassesApp'
        })

        const title = new AdvancedComponent({
            tagName: 'div',
            className: 'heroClass-title',
            textContent: 'Choose Ur Class'
        })
        
        const heroClassesWrapper = new Component({
            tagName: 'div',
            className: 'hero-classes-wrapper',
        })

        const netrunner = new Component({
            tagName: 'div',
            className: 'netrunner-wrapper',
            children: [
                new AdvancedComponent({
                    tagName: 'img',
                    id: 'netrunner-img',
                    src: '../../public/AdditionalImages/HeroClass/Netrunner.png'
                }),

                new AdvancedComponent({
                    tagName: 'div',
                    className: 'netrunner-title',
                    textContent: 'Netrunner'
                })
            ]
        })

        const fixer = new Component({
            tagName: 'div',
            className: 'fixer-wrapper',
            children: [
                new AdvancedComponent({
                    tagName: 'img',
                    id: 'fixer-img',
                    src: '../../public/AdditionalImages/HeroClass/Fixer.png'
                }),

                new AdvancedComponent({
                    tagName: 'div',
                    className: 'fixer-title',
                    textContent: 'Fixer'
                })
            ]
        })

        const driver = new Component({
            tagName: 'div',
            className: 'driver-wrapper',
            children: [
                new AdvancedComponent({
                    tagName: 'img',
                    id: 'driver-img',
                    src: '../../public/AdditionalImages/HeroClass/Driver.png'
                }),

                new AdvancedComponent({
                    tagName: 'div',
                    className: 'driver-title',
                    textContent: 'Driver'
                })
            ]
        })

        const riper = new Component({
            tagName: 'div',
            className: 'riper-wrapper',
            children: [
                new AdvancedComponent({
                    tagName: 'img',
                    id: 'riper-img',
                    src: '../../public/AdditionalImages/HeroClass/Riper.png'
                }),

                new AdvancedComponent({
                    tagName: 'div',
                    className: 'riper-title',
                    textContent: 'Riper'
                })
            ]
        })

        const clerk = new Component({
            tagName: 'div',
            className: 'clerk-wrapper',
            children: [
                new AdvancedComponent({
                    tagName: 'img',
                    id: 'clerk-img',
                    src: '../../public/AdditionalImages/HeroClass/Clerk.png',
                    events:{
                        'click': ()=>{
                            //new class
                            render(app, new Clerk({}))
                        }
                    }
                }),

                new AdvancedComponent({
                    tagName: 'div',
                    className: 'clerk-title',
                    textContent: 'Clerk'
                })
            ]
        })

        appendMany(heroClassesWrapper, [netrunner, fixer, driver, riper, clerk]);
        appendMany(heroClassApp, [title, heroClassesWrapper])

        return heroClassApp;
    }
}