import { Human } from "../Human/Human";

export class Doctor extends Human{
    #DOCTOR_SALARY = 899;

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
        
        this.setJob('Doctor')
        
        this.setSalary(this.#DOCTOR_SALARY);
    }
}