//program.ts
import { myFunction, myObject, myPrimitive, MyClass } from './08-my-module';

console.log(myFunction());

console.log(myObject.name);
console.log(myObject.myMethod());

console.log(myPrimitive);

let myClass = new MyClass();
console.log(myClass.myClassMethod());

//if MyClass is made the default we could use this syntax
//import MyClass from "./09-my-module";
