// 1.	Write a program that checks if a given number is positive, negative, or zero.
// Display the corresponding message using if-else statements.
var given_num = -3;
if (given_num > 0) {
  console.log(`The given number ${given_num} is positive`);
} else if (given_num < 0) {
  console.log(`The given number ${given_num} is negitive`);
} else if (given_num == 0) {
  console.log(`The given number ${given_num} is Zero`);
} else {
  console.log(`Wrong Input`);
}

// 2.Create a program that determines  if a given number is a leap year or not.
// Display the appropriate message using if-else statements. (A leap year is divisible by 4, but not by 100, unless it is divisible by 400.)
var givenYear = 2021;
if (givenYear % 4 == 0) {
  if (givenYear % 100 == 0) {
    if (givenYear % 400 == 0) {
      console.log(`The given Year ${givenYear} is a leap year`);
    } else {
      console.log(`The given year ${givenYear} is not a leap year `);
    }
  } else {
    console.log(`The given year ${givenYear} is a leap year .`);
  }
} else {
  console.log(`The given year ${givenYear} is not a leap year .`);
}

// 3.Create a program that calculates the grade based on a given score.
// Display the corresponding grade using if-else statements according to the following scale:
//      90 or above: A
//      80 to 89: B
//      70 to 79: C
//      60 to 69: D
//      Below 60: F

var givenScore = 59;
if (givenScore >= 90) {
  console.log(`Your grade according to your score ${givenScore} is : GRade A`);
} else if (givenScore >= 80 && givenScore < 90) {
  console.log(`Your grade according to your score ${givenScore} is : GRade B`);
} else if (givenScore >= 70 && givenScore < 80) {
  console.log(`Your grade according to your score ${givenScore} is : GRade C`);
} else if (givenScore >= 60 && givenScore < 70) {
  console.log(`Your grade according to your score ${givenScore} is : GRade D`);
} else if (givenScore < 60) {
  console.log(`Your grade according to your score ${givenScore} is : GRade F`);
} else {
  console.log(`Wrong INput`);
}

//4.	Create a program that checks the day of the week based on a given number (1 for Monday, 2 for Tuesday, etc.).
//    Display the corresponding day using a switch statement.

var givenData = 2;
switch (givenData) {
  case 1:
    console.log("monday");
    break;
  case 2:
    console.log("Tuesday");
    break;
  case 3:
    console.log("Wednesday");
    break;
  case 4:
    console.log("Thursday");
    break;
  case 5:
    console.log("Friday");
    break;
  case 6:
    console.log("Saturday");
    break;
  case 7:
    console.log("Sunday");
    break;
  default:
    console.log("Plz input the number between 1 to 7");
}

// 5.Write a program that checks the type of a given value and performs specific actions
// based on the type using a switch statement. For example, if the value is a number, multiply it by 2;
// if it is a string, concatenate "Hello " before it; if it is a boolean, negate it.
var value = false;
var type = typeof value;

switch (type) {
  case "string":
    console.log("hello " + value);
    break;
  case "number":
    console.log(value * 2);
    break;
  case "boolean":
    console.log(!value);
    break;
  default:
    console.log("Error");
}
