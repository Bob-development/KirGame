import { Component } from './core/Component'
import { render } from "./core/render";
import { append } from "./core/append";
import { Human, Admin, Clerk, Developer, Doctor, Driver, Unemployed } from "./schemas/Entities/index";
import { City, NightCity } from './schemas/Cities/index';
import { House, NightCityHouse, Car, ExpensiveCar, CheapCar } from './schemas/Property';
import { HeroAvatar } from './schemas/Hero';

import './style.css'

const app = document.querySelector("#app");


