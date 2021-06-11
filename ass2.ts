export class Bank{
    acc:number 
    constructor(acc){
        this.acc=acc;
    }
    getAccountInfo(){
        return `account details: ${this.acc}`
    }
}