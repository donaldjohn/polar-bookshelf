var chai = require("chai");
var chaiDiff = require("chai-diff");

var assert = chai.assert;
var expect = chai.expect;

chai.config.truncateThreshold = 0;
chai.use(chaiDiff);

module.exports.assertJSON = function(actual,expected) {

    // first convert both to JSON if necessary.
    actual = toJSON(actual);
    expected = toJSON(expected);

    if ( actual !== expected) {
        console.error("BEGIN ACTUAL ==========");
        console.error(actual);
        console.error("END ACTUAL   ==========");
    }

    try {
        expect(actual).not.differentFrom(expected);
    } catch (e) {
        console.error(e.message);
        throw e;
    }

};

function toJSON(obj) {

    if(typeof obj === "string") {
        return obj;
    }

    // if(obj instanceof Array) {
    //     if( obj.length >= 1 ) {
    //         if ((typeof obj[0]) === "string") {
    //             return obj;
    //         }
    //     }
    // }

    // also accept an array of strings.

    return JSON.stringify(obj, null, "  ");

}
