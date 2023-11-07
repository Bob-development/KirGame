import { Human } from  "../Human/Human";

export class Admin extends Human{
    #ADMIN_SALARY = 399;

    constructor({
        name = '',
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
        
        this.setJob('Admin');
        
        this.setSalary(this.#ADMIN_SALARY);
    }
}