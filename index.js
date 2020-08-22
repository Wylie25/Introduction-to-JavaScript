/************************************************************** Task 1: Warm-up! **************************************************************/
//Task a: declare a variable called votingAge, console log true if age > 18 (no function required)

let votingAge = 28;

if (votingAge > 18) {
  console.log(true);
} else {
  console.log(false);
}

//Task b: declare a variable and then use a conditional to change the value of that variable based on the value assigned to a second variable (no function required)

let numOne = 8;
let numTwo = 3;

if (numTwo < numOne) {
  numOne = numOne - 2;
  console.log("numOne is bigger", numOne);
} else {
  console.log("numOne is smaller", numOne);
}

//Task c: Convert string ("1999") to integer (1999)  (no function required) // hint look up the Number method

console.log(parseInt("1999"));

//Task d: Write a function to multiply a*b

function multiply(a, b) {
  return a * b;
}

/************************************************************** Task 2 **************************************************************/
//Age in Dog years
//write a function that takes your age and returns it to you in dog years - they say that 1 human year is equal to seven dog years

function multiply(myAge) {
  return function (dogYears) {
    return myAge * dogYears;
  };
}

console.log(multiply(28)(7));

/************************************************************** Task 3 **************************************************************/
//Dog feeder
//takes weight in pounds and age in years (note if the dog is a puppy the age will be a decimal) and returns the number of pounds of raw food to feed in a day.

//feeding requirements
// adult dogs at least 1 year
// up to 5 lbs - 5% of their body weight
// 6 - 10 lbs - 4% of their body weight
// 11 - 15 lbs - 3% of their body weight
// > 15lbs - 2% of their body weight

// Puppies less than 1 year
// 2 - 4 months 10% of their body weight
// 4 - 7 months 5% of their body weight
// 7 - 12 months 4% of their body weight

// when you are finished invoke your function with the weight of 15 lbs and the age of 1 year - if your calculations are correct your result should be 0.44999999999999996

function dogFeeder(age, weight) {
  if (age <= 1) {
    if (age <= 0.4) {
      return weight * 0.01;
    } else if (age <= 0.07) {
      return weight * 0.05;
    } else if (age < 1) {
      return weight * 0.04;
    }
  }
  if (weight >= 6) {
    if (weight <= 5) {
      return weight * 0.05;
    }
    if (weight <= 10) {
      return weight * 0.04;
    }
    if (weight <= 15) {
      return weight * 0.03;
    }
    if (weight >= 15) {
      return weight * 0.02;
    }
  }
}
console.log(dogFeeder(1, 15));

/************************************************************** Task 4 **************************************************************/
// Rock, Paper, Sissors
// Your function should take a string (either rock paper or sissors)
// it should return you won or you lost based on the rules of the game (you may need to look up the rules if you have not played before)
// use math.random to determine the computers choice
// hint while you can complete this with only conditionals based on strings it may help to equate choice to a number

function rockPaperScissors(myPick) {
  let computerPick = Math.floor(3 * Math.random());
  if (computerPick === 0) {
    computerPick = "rock";
  } else if (computerPick === 1) {
    computerPick = "paper";
  } else if (computerPick === 2) {
    computerPick = "scissors";
  }
  if (computerPick === "scissors") {
    if (myPick === "rock") {
      return "you win!";
    } else if (myPick === "paper") {
      return "you lose!";
    } else {
      return "you tie!";
    }
  }
  if (computerPick === "paper") {
    if (myPick === "scissors") {
      return "you win!";
    } else if (myPick === "rock") {
      return "you lose!";
    } else {
      return "you tie!";
    }
  }
  if (computerPick === "rock") {
    if (myPick === "paper") {
      return "you win!";
    } else if (myPick === "scissors") {
      return "you lose!";
    } else {
      return "you tie!";
    }
  }
}
console.log(rockPaperScissors("paper"));

/************************************************************** Task 5 **************************************************************/
//Metric Converter
//a. KM to Miles - should take the number of kilometers and convert it to the equal number of miles

let miles = 0.621371;
function multiply(miles) {
  return function (kilometers) {
    return miles * kilometers;
  };
}

console.log(multiply(miles)(5));

//b. Feet to CM - should take the number of feet and convert it to the equal number of centimeters

let CM = 30.48;
function multiply(CM) {
  return function (feet) {
    return CM * feet;
  };
}

console.log(multiply(CM)(10));

/************************************************************** Task 6 **************************************************************/
// 99 bottles of soda on the wall
// create a function called annoyingSong
// the function should take a starting number as an argument and count down - at each iteration it should log (number) bottles of soda on the wall, (number) bottles of soda, take one down pass it around (number left over) bottles of soda on the wall`

var word = "bottles";
var count = 99;
while (count > 0) {
  if (count == 1) {
    var word = "bottle";
  }
  console.log(count + " " + word + " of beer on the wall");
  console.log(count + " " + word + " of beer,");
  console.log("Take one down, pass it around,");
  count = count - 1;
  if (count > 0) {
    if (count == 1) {
      var word = "bottle";
    }
    console.log(count + " " + word + " of beer on the wall.");
  } else {
    if (count < 1) {
      var word = "bottles";
    }
    console.log("No more " + word + " of beer on the wall.");
  }
}

/************************************************************** Task 7 **************************************************************/
//Grade Calculator
//write a javaScript program that takes a mark out of 100 and returns a corisponding letter grade
//90s should be A
//80s should be B
//70s should be Cs
//60s should be D
//and anything below 60 should be F

function gradeCalculator(points) {
  if (points >= 90) {
    return "Your grade is an A!";
  }
  if (points <= 89 && points >= 80) {
    return "Your grade is a B!";
  }
  if (points <= 79 && points >= 70) {
    return "Your grade is a C!";
  }
  if (points <= 69 && points >= 60) {
    return "Your grade is a D!";
  }
  if (points < 60) {
    return "Your grade is an F!";
  }
}
console.log(gradeCalculator(86));

/************************************************************** Stretch **************************************************************/
//Create a function that counts the number of vowels within a string. It should handle both capitalized and uncapitalized vowels.
// Hint - you may need to study tomorrow's traning kit on arrays
// try looking up the .includes() method

/************************************************************** Stretch **************************************************************/
//Take Rock, Paper, Sissors further
//update your rock papers sissors code below to take a prompt from a user using the window object
