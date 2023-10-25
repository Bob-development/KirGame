import { Component } from './core/Component'
import { render } from "./core/render";
import { append } from "./core/append";
import { Human, Admin, Clerk, Developer, Doctor, Driver, Unemployed } from "./schemas/Entities/index";
import { City, NightCity } from './schemas/Cities/index';
import './style.css'
import { Car, ExpensiveCar } from './schemas/Property';

const app = document.querySelector("#app");

const a = new ExpensiveCar({}).setCarBody('huy');

console.log(a);