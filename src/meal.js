function nameMenuItem(menuItemName) {
  return `Delicious ${menuItemName}`
}

function createMenuItem(name, price, type) {
  return menuItem = {
    name: name,
    price: price,
    type: type,
  }
}

function addIngredients(item, array) {
  var doesContain = false;

  for (var i = 0; i < array.length; i++) {
    if (array[i] === item) {
      doesContain = true
      break;
    }
  }

  if (doesContain === false) {
    array.push(item);
  }
}

function formatPrice(origPrice) {
  return `$${origPrice}`
}

function decreasePrice(fullPrice) {
  return fullPrice - .9
}

function createRecipe(title, ingredients, type) {
  return recipe = {
    title: title,
    ingredients: ingredients,
    type: type,
  }

}

module.exports = {
  nameMenuItem,
  createMenuItem,
  addIngredients,
  formatPrice,
  decreasePrice,
  createRecipe
}
//npm test test/meal-test.js
