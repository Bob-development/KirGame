import { City } from "../Base City/City";

export class Seattle extends City{
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

        this.setPopulation(6500000);
        this.setEcology(9); // 9/10
        this.setRating(10); // 10/10
        this.setCrimeRate(4); // 4/10
        this.setSize(30); // square km 
        this.setPerspective(10); // 10/10
    }
}