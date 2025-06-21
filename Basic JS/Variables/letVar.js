// Variable
// using string to describe let

// let message = 'Hello!';
// alert(message);


//  multiple variables in one line
// let user = 'John', 
// age = 25, 
// message = 'Hello';
// var instead of let , var is almost same but slighty different like old way


// a Real Life Analogy

// a variable message can be imagined as a box labelled as "message" with the value "Hello!" in it:
// we can put value in the box.
// let message; 
// message = 'Hello!';
// alert(message);

// we can also change it as many times as we want:
// let message; 
// message = 'Hello!';
// message = 'World!';
// as we can see the value hello will be not be used as it's countered by value of world so the latest value will be used
// alert(message);


// We can also declare two variables and copy data from one into the other.
let hello = 'Hello world!';
let message;
// copy 'Hello world' from hello into message
message = hello;

// now two variables hold the same data
alert(hello); // Hello world!
alert(message); // Hello world!