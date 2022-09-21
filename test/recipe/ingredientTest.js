const expect = require("chai").expect;
const lib = require("../../src/recipe/ingredient");


describe("Basic test for the ingredient class", function () {

    it("testing the constructor", (done) => {
        let name = "Ham";
        let amount = "2";
        let measurementType = "kg"

        let ingredient = new lib.Ingredient(name, amount, measurementType);

        expect(ingredient.name).equals(name);
        expect(ingredient.amount).equals(amount);
        expect(ingredient.measurementType).equals(measurementType);
        done();
    })

})