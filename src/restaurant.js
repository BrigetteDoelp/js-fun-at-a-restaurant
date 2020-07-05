function createRestaurant(name, menus) {
  return pizzaRestaurant = {
    name: name,
    menus: menus = {
      breakfast: [],
      lunch: [],
      dinner: [],
    },
  }
}

function addMenuItem(restaurant, menuItem) {
  var doesContain = false;

  for (var i = 0; i < restaurant.menus[menuItem.type].length; i++) {
    if (restaurant.menus[menuItem.type][i] === menuItem) {
      doesContain = true
      break;
    }
  }
  if (doesContain === false) {
    restaurant.menus[menuItem.type].push(menuItem);
  }
}

function removeMenuItem(restaurant, menuItem, itemType) {

  if (itemType === undefined) {
    return `Sorry, we don't sell ${menuItem}, try adding a new recipe!`
  } else {
    restaurant.menus[itemType].splice(0, 1)
    return `No one is eating our ${menuItem} - it has been removed from the ${itemType} menu!`
  }
}



module.exports = {
  createRestaurant,
  addMenuItem,
  removeMenuItem
}

//npm test test/restaurant-test.js
