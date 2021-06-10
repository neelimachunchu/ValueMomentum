class Bank{
BaAcc:number;
HolderName:string;
Balance:number;
constructor(acc:number,name:string,bal:number){
    this.BaAcc=acc;
    this.HolderName=name;
    this.Balance=bal;
}
getCustomerInfo(){
    return `CustomerAcc:${this.BaAcc} CustomerName is: ${this.HolderName}`
}
getSavingInfo(){
    return `CustomerAcc:${this.BaAcc} CustomerName is: ${this.HolderName} and Balance is: ${this.Balance}`
}
getBalanceInfo(){
    return ` Balance is: ${this.Balance}`
}
}
let cus1=new Bank(2383208,'ndjd',900)
let cus2=new Bank(29243900,'dhfh',39848)
console.log(cus1.BaAcc,cus1.HolderName,cus1.Balance)
console.log(cus2.BaAcc,cus2.HolderName,cus2.Balance)
console.log(cus1.getCustomerInfo())
console.log(cus1.getSavingInfo())
console.log(cus1.getBalanceInfo())
console.log(cus2.getCustomerInfo())
console.log(cus2.getSavingInfo())
console.log(cus2.getBalanceInfo())
