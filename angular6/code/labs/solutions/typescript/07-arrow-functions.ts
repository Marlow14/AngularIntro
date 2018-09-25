(function() {
  var evens = [0, 2, 4, 6, 8];

  //verbose
  // var odds = evens.map(function(v){
  //     return v+1;
  // });
  //
  //
  // odds.forEach(function(line){
  //     console.log(line);
  // });

  //terse
  var odds = evens.map(v => v + 1);
  odds.forEach(line => console.log(line));

  //verbose
  // var organization={
  //     name: "Avengers",
  //     heroes: ["Hulk", "Iron Man", "Captain America"],
  //     printHeroes: function() {
  //         var self = this;
  //         this.heroes.forEach(function(hero) {
  //             // this.name is undefined so we have to use self.name
  //             console.log(hero + " is a member of the  " + self.name + ".");
  //         });
  //     } };
  //organization.printHeroes();

  //terse and 'this' can be used
  // var organization={
  //     name: "Avengers",
  //     heroes: ["Hulk", "Iron Man", "Captain America"],
  //     printHeroes: function() {
  //         this.heroes.forEach(h => console.log(h + " is a member of the  " + this.name + "."));
  //     } };
  //
  // organization.printHeroes();
})();
