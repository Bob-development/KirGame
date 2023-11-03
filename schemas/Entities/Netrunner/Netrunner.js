import { Human } from "../Human/Human";

export class Netrunner extends Human{
    #DEVELOPER_SALARY = 499;

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
        
        this.setJob('Developer')
        
        this.setSalary(this.#DEVELOPER_SALARY);
    }
}