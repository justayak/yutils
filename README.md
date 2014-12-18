#Utils

This is a collection of snippets that I find useful for my dev with JS.
They should work both in the browser and in Nodejs.

##API

###Object-Oriented Helpers
```javascript
var Utils = require('yutils');

// Check the parameter count of a function
function test(a,b,c) {
    Utils.assertLength(arguments,3); // throws exception when argument count is wrong
}

// INTERFACE
// Make sure, that an object implements a certain set of Functions:
function Duck(){...};
Duck.prototype.quack = function() {..};
Duck.prototype.walk = function() {..};

var duck = new Duck();

Utils.implements(duck, "quack", "walk"); // -> true

Utils.implements(duck, "bark", "walk"); //  -> false

// Inheritance
function Animal() {};
Animal.prototype.drink = function () {};

function Dog(){};
Utils.inherit(Dog, Animal);
Dog.prototype.bark = function(){};
Utils.implements(new Dog(), "drink", "bark");

```

###Primitives
```javascript
var Utils = require('yutils');

// Generate a pseudo-unique ID
var uid = Utils.guid();

// Create a random sample of an list
var sample = Utils.sample([1,2,3,4,5,6], 3); // creates a list with size '3'

// Check, weather a variable is defined or not
var a = undefined;
var b = null;
var c = "Hello";
var d = { test: 0 };

Utils.isDefined(a); //          -> false
Utils.isDefined(b); //          -> false
Utils.isDefined(c); //          -> true
Utils.isDefined(d); //          -> true
Utils.isDefined(d.test); //     -> true
Utils.isDefined(d.notThere); // -> false

// Check, weather a variable is a string or not
Utils.isString("Hello"); //     -> true
Utils.isString({test: 2}); //   -> false

// Delete the position in an array
var list = Utils.deletePosition([0,1,2,3],1)); // -> [0,2,3]

```