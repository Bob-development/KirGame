import { City } from "../Base City/City";

export class Tycho extends City{
    constructor({
        population,
        ecology,
        rating,
        crimeRate,
        size,
        perspective
    }){
        super({
            population,
            ecology,
            rating,
            crimeRate,
            size,
            perspective
        })

        this.setPopulation(40000);
        this.setEcology(3); // 3/10
        this.setRating(3); // 3/10
        this.setCrimeRate(5); // 5/10
        this.setSize(12); // square km 
        this.setPerspective(6); // 6/10
    }
}