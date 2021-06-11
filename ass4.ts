import {Customer} from "./ass3"
import {Bank} from "./ass2"
import {Address} from "./ass1"

let customer = new Customer("whhgf")
let bank = new Bank(4387407)
let address = new Address("delhi")
console.log(customer.getCustomerInfo())
console.log(bank.getAccountInfo())
console.log(address.getAddressInfo())