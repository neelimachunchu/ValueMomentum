function Bank(){
    let CustName = 'kjwdnj';
    let Bankbalance=900000;
    let Bankaccount=2883289189;
    console.log(CustName,Bankaccount,Bankbalance)
    getCustomercInfo(){
      return `CustName:${this.CustName} CustomerName is: ${this.Bankaccount}`
  }
}
   Bank()
function getCustomerInfo() {
  throw new Error("Function not implemented.");
}

