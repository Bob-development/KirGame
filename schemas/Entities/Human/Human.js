export class Human{
    #DEFAULT_AGE = 0;

    #name;
    #surname;
    #age;
    #salary;
    #gender;
    #balance;
    #rel;
    #job;
    
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
        this.#name = name;
        this.#surname = surname;
        if(age) this.#age = age;
        this.#age = this.#DEFAULT_AGE;
        this.#salary = salary;
        this.#gender = gender;
        this.#balance = balance;
        this.#rel = rel;
        this.#job = job;
    }

    setName(value){
        this.#name = value;
    }

    setSurname(value){
        this.#surname = value;
    }
    
    setAge(value){
        this.#age = value;
    }
    
    setGender(value){
        this.#gender = value;
    }

    setBalance(value){
        this.#balance = value;
    }

    setRel(value){
        this.#rel = value;
    }
    
    setJob(job){
        this.#job = job;
    }

    setSalary(salary){
        this.#salary = salary;
    }
}