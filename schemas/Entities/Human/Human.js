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
        
        if(age){
            this.#age = age;
        }else this.#age = this.#DEFAULT_AGE;
        
        this.#salary = salary;
        this.#gender = gender;
        this.#balance = balance;
        this.#rel = rel;
        this.#job = job;
    }

    setName(name){
        this.#name = name;
    }

    getName(){
        return this.#name;
    }

    //--------------------------------

    setSurname(surname){
        this.#surname = surname;
    }

    getSurname(){
        return this.#surname;
    }
    
    //--------------------------------

    setAge(age){
        this.#age = age;
    }

    getAge(){
        return this.#age;
    }

    //--------------------------------

    setGender(gender){
        this.#gender = gender;
    }

    getGender(){
        return this.#gender;
    }

    //--------------------------------

    setBalance(balance){
        this.#balance = balance;
    }

    getBalance(){
        return this.#balance;
    }

    //--------------------------------

    setRel(rel){
        this.#rel = rel;
    }

    getRel(){
        return this.#rel;
    }
    
    //--------------------------------

    setJob(job){
        this.#job = job;
    }

    getJob(){
        return this.#job;
    }
    
    //--------------------------------

    setSalary(salary){
        this.#salary = salary;
    }

    getSalary(){
        return this.#salary;
    }
}