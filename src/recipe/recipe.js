const ingredientLib = require("./ingredient");


class Recipe {

    constructor(name) {
        this.name = name;
        this.ingredients = {};
    }
    addIngredient(name, amount, measurementType) {
        let ingredient = new ingredientLib.Ingredient(name, amount, measurementType);
        this.ingredients[ingredient.name] = ingredient;
    }
}

module.exports = {
    Recipe
}
