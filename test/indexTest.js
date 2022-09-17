const expect = require("chai").expect;
const lib = require("../src/adding_functions/adding");


describe("Basic test for index code", function () {
    it("adding two numbers together", (done) => {
        let outcome = lib.add(1, 2);
        expect(outcome).equals(3);
        done();
    })
})