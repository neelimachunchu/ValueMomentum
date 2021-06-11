export class Customer{
    name:string
    constructor(name){
        this.name=name;
    }
    getCustomerInfo(){
        return `account details: ${this.name}`
    }
}