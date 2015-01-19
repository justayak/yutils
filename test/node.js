/**
 * Created by Julian on 12/10/2014.
 */

var Utils = require("./../yutils");

console.log("#1");

function test(a,b) {
    Utils.assertLength(arguments,2);
}

test(1,2);

console.log(Utils.guid());

console.log(Utils.sample([1,2,3,4,5], 3));

console.log(Utils.isString("hello"));
console.log(Utils.isString({a:0}));

var tA = Date.now();
var x = 0;
for(var i = 0; i < 1000000;i++) {
    x *= i + 1;
}
var tB = Date.now();
console.log(Utils.timeDifferenceInMs(tA,tB));

console.log("ms to s: " + Utils.msToS(2400));

console.log("f:" + Utils.isDefined(null));
console.log("f:" + Utils.isDefined(undefined));
console.log("t:" + Utils.isDefined("hello"));

console.log("[0,2,3]: " + Utils.deletePosition([0,1,2,3],1));

function Duck() {

}

function Animal() {};
Animal.prototype.drink = function () {};

Utils.inherit(Duck, Animal);

Duck.prototype.quack = function () {};
Duck.prototype.walk = function () {};
Duck.prototype.duck = function () {};


var demo = new Duck();

console.log("t: " + Utils.implements(demo, "quack", "walk", "duck"));
console.log("f: " + Utils.implements(demo, "quack", "walk", "duck", "lol"));
console.log("t: " + Utils.implements(demo, ["quack", "walk", "duck"]));
console.log("f: " + Utils.implements(demo, ["quack", "walk", "duck", "lol"]));

demo = new Duck();

console.log("t: " + Utils.implements(demo, "quack", "walk", "duck", "drink"));

console.log('true ', Utils.isNumber(12));

console.log('true ', Utils.isNumber(12.2));

console.log('false ', Utils.isNumber('12'));

console.log('false ', Utils.isNumber(''));

console.log('false ', Utils.isNumber(null));

console.log('false ', Utils.isNumber(undefined));

console.log('false ', Utils.isNumber({ hello: "222"}));

var definition = {
    a : Number,
    b : Number,
    c : String,
    d : Duck
};

var obj1 = {
    qq : "qq",
    a : 23,
    b : -332.1,
    c : 'Hello world',
    d : new Duck()
};

var obj2 = {
    qq : "qq",
    a : 23,
    b : -332.1,
    c : 'Hello world',
    d : '11'
};


console.log('def: true', Utils.defines(obj1,definition));

console.log('def: false', Utils.defines(obj2,definition));