//my-module.ts
export function myFunction() {
  return 'myFunction was run.';
}

function myPrivateFunction() {
  return 'myPrivateFunction was run.';
}

var myObject = {
  name: "I can access myObject's name",
  myMethod: function() {
    return 'myMethod on myObject is running.';
  },
};

export { myObject };

export const myPrimitive = 55;

export class MyClass {
  myClassMethod() {
    return 'myClassMethod on myClass is running.';
  }
}
