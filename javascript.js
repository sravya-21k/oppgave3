/******************************************************************************
------------------------------------
!READ THE ASSIGNMENT TEXT CAREFULLY!
------------------------------------

1.

Use a normal 'for loop' to loop over the people array and do the following:

- If the objects 'name' value is "Otto", do not do any of the changes below to 
  that object (hint: the 'continue' keyword)

- Make a new key on each person object in the array called "city" and set the 
	value to a random city from the cities array.

- Make a new key on each person object called "title" and set it to "Mr." for
	males and "Ms." for females.
	
- Increment the age by 2

- Add "coding" to the beginning of the hobby array on each object.



PS: Use only 1 loop to do the above steps.

console.log(people) after your loop to check that your changes are correct.

Use your loop to also calculate the combined 
age of all the people objects and store it in the combinedAge variable.

Then, after the loop, use the combined age to calculate the average age
of everyone and store it in the averageAge variable.

Do your calculations AFTER you add the two years to the ages, and remember,
skip Otto!

******************************************************************************/

const cities = ["New York", "London", "Paris", "Berlin", "Copenhagen", "Rome"];

const people = [
  {
    name: "Thomas",
    male: true,
    age: 23,
    hobbies: ["cycling", "football", "pool"],
  },
  {
    name: "Susan",
    male: false,
    age: 26,
    hobbies: ["jogging", "travelling", "dancing"],
  },
  {
    name: "Monica",
    male: false,
    age: 21,
    hobbies: ["skateboarding", "guitar", "concerts"],
  },
  {
    name: "Avery",
    male: true,
    age: 28,
    hobbies: ["writing", "games", "memes"],
  },
  {
    name: "Phillip",
    male: true,
    age: 24,
    hobbies: ["boxing", "wrestling", "mma"],
  },
  {
    name: "Otto",
    male: true,
    age: 36,
    hobbies: ["movies", "cinema", "music"],
  },
  {
    name: "Annabelle",
    male: false,
    age: 30,
    hobbies: ["makeup", "fashion", "shopping"],
  },
  {
    name: "Cathy",
    male: false,
    age: 18,
    hobbies: ["design", "drawing", "css"],
  },
];
let combinedAge = 0;
let count = 0;
let averageAge = 0;
//If the objects 'name' value is "Otto", do not do any of the changes below to that object (hint: the 'continue' keyword)
//used for loop
for (let i = 0; i < people.length; i++) {
  //checking if the name is "Otto"
  if (people[i].name === "Otto") {
    continue; //skip the rest of the loop for this iteration
  }
  // - Make a new key on each person object in the array called "city" and set the 	value to a random city from the cities array.

  //generating  randomCities to select city
  const randomCities = Math.floor(Math.random() * cities.length);
  //Assign the city to the new key "city" in the current object
  people[i].city = cities[randomCities];

  //Make a new key on each person object called "title" and set it to "Mr." for males and "Ms." for females.

  people[i].title = people[i].male ? "Mr." : "Mrs.";

  //Increment the age by 2

  people[i].age += 2;

  //Add "coding" to the beginning of the hobby array on each object.

  people[i].hobbies.unshift("coding"); // use unshift to add to beginning of the array

  // Use your loop to also calculate the combined
  // age of all the people objects and store it in the combinedAge variable.

  // Then, after the loop, use the combined age to calculate the average age
  // of everyone and store it in the averageAge variable.

  // Do your calculations AFTER you add the two years to the ages, and remember,
  // skip Otto!

  combinedAge += people[i].age;
  count++; //Increment the counter to track the number of people processed
  averageAge = combinedAge / count; //Average age calculation
}
console.log(people);
console.log("CombinedAge:", combinedAge);
console.log("AverageAge:", averageAge);
/******************************************************************************
2.

Make the following function:

It should take in 1 number as a parameter.

The function should return an array of random numbers between 1 and 6, the 
length of the array is decided by the number the function receives as a 
parameter (think of it as the number of dice we roll)

Examples: 
diceRoller(4) should return something like: [4, 1, 2, 6]
diceRoller(6) should return something like: [5, 5, 6, 2, 3, 4]

EXTRA CREDIT:
(This is not mandatory)
Add a second parameter to the function that decides how many faces the dice 
should have.
diceRoller(5, 20) should return an array of 5 random numbers ranging from 1-20 
******************************************************************************/
//function declare 1 number as parameter
const diceRoller = (arrayLength) => {
  const array = []; // Initialize an empty array to store the random numbers
  for (let i = 0; i < arrayLength; i++) {
    //this loop decides how many random numbers to generate
    //generates random decimal number by multiplaying arraylength  Math.ceil declares random number between 1 and array length

    const randomNumbers = Math.ceil(Math.random() * arrayLength);
    array.push(randomNumbers);
  }
  return array;
};
console.log(diceRoller(6));
console.log(diceRoller(4));
// EXTRA CREDIT:
// (This is not mandatory)
// Add a second parameter to the function that decides how many faces the dice
// should have.
// diceRoller(5, 20) should return an array of 5 random numbers ranging from 1-20

const diceRollers = (numRolls, maxFaces) => {
  const array = []; // Initialize an empty array to store the random dice roll
  for (let i = 0; i < numRolls; i++) {
    // generate a random number between 1 and maxFaces
    const randomNumbers = Math.ceil(Math.random() * maxFaces);
    array.push(randomNumbers);
  }
  return array;
};
console.log(diceRollers(5, 20));

/******************************************************************************
3.

Make the following function:

The function should take in 1 array of strings.

Inside the function, do this:

Write a loop that loops strings in the array, and does the following:
- Removes whitespace from the beginning and end of each word
- Converts all the words to lower case

Use a "FOR of" loop.

After the loop, use a method to join the array into a string with a single 
space between the words (" "), and return the resulting string.

Example:
[" thIS", "teXt  ", " nEeds ", "to", "BE", "cleANED   ", " Up"]
should return:
"this text needs to be cleaned up"
******************************************************************************/
//const array = [" thIS", "teXt  ", " nEeds ", "to", "BE", "cleANED   ", " Up"];
function myFucntion(arr) {
  let myArray = []; //Intialize an empty array to store the cleaned up space
  for (let str of arr) {
    myArray.push(str.trim().toLowerCase());
  }
  return myArray.join(" ");
}

console.log(
  myFucntion([" thIS", "teXt  ", " nEeds ", "to", "BE", "cleANED   ", " Up"])
);

/******************************************************************************
4.

EXTRA CREDIT:

(This assignment is not mandatory, only for those who want an extra challenge)

Make a function called 'helloChecker' that takes in 1 string 
as a parameter.

Write code that checks all the words in the string if they match the word for 
'hello' in any of these languages:

hello - english
ciao - italian
salut - french
hallo - german
hola - spanish
czesc - polish

If any of the words in the string matches any of these, the function should 
return: "HELLO detected in (name of the language)."

If none of the words in the string match any of the words for hello in the 
different languages, your function should return: "No HELLO detected."

PS: Make sure the function is case insensitive, both 'Hello' and 'hello' 
should be detected.

I have provided some string variables to test your function with.
******************************************************************************/

/******************************************************************************
5.

EXTRA CREDIT:

(This assignment is not mandatory, only for those who want an extra challenge)

Complete the function below to accomplish the following:

Return the string received in the first parameter with the 
following alterations:

any letter in the string matching charA (the second parameter in the function) 
will be replaced with charB (the third parameter) and VICE VERSA - meaning 
letters matching charA will be replaced with charB, and letters matching charB 
will be replaced with charA. See the expected console log comments below.

Examples:

doubleSwap("this is a string", "i", "s")
should return "thsi si a itrsng"

doubleSwap("m#ybe #nother #ppro#ch is necess#ry", "#", "a")
should return "maybe another approach is necessary"

doubleSwap("what is the point of this?", "o", "t")
should return "whao is ohe ptino tf ohis?"
******************************************************************************/
