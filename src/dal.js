const { writeFileSync, readFileSync, readdirSync } = require('fs');


class DataAccessLayer {

    constructor(path) {
        this.path = path;
    }

    saveRecipe(recipe) {
        let recipeString = JSON.stringify(recipe);
        writeFileSync(this.path + recipe.name + ".json", recipeString);
    }

    loadRecipe(name) {
        return JSON.parse(readFileSync(this.path + name + ".json"))
    }

    get recipeNames() {
        return readdirSync(this.path)
    }
}

module.exports = {
    DataAccessLayer
}
