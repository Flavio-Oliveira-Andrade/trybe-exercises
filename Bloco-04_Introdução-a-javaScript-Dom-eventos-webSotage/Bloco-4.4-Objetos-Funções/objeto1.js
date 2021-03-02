let player = {
  name:  "marta",
  lastName: 'silva',
  age: 34,
    medals : {
    goldem : 2,
    silver : 3,
    }

}


console.log(player.lastName + "tem " + player.age)

player.bestInWord = [2006, 2007, 2008, 2009, 2010, 2018];
console.table(player)

for(let key in player){
  console.log(key)
};

