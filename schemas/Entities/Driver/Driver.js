import { Human } from "../Human/Human";

export class Driver extends Human{
    #DRIVER_SALARY = 199;

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
        
        this.setJob('Driver')
        
        this.setSalary(this.#DRIVER_SALARY);
    }
}