import { AdvancedComponent } from "../../../core/Component";

export class City {
    #population;
    #ecology;
    #rating;
    #crimeRate;
    #size;
    #perspective;
    
    constructor({
        population,
        ecology,
        rating,
        crimeRate,
        size,
        perspective
    }){
        this.#population = population;
        this.#ecology = ecology;
        this.#rating = rating;
        this.#crimeRate = crimeRate;
        this.#size = size;
        this.#perspective = perspective;
    }

    setPopulation(value){
        this.#population = value;
    }

    setEcology(value){
        this.#ecology = value;
    }
    
    setRating(value){
        this.#rating = value;
    }

    setCrimeRate(value){
        this.#crimeRate = value;
    }

    setSize(value){
        this.#size = value;
    }

    setPerspective(value){
        this.#perspective = value;
    }
}