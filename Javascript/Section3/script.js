///////////////////////////////////////
// Lecture: Hoisting

// Functions and Variables are first hoisted-- they are stored into the variable object. Variables are stored as undefined.

// You can call a function before its declared because the code is HOISTED (stored in the variable object) before it is executed
calculateAge(1990);
function calculateAge(year) {
    console.log(2016 - year);
}

// You can NOT call a function expression before it is declared, because variables are not hoisted like function declarations
var retirement = function(year) {
    console.log(65 - (2016 - year));
}
retirement(1990);


///////

// Similar to function expressions, you cannot use a variable before it is declared
var age = 23; // this age is GLOBAL
console.log(age);


function foo() {
    // this age is within the function context so it is different than the global age variable
    var age = 100; 
    console.log(age);
}
foo();
console.log(age);







///////////////////////////////////////
// Lecture: Scoping


/* 

Scoping-- where can we access a certain variable?

Each new function creates a SCOPE. A scope is a space/environment.

GLOBAL SCOPE-- the default scope. Everything has access to the global scope.

LOCAL SCOPE-- the scope within a function.

LEXICAL SCOPING-- a function thats written within another function gets access to the same scope as its parent function

*/



// First scoping example


var a = 'Hello!';
first();

function first() {
    var b = 'Hi!';
    second();

    function second() {
        var c = 'Hey!';
        console.log(a + b + c);
    }
}


// Example to show the differece between execution stack and scope chain


var a = 'Hello!';
first();

function first() {
    var b = 'Hi!';
    second();

    function second() {
        var c = 'Hey!';
        // second function has access to the third function because the third function is in the global scope
        third()
    }
}

function third() {
    var d = 'John';
    console.log(a);
    // console.log(b);
    // console.log(c);
    console.log(d);
}



console.log('-------buffer-------');
///////////////////////////////////////
// Lecture: The this keyword


/*

THIS refers to the object that calls the method. A regular function call default points THIS to the global object (the window object, the browser)

THIS is not assigned a value until a function where it is defined is actually called.

*/

// this = global object (window object)
console.log(this);

calculateAge(1990);
function calculateAge(year) {
    console.log(2016 - year);
    // this = global object still, because the function is called globally
    console.log(this);
}


var john = {
    name: 'john',
    yearOfBirth: 1990, 
    calculateAge: function() {
        console.log(this); // this = john object

        function innerFunction() {
            // this = global object, because innerFunction() is not a method, but a regular function
            console.log(this);
        }
        innerFunction();
    }
};
john.calculateAge();


var mike = {
    name: 'mike',
    yearOfBirth: 1984
};

// Method Borrowing
mike.calculateAge = john.calculateAge;
mike.calculateAge();

// Even though calculateAge was originally john's method, when the method is borrowed by mike, the THIS keyword will actually change to the mike object and not the john object