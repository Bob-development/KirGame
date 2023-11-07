import { AdvancedComponent, Component } from "../../core/Component";
import { Driver, Clerk, Netrunner, Admin, Doctor } from "../../schemas/Entities";
import { append, appendMany } from "../../core/append";
import { app } from "../../main";
import { GetHero } from "../getHero/getHero";
import { render } from "../../core/render";

import './getHeroClass.css'

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
                    src: '../../public/AdditionalImages/HeroClass/Netrunner.png',
                    events:{
                        'click': ()=>{
                            render(app, new GetHero({heroClass: new Netrunner({})}))
                        }
                    }
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
                    src: '../../public/AdditionalImages/HeroClass/Fixer.png',
                    events:{
                        'click': ()=>{
                            render(app, new GetHero({heroClass: new Admin({})}))
                        }
                    }
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
                    src: '../../public/AdditionalImages/HeroClass/Driver.png',
                    events:{
                        'click': ()=>{
                            render(app, new GetHero({heroClass: new Driver({})}))
                        }
                    }
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
                    src: '../../public/AdditionalImages/HeroClass/Riper.png',
                    events:{
                        'click': ()=>{
                            render(app, new GetHero({heroClass: new Doctor({})}))
                        }
                    }
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
<<<<<<< HEAD
                            render(app, new GetHero({heroClass: new Clerk({})}))
=======
                            //new class
                            render(app, new Clerk({}))
>>>>>>> cde40883d38b0c43af6d0cb9f0a5405921cc8d8d
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