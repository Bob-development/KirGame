import { City } from "../Base City/City";

export class Osaka extends City{
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

        this.setPopulation(3000000);
        this.setEcology(7); // 7/10
        this.setRating(7); // 7/10
        this.setCrimeRate(6); // 6/10
        this.setSize(19); // square km 
        this.setPerspective(8); // 8/10
    }
}