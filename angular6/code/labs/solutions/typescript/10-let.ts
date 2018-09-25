//var creates function scope
(function() {
  i = 15;
  console.log(i);
  var heroes = ['Hulk', 'Iron Man', 'Captain America'];
  for (var i = 0; i < heroes.length; i++) {
    console.log(heroes[i]);
  }

  console.log('using var function scope' + i);
})();

//block scope
(function() {
  var heroes = ['Hulk', 'Iron Man', 'Captain America'];
  for (let i = 0; i < heroes.length; i++) {
    console.log(heroes[i]);
  }

  //this line won't compile because let has block scope NOT function scope
  //console.log("using let, block scope: " + i);
})();
