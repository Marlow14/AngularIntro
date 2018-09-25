(function() {
  interface Person {
    firstName: string;
    lastName: string;
  }

  class Student implements Person {
    constructor(
      public firstName: string,
      public middleInitial: string,
      public lastName: string
    ) {}
  }

  function greeter(person: Person) {
    return 'Hello, ' + person.firstName + ' ' + person.lastName;
  }

  let student = new Student('John', 'D', 'Rockefeller');
  console.log(greeter(student));
})();
