const expect = require("chai").expect;
const recipeLib = require("../../src/recipe/recipe");


describe("Basic test for the recipe class", function () {

    it("testing the constructor", (done) => {
        let recipe = new recipeLib.Recipe("sandwich");

        expect(recipe.name, ).equals("sandwich");
        done();
    })

    it("testing adding an ingredient", (done) => {
        let recipe = new recipeLib.Recipe("sandwich");

        recipe.addIngredient("Ham", 2, "kg");
        expect(recipe.ingredients["Ham"].name, ).equals("Ham");
        expect(recipe.ingredients["Ham"].amount, ).equals(2);
        expect(recipe.ingredients["Ham"].measurementType, ).equals("kg");
        done();
    })

})