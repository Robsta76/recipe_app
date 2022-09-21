const expect = require("chai").expect;
const ingredientLib = require("../../src/recipe/ingredient");
const recipeLib = require("../../src/recipe/recipe");
const {ShoppingList} = require("../../src/recipe/shoppingList");


describe("Basic test for the shopping list class", function () {

    it("testing the constructor", (done) => {
        let shoppingList = new ShoppingList();
        expect([], shoppingList.recipes);
        done();
    })

    it("testing compiling a shopping list", (done) => {
        let shoppingList = new ShoppingList();
        let recipe = new recipeLib.Recipe("Ham Sandwich");
        let recipeTwo = new recipeLib.Recipe("Ham pickle Sandwich");

        recipe.addIngredient("bread", 2, "slices");
        recipe.addIngredient("sliced ham", 3, "slices");
        recipe.addIngredient("mustard", 0.5, "tsp");

        recipeTwo.addIngredient("bread", 2, "slices");
        recipeTwo.addIngredient("sliced ham", 2, "slices");
        recipeTwo.addIngredient("mustard", 0.5, "tsp");
        recipeTwo.addIngredient("pickle", 2, "slices");

        shoppingList.recipes.push(recipe);
        shoppingList.recipes.push(recipeTwo);

        let compiledShoppingList = shoppingList.compileShoppingList();
        expect(compiledShoppingList["bread"]).equals(4);
        expect(compiledShoppingList["sliced ham"]).equals(5);
        expect(compiledShoppingList["mustard"]).equals(1);
        expect(compiledShoppingList["pickle"]).equals(2);
        done();
    })

})