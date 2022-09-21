// This is the entry point for the program which creates the server and runs it
const { Recipe } = require("./recipe/recipe");
const { DataAccessLayer } = require("./dal");
const express = require('express')

const app = express()
const port = 3000
const path = "./data_storage";

app.get('/', (req, res) => {
    res.send('hello world')
})

app.post('/recipe', (req, res) => {
    let name = req.body["name"];
    let recipe = new Recipe(name);
    let dal = new DataAccessLayer(path);
    dal.saveRecipe(recipe);
    res.send({"response": "recipe created"})
})

app.get('/recipe/:name', (req, res) => {
    let name = req.params.name;
    let dal = new DataAccessLayer(path);
    res.send({"recipe": dal.loadRecipe(name)})
})


app.post('/ingredient', (req, res) => {
    let name = req.body["name"];
    let recipeName = req.body["recipeName"];
    let amount = req.body["amount"];
    let measurementType = req.body["measurementType"];

    let dal = new DataAccessLayer(path);
    let recipe = dal.loadRecipe(recipeName);
    // TODO => create a loading recipe from raw data from JSON file
    recipe.addIngredient(name, amount, measurementType);
    dal.saveRecipe(recipe);
    res.send({"response": "ingredient added"})
})

app.listen(port, () => {
    console.log(`Example app listening on port ${port}`)
})
