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