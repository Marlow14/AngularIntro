"use strict";
/*
Deleted below for next exercise
*/
// function greeter(name){
//   return "Hi: " + name;
//   }
Object.defineProperty(exports, "__esModule", { value: true });
//   console.log(greeter("O' Shea Jackson"));
/* working */
// var myName: string = 'Sean Carter';
// console.log(myName);
/* compile error due to type */
// var myName: number = 'Sean Carter';
// console.log(myName);
// interface Person{
//   firstName: string;
//   lastName: string;
// }
// function greeter(person: Person ){
//   return "Hello, " + person.firstName + " " + person.lastName;
// }
// var user = { firstName: 'Anders', lastName: 'Hejlsberg' };
// console.log(greeter(user));
// class Student {
//   // firstName: string;
//   // middleInitial: string;
//   //   lastName: string;
//     constructor(public firstName: string,
//     public middleInitial: string,
//     public lastName: string){
//     // this.firstName = firstName;
//     // this.middleInitial = middleInitial;
//     // this.lastName = lastName;
//     }
//     getFullName(){
//       // return this.firstName + " " + this.middleInitial + " " + this.lastName;
//       return ` First: ${this.firstName}
//       Middle: ${this.middleInitial}
//       Last: ${this.lastName}`;
//     }
// }
// let student = new Student("John", "D", "Rockafeller");
// console.log(student.getFullName());
// let html = `<div class="container">
//               <div class="row">
//                 <p>
//                 Herre is some text that
//                 I want to show on a page
//                 </p>
//               </div>
//             </div>`
//         console.log(html);
// var evens =  [0,2,4,6,8];
// var odds = evens.map(v => v + 1);
// odds.forEach(element => console.log(element));
var my_module_1 = require("./my-module");
console.log(my_module_1.myFunction());
console.log(my_module_1.myObject.name);
console.log(my_module_1.myObject.myMethod());
console.log(my_module_1.myPrimitive);
var myClass = new my_module_1.MyClass();
console.log(myClass.myClassMethod());
//# sourceMappingURL=program.js.map