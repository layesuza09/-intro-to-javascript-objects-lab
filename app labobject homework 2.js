//const pokemon = require('./data.js');

const game = {
    party: [],
     gyms: [
      { location: "Pewter City", completed: false, difficulty: 1 },
      { location: "Cerulean City", completed: false, difficulty: 2 },
      { location: "Vermilion City", completed: false, difficulty: 3 },
      { location: "Celadon City", completed: false, difficulty: 4 },
      { location: "Fuchsia City", completed: false, difficulty: 5 },
      { location: "Saffron City", completed: false, difficulty: 6 },
      { location: "Cinnabar Island", completed: false, difficulty: 7 },
      { location: "Viridian City", completed: false, difficulty: 8 },
    ],
    items: [
      { name: "potion", quantity: 4 },
      { name: "pokeball", quantity: 8 },
      { name: "rare candy", quantity: 99 },
    ],
  }
 console.dir(pokemon, { maxArrayLength: null })
 //console.log(game)

 /*
Exercise 3
1. Add a new property to the `game` object. Let's call it "difficulty".
2. Choose a value for "difficulty" that you think fits the game. Ex: "Easy", "Med" or "Hard". How would you assign it?


Solve Exercise 3 here:
*/




game.difficulty = "Hard";

/*
Exercise 4
1. Select a starter Pokémon from the `pokemon` array. Remember, a starter Pokémon's `starter` property is true.
2. Add this Pokémon to the `game.party` array. Which array method will you use to add them?


Solve Exercise 4 here:
*/




items: [
    { name: 'Bulbasaur', starter: true },
    { name: 'Charmander', starter: true },
    { name: 'Squirtle', starter: true },
    { name: 'Pikachu', starter: false },
  ];

//  let game = {
  //  party: [],
  //};
  let starterPokemon = pokemon.find((pokemon) => pokemon.starter);
  game.party.push(starterPokemon);

  /*
Exercise 5
1. Choose three more Pokémon from the `pokemon` array and add them to your party.
2. Consider different attributes like 'type' or 'HP' for your selection. Which array method will you use to add them?


Solve Exercise 5 here:
*/





  let selectedPokemon = pokemon.filter((pokemon, index) => 
    index > 2 && index < 6);
  game.party.push(...selectedPokemon);

  /*
Exercise 6
1. Set the `completed` property to true for gyms with a difficulty below 3.
2. Think about how you'd loop through the `gyms` array to check and update the `completed` property.


Solve Exercise 6 here:
*/

let gyms = [
    { name: "Planet", difficulty: 1 , completed: false},
    { name: "One Wolrd", completed: false, difficulty: 2 },
    { name: "La Belle", completed: false, difficulty: 3 },
];

gyms.forEach((gym) => {
    if (gym.difficulty < 3) {
        gym.completed = true;
    }
});


/*
Exercise 7
1. Evolve the starter Pokémon you added to your party earlier. Each starter Pokémon evolves into a specific one.
2. How would you replace the current starter Pokémon in your party with its evolved form?

Hint: 
  - Pokemon 1: Bulbasaur evolves into Pokemon 2: Ivysaur
  - Pokemon 4: Charmander evolves into Pokemon 5: Charmeleon
  - Pokemon 7: Squirtle evolves into Pokemon 8: Wartortle
  - Pokemon 25: Pikachu evolves into Pokemon 26: Raichu

More Hints: The existing starter Pokemon will be *replaced* in your party with the Pokemon it evolved into. When working with an array of objects, the splice() array method is ideal for replacing one element with another. 


Solve Exercise 7 here:
*/


function evolvePokémon(party) {
    return party.map(pokémon => starterPokémon[pokémon] || pokémon);
  }

  /*
Exercise 8
1. Print the name of each Pokémon in your party.
2. Consider using a loop or an array method to access each Pokémon's name.

Solve Exercise 8 here:
*/
let party = [
    {name: 'Ivysaur', type: 
       ' Grass'},
       {name: 'Charmelon', type: 
        'Fire'},
    {name: 'Wartortle', type: 
        'Water'}    
];

party.forEach((pokemon) => 
console.log(pokemon.name))

  /*
Exercise 9
1. Can you print out all the starter Pokémon from the `pokemon` array?
2. Think about how you can identify a starter Pokémon and then log their names.


Solve Exercise 9 here:
*/

  
  // Filter starter Pokémon and log their names
    pokemon.filter((pokemon) => pokemon.starter);
  starterPokemon.forEach(pokemon) 
console.log(pokemon.name);

/*
Exercise 10
Create a method called `catchPokemon` and add it to the `game` object. You should not need to edit the original game object directly. This method should:
  - Accept an object as a parameter called `pokemonObj`
  - Add the `pokemonObj` to the `game.party` array.
  - not return anything

After writing this method, call it and pass in a Pokemon object of your choice from the `pokemon` data to catch it.

Solve Exercise 10 here:
*/


const game = {
    party: [],
};

game.catchPokemon = function(pokemonObj) {
    game.party.push(pokemonObj),
}; 
game.catchPokemon(pokemon[0]);
/*
Exercise 11
1. Copy the `catchPokemon` method that you just wrote above, and paste it below. Modify it so that it also decreases the number of pokeballs in your inventory each time you catch a Pokémon.
2. How will you find and update the quantity of pokeballs in the `game.items` array?

Tips:
For this exercise, it's okay to have a negative number of pokeballs.
After updating the method, call it and pass in a Pokemon object of your choice from the `pokemon` data to catch it.
Also, log the `game.items` array to confirm that the pokeball quantity is being decremented.

Solve Exercise 11 here:
*/

    
const pokeballIndex = game.items.findIndex(
    item => item.name === "Pokeball");
if (pokeballIndex !== -1) {
  game.items[pokeballIndex].quantity -= 1; 
} 

game.party.push(pokemonToCatch);
console.log(`Caught ${pokemonToCatch.name}!`);

/*
Exercise 12
1. Similar to Exercise 6, now complete gyms with a difficulty below 6. How will you approach this?
 (change the value of `complete` in the qualifying objects from false to true).

Solve Exercise 12 here:
*/


