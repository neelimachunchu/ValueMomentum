export class  Address{
    city:string
    constructor(city){
        this.city=city
    }
    getAddressInfo(){
        return `address: ${this.city}`
    }

}