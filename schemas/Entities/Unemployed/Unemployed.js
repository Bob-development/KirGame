import { Human } from "../Human/Human";

export class Unemployed extends Human{
    #UNEMPLOYED_SALARY = 100;

    constructor({
        name,
        surname,
        age,
        salary,
        gender,
        balance,
        rel,
        job
    }){
        super({
            name,
            surname,
            age,
            salary,
            gender,
            balance,
            rel,
            job
        })
        
        this.setJob('Unemployed');
        
        this.setSalary(this.#UNEMPLOYED_SALARY);
    }
}