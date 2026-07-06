'use strict';




// 135. Default Parameters.

/* 

const bookings = [];
const createBooking = function (flightNum, numPassengers=1, price=199*numPassengers){
	// ES5
	// numPassengers = numPassengers || 1;
	// price = price || 199;

	const booking = {
		flightNum,
		numPassengers,
		price
    };

    console.log(booking);
    bookings.push(booking);
}

createBooking('LH123');
createBooking('LH123', 2, 800);
createBooking('LH123', 2);
createBooking('LH123', 5);

createBooking('LH123', undefined, 1000); */





// 136. How Passing Arguments Works: Value vs. Reference

/* const flight = 'LH234';
const jonas = {
	name: 'Jonas Schmedtmann',
	passport: 234789798
} 

const checkIn = function(flightNum, passenger){
	flightNum = 'LH999',
	passenger.name = 'Mr. ' + passenger.name;

	if(passenger.passport === 234789798){
		alert('Check in');
	} else {
		alert('Passport is wrong');
	}
}

checkIn(flight, jonas);
console.log(jonas);

const newPassport = function(person){
	person.passport = Math.trunc(Math.random() * 100000000);
}

newPassport(jonas); 
 */






// 137. First-Class and Higher-Order Functions

/*
JavaScript is a language that has FIRST-CLASS FUNCTIONS                 HIGHER-ORDER FUNCTIONS                 

 - JS treats functions as first-class citizens                          - A function that receives another function as an 
 - This means that functions are simply values                          argument, that returns a new function, or both
 - Functions are just another "type" of object                          - This is only possible of first-class functions


 -> Store functions in variables or properties:                        -> Function that receives another function
    const add = (a, b) => a + b;                                       const greet = () => console.log('Hey Jonas'); 
    const counter = {                                                  btnClose.addEventListener('click', greet); 
        value: 23,                                                     
        inc: function() {this.value++;                                  -> Function that returns new function
    }                                                                   function count() {
                                                                            let counter = 0;
 -> Pass functions as arguments to OTHER functions:                         return function() {
    const greet = () => console.log('Hey Jonas');                               counter++;
    btnClose.addEventListener('click', greet);                              };
                                                                        }
 -> Return functions FROM functions
 -> Call methods on functions:
    counter.inc.bind(someOtherObject);
*/






// 138. Functions Accepting Callback Functions

// two generic functions
/* const oneWord = function(str){
    return str.replace(/ /g, '').toLowerCase();
}

const upperFirstWord = function(str){
    const[first, ...others] = str.split(' ');
    return [first.toUpperCase(), ...others].join(' ');
};

// Higher order function
const transformer = function(str, fn){
    console.log(`Original string: ${str}`);
    console.log(`Transformed string: ${fn(str)}`);

    console.log(`Transformed by: ${fn.name}`);
}

transformer('JavaScript is the best!', upperFirstWord);
transformer('JavaScript is the best!', oneWord);

//JS uses callbacks all the time
const high5 = function(){
    console.log('👋');
}
document.body.addEventListener('click', high5);

['Jonas', 'Martha', 'Adam'].forEach(high5); */








// 139. Functions Returning Functions

const greet = function(greeting){
    return function(name){
        console.log(`${greeting} ${name}`);
    };
};

const greeterHey = greet('Hey');
greeterHey('Jonas');
greeterHey('Steven');

greet('Hello')('Jonas');

// Arrow function
const greetArr = greeting => name => console.log(`${greeting} ${name}`);
greetArr('Hi')('Jonas');