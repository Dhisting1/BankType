import { CompanyAccount } from "./class/CompanyAccount";
import { PeopleAccount } from "./class/PeopleAccount";

const people: PeopleAccount = new PeopleAccount(1, "John Doe", 1234567890);
console.log(people);
people.deposit(100);
people.withdraw(50);
people.getBalance();
people.setName("John Logan");
console.log(people);

const people2: CompanyAccount = new CompanyAccount("John Logan", 1234567890);

people2.getLoan(1000);
people2.deposit(100);
people2.withdraw(50);
people2.getBalance();
