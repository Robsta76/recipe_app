

class ShoppingList {

    constructor() {
        this.recipes = [];
    }

    compileShoppingList() {
        let counters = {};

        for (let index = 0; index < this.recipes.length; index++) {
            let currentRecipe = this.recipes[index];

            for (let [_, value] of Object.entries(currentRecipe.ingredients)) {
                if (counters[value.name] === undefined) {
                    counters[value.name] = value.amount;
                } else {
                    counters[value.name] += value.amount;
                }
            }
        }
        return counters
    }
}

module.exports = {
    ShoppingList
}
