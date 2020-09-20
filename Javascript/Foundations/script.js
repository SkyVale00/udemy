


/* ---------------------
   Variables & Datatypes
   --------------------- */


/*

*Note*

Always have meaningful names for your variables.
Use CAMELCASE when naming variables.
Do not name your variables numbers or keywords.

*/

/*
// declaring a variable
var firstName = 'John'; 

// print the declared variable to the console
console.log(firstName);

var lastName = 'Smith'; // string
var age = 28; // number
var fullAge = true; // boolean
var job; // you CAN declare a variable without assigning anything to it

console.log(fullAge);
console.log(job); //undefined

job = 'teacher';
console.log(job); 
*/

/* 

*Note* 

There are FIVE different datatypes in JS: Number, String, Boolean, Undefined, and Null.

Number: floating point numbers- decimals and integers
String: sequence of characters, used for text
Boolean: logical datatype- true or false values
Undefined: a variable that does not have a value yet
Null: non-existent

JavaScript has DYNAMIC TYPING which means you don't have to declare the datatype of a variable.

*/


// ===============================================

/* ---------------------
   Variable Mutation & Type Coercion
   --------------------- */

/*
var firstName = 'John';
var age = 28;

// In order to print age to the console, JS automatically converts age from a number to a string. This is TYPE COERCION.
console.log(firstName + ' ' + age);

// You can declare multiple variables at the same time
var job, isMarried;
job = 'teacher';
isMarried = false;

console.log(firstName + ' is a ' + age + ' year old ' + job + '. Is he married?: ' + isMarried);

// VARIABLE MUTATION is to change the value of a variable
age = 'twenty eight';
job = 'driver';

alert(firstName + ' is a ' + age + ' year old ' + job + '. Is he married?: ' + isMarried);

// You can get input from the user using PROMPT
var lastName = prompt('What is his last name?');
console.log(firstName + ' ' + lastName);
*/


// ===============================================

/* ---------------------
   Basic Operators
   --------------------- */

/*
// MATH OPERATORS
var now, ageJohn, ageMark;
now = 2020;
ageJohn = now - 28; // subtraction
ageMark = now - 33;

console.log(ageJohn);
console.log(now + 2); // addition
console.log(now * 10); // multiplication
console.log(now / 10); // division


// LOGICAL OPERATORS

// Is John older than Mark?
var johnOlder = ageJohn > ageMark;
console.log(johnOlder);

// typeof operator: tells you the type of variable
console.log(typeof johnOlder);
console.log(typeof ageJohn);
console.log(typeof 'Mark is older than John');
*/


// ===============================================

/* ---------------------
   Operator Precedence
   --------------------- */

/*
    Order of Operations: 
    ( )
    / * %
    - +
    < <= >= >
    && ||
    = 

*/

/*
var now = 2018;
var yearJohn = 1989;
var fullAge = 18;

// Multiple Operators
var isFullAge = now - yearJohn >= fullAge;
console.log(isFullAge);

// Grouping
var ageJohn = now - yearJohn;
var ageMark = 35;
var average = (ageJohn + ageMark) / 2;
console.log(average);

// Multiple Assignments
var x, y;
// assigning value to two variables at the same time!
x = y =  (3 + 5) * 4 - 6; // = 26
console.log(x, y);


// More Operators

// shortcut ways to write operations
x = x * 2;
x *= 2;

x = x + 10;
x += 10;

x = x - 10;
x -= 10;

x = x + 1; // incrementor
x++;
*/


// ===============================================

/* ---------------------
   CODING CHALLENGE #1
   --------------------- */

/*

Mark and John are trying to compare their BMI, which is calculated using the formula: BMI = mass / height^2.

1. Store Mark's and John's mass and height in variables.
2. Calculate both their BMIS.
3. Create a boolean variable containing information about whether Mark has a higher BMI than John.
4. Print a string to the console containing the variable from step 3.

Good luck.

*/

/*
var markMass = 56;
var markHeight = 179;
var johnMass = 80;
var johnHeight = 189;

var markBMI = markMass / (markHeight^2);
var johnBMI = johnMass / (johnHeight^2);
console.log(markBMI, johnBMI);
var isMarkThicc = markBMI > johnBMI;

console.log('Doe Mark have a higher BMI than John? ' + isMarkThicc);
*/


// ===============================================

/* ---------------------
   If/Else Statements
   --------------------- */

/*
var firstName = 'John';
var civilStatus = 'single';

// If John is married (true) than this will execute
if (civilStatus === 'married') {
    console.log(firstName + ' is married.');
} else { // if false, the else block will execute.
    console.log(firstName + ' is single.')
}

// If the condition is a boolean already, there's no need for any logical operators
var isMarried = true;
if (isMarried) {
    console.log(firstName + ' is married.');
} else {
    console.log(firstName + ' is single.')
}
*/


// ===============================================

/* ---------------------
   Boolean Logic
   --------------------- */

/*

    Boolean logic is a branch of computer science that deals with true and false values.

    AND -> &&
    OR -> ||
    NOT -> !

*/

/*
var firstName = 'John';
var age = 16;

if (age < 13) {
    console.log(firstName + ' is a boy.');
} else if (age >= 13 && age < 20) {
    console.log(firstName + ' is a teenager.')
} else if (age >= 20 && age < 30) {
    console.log(firstName + ' is a young man.');
} else {
    console.log(firstName + ' is a man.');
}
*/


// ===============================================

/* ---------------------
   Ternary Operator & Switch Statements
   --------------------- */

/*
var firstName = 'John';
var age = 16;

// TERNARY OPERATOR
// ? -> IF 
// : -> ELSE
age >= 21 ? console.log(firstName + ' can drink.') : console.log(firstName + ' cannot drink.');

// you can use ternary ops to assign to a variable in the same line as doing logic
var drink = age >= 21 ? 'beer' : 'juice';
console.log(drink);


// SWITCH STATEMENT
var job = 'teacher';
switch (job) {
    case 'teacher': // you can have multiple cases
    case 'instructor':
        console.log(firstName + ' teaches kids.');
        break; // don't forget to break out of each case
    case 'driver':
        console.log(firstName + 'drives an uber.')
        break;
    case 'designer':
        console.log(firstName + 'designs websites.');
        break;
    default: // default serves as an else
        console.log(firstName + 'does something else.');

}

age = 56;
switch (true) {
    case age < 13:
        console.log(firstName + ' is a boy.');
        break;
    case age >= 13 && age < 20:
        console.log(firstName + ' is a teen.');
        break;
    case age >= 20 && age < 30:
        console.log(firstName + ' is a young man.');
        break;
    default:
        console.log(firstName + ' is a man.');
}
*/


// ===============================================

/* ---------------------
   Truthy/Falsy Values & Equality Operators
   --------------------- */

/*

    FALSY values will return 'false' when evaluated in an if/else statement.
        Falsys --> undefined, null, 0, ' ', NaN

    TRUTHY values will return 'true' when evaluated in an if/else statement.
        Truthy --> NOT falsy values

*/

/*
var height;
height = 0;

if (height || height === 0) {
    console.log('Variable is defined!');
} else {
    console.log('Variable has NOT been defined.');
}
*/

// EQUALITY OPERATORS

/*
    === is strict!
    == is not strict, which means it does type coercion, which means it doesn't care about datatype as long as the value matches.

    It's better to always use strict.

*/

/*
if (height == '23') {
    console.log('The == op does type coercion!');
}
*/


// ===============================================

/* ---------------------
   CODING CHALLENGE #2
   --------------------- */


/*

    John and Mike both play basketball on different teams. In the latest 3 games, John's team scored 89, 120, and 103 points, while Mike's team scored 116, 94, and 123 points.

    1. Calculate the average score for each team.
    2. Decide which team wins based on the average score, and print the winner to console.
    3. Then change the score to show different winners. Don't forget to take into account that there may be a draw.

    4. EXTRA: Mary also plays basketball, and her team scored 97, 134, and 105 points. Like before, log the average winner to the console. 
    5. Like before, change the scores to generate different winners, keeping in mind there might be draws.

    Good luck.

*/

/*
var johnAvrScore = (89 + 120 + 103) / 3; //104
var mikeAvrScore = (116 + 94 + 123) / 3; //111

if (johnAvrScore > mikeAvrScore) {
    console.log('John\'s team wins!');
} else if (johnAvrScore < mikeAvrScore) {
    console.log('Mike\'s team wins!');
} else {
    console.log('The score is tied. It\'s a draw!');
}

// EXTRA
var maryAvrScore = (97 + 134 + 105) / 3; //112

if (johnAvrScore > mikeAvrScore && johnAvrScore > maryAvrScore) {
        console.log('John\'s team wins!');

} else if (mikeAvrScore > johnAvrScore && mikeAvrScore > maryAvrScore) {
    console.log('Mike\'s team wins!');

} else if (maryAvrScore > johnAvrScore && maryAvrScore > mikeAvrScore) {
    console.log('Mary\'s team wins!');

} else {
    console.log('The score is tied. It\'s a draw!');

}
*/


// ===============================================

/* ---------------------
   Functions
   --------------------- */


/*

Functions are like machine that receive input and do something with that input.

Use functions for code that you will use multiple times.
DRY -> Don't Repeat Yourself!

*/

/*
// birthYear is an ARGUMENT for the function
// function can have multiple arguments
function calculateAge(birthYear) {
    return 2018 - birthYear;
}

// 1990 is a PARAMETER and it is passed in as the argument of a function
var ageJohn = calculateAge(1990);
var ageMike = calculateAge(1948);
var ageJane = calculateAge(1969);
console.log(ageJohn, ageMike, ageJane);

// functions CAN call other functions
function yearsUntilRetirement(birthYear, firstName) {
    var age = calculateAge(birthYear);
    var retirement = 65 - age;

    if (retirement > 0) {
        console.log(firstName + ' retires in ' + retirement + ' years.');
    } else {
        console.log(firstName + ' is already retired.');
    }

}

yearsUntilRetirement(1990, 'John');
yearsUntilRetirement(1969, 'Mike');
yearsUntilRetirement(1948, 'Jane');
*/


// ===============================================

/* ---------------------
   Function Statements & Expressions
   --------------------- */

/*

What is the difference between an expression and a statement/declaration?

Expressions will always return a result.

Statements and Declarations don't return immediate results. Examples are if/else statements and while loops.

*/

/*
// FUNCTION DECLARATION
function declareWhatDoYouDo(job, firstName) {}

// FUNCTION EXPRESSION
var whatDoYouDo = function(job, firstName) {
    switch(job) {
        case 'teacher':
            return firstName + ' teaches kids.';
            // you don't need a break if you have a return
        case 'driver':
            return firstName + ' drives for uber.';
        case 'designer':
            return firstName + ' designs websites.';
        default:
            return firstName + ' does something else.';
    }
}

// you can console log a function call
console.log(whatDoYouDo('teacher', 'John'));
console.log(whatDoYouDo('designer', 'Jane'));
console.log(whatDoYouDo('retired', 'Mike'));
*/


// ===============================================

/* ---------------------
   Arrays
   --------------------- */

/*

Arrays are collections of variables.
They can contain different datatypes.

*/

/*
// Different ways to CREATE arrays
var names = ['John', 'Mark', 'Jane'];
var years = new Array(1990, 1969, 1948);

// Different datatypes in arrayss
var john = ['John', 'Smith', 1990, 'teacher', false];

// -----

// ACCESS data in arrays

// get entire array
console.log(names);

// access specific element by index
console.log(names[0]); 

// get amount of elements in array
console.log(names.length);

// returns the position of specified element
console.log(john.indexOf(1990)); 


// -----

// MUTATE data in arrays
names[1] = 'Ben'; // change data at specific index
console.log(names);

// adds element to end of array
names[names.length] = 'Mary'; 
names.push('Kayla'); // 

// adds element to front of array
names.unshift('Marco');

// removes element from end of array
names.pop();

// removes element from front of array
names.shift();


// -----

// if indexOf returns -1, that means the specified element does not exist within the array
var isDesigner = john.indexOf('designer') === -1 ? 'John is NOT a designer' : 'John IS a designer';
console.log(isDesigner);
*/


// ===============================================

/* ---------------------
   CODING CHALLENGE #3
   --------------------- */

/*

John and his family went on a holiday and went to three different restaurants. The bills were $124, $48, and $268.

To tip the waiter a fair amount, John created a simple tip calculator (as a function). He likes to tip 20% of the bill when the bill is less than $50, 15% when the bill is between $50 and $200, and 10% if the bill is more than $200.

In the end, John would like to have 2 arrays:
1. Containing all three tips (one for each bill)
2) Containing all three final paid amounts (bill + tip)

(NOTE: To calculate 20% of a value, simply multiply the value by 0.20)

Good luck.

*/

/*
// create variables for the bills to use later
var bill1 = 124;
var bill2 = 48;
var bill3 = 268;

// function that rounds decimal to format like money
function roundDecimal (number) {
    return Math.round(number * 100) / 100;
}

// function to calculate the tip
// takes bill as an argument
function calculateTip (bill) {

    var tip;

    if (bill < 50) {
        tip = roundDecimal(bill * 0.20);
    } else if (bill >= 50 && bill < 200) {
        tip = roundDecimal(bill * 0.15);
    } else if (bill > 200) {
        tip = roundDecimal(bill * 0.10);
    }
    
    return tip;

}

// calculate the tip using the calculateTip function
// store in variables for later
var tip1 = calculateTip(bill1);
var tip2 = calculateTip(bill2);
var tip3 = calculateTip(bill3);

// create array for tips
var tips = [];
tips.push(tip1);
tips.push(tip2);
tips.push(tip3);
console.log(tips);

// calculate total of bills + tips and add to totals array
var totals = [];
totals.push(bill1 + tip1)
totals.push(bill2 + tip2);
totals.push(bill3 + tip3);
console.log(totals);
*/


// ===============================================

/* ---------------------
   Objects & Properties
   --------------------- */

