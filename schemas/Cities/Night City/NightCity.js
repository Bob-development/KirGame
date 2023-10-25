import { City } from "../Base City/City";

export class NightCity extends City{
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

        this.setPopulation(6000000);
        this.setEcology(5); // 5/10
        this.setRating(4); // 4/10
        this.setCrimeRate(8); // 8/10
        this.setSize(24); // square km 
        this.setPerspective(7); // 7/10
    }
}