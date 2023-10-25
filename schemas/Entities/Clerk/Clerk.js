import { Human } from "../Human/Human";

export class Clerk extends Human{
    #CLERK_SALARY = 500;

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
        
        this.setJob('Clerk')
        
        this.setSalary(this.#CLERK_SALARY);
    }
}