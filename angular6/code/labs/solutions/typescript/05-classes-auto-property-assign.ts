(function() {
  class Student {
    constructor(
      public firstName: string,
      public middleInitial: string,
      public lastName: string
    ) {}

    getFullName() {
      return this.firstName + ' ' + this.middleInitial + '. ' + this.lastName;
    }
  }

  let student = new Student('John', 'D', 'Rockefeller');
  console.log(student.getFullName());
})();
