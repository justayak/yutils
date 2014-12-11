/**
 * Created by Julian on 12/10/2014.
 */

var Utils = require("./yutils");

console.log("#1");

function test(a,b) {
    Utils.assertLength(arguments,2);
}

test(1,2);

console.log(Utils.guid());

console.log(Utils.sample([1,2,3,4,5], 3));
