import { Component } from './core/Component'
import { render } from "./core/render";
import { append } from "./core/append";
import { Human, Admin, Clerk, Netrunner, Doctor, Driver, Unemployed } from "./schemas/Entities/index";
import { City, NightCity } from './schemas/Cities/index';
import { House, NightCityHouse, Car, ExpensiveCar, CheapCar } from './schemas/Property';
import { HeroAvatar } from './schemas/Hero';
import { GetHeroClass } from './apps/getHeroClass/getHeroClass';
import { getHero } from './apps/getHero/getHero';

import './style.css'

export const app = document.querySelector("#app");

const a = new getHero();

append(app, a)

console.log(a);
