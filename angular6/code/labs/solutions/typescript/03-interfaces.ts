(function() {
  interface Person {
    firstName: string;
    lastName: string;
  }

  function greeter(person: Person) {
    return 'Hello, ' + person.firstName + ' ' + person.lastName;
  }

  var user = { firstName: 'Anders', lastName: 'Hejlsberg' };
  console.log(greeter(user));
})();
