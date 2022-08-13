// This repo is optional extra practice to use the underscore functions.
// Here we'll be writing new functions, but these functions will use
// the underscore functions within them.

/*
 *
 *  _.each
 *
 */

// use _.each to create a copy of the given array.
var moreFruits = function(fruits) {
  var results = [];

  _.each(fruits, function(fruit, index, collection) {
    results.push(fruit);
  });

  return results;
};

// use _.each to traverse the number array and determine
// which are multiples of five.
var multiplesOfFive = function(numbers) {
  var multiples = 0;

  _.each(numbers, function(num, index, colection) {
    if (num % 5 === 0) {
      multiples++;
    }
  });

  return multiples;
};

/*
 *
 *  _.filter
 *
 */

// use _.filter to return the fruits array with only the desired fruit.
var onlyOneFruit = function(fruits, targetFruit) {

  return _.filter(fruits, function(fruit) {
    return fruit === targetFruit;
  });

};

// use _.filter to return the fruits array with only fruits
// starting with the letter 'P'.
var startsWith = function(fruits, letter) {

  return _.filter(fruits, function(fruit) {
    return fruit[0] === letter;
  });

};

// return a filtered array containing only cookie-type desserts.
var cookiesOnly = function(desserts) {

  return _.filter(desserts, function(dessert) {
    return dessert.type === 'cookie';
  });

};

/*
 *
 *  _.reduce
 *
 */

// return the total price of all products.
var sumTotal = function(products) {

  return _.reduce(products, function(accumulator, product) {
    return accumulator + Number(product.price.slice(1, product.price.length));
  }, 0);

};

// return an object consisting of dessert types and how many of each.
// exampleOutput: { dessertType: 3, dessertType2: 1 }
var dessertCategories = function(desserts) {
  console.log(desserts);

  return _.reduce(desserts, function(accumulator, dessert) {
    if (accumulator[dessert.type] === undefined) {
      accumulator[dessert.type] = 1;
    } else if (accumulator[dessert.type] !== undefined) {
      accumulator[dessert.type]++;
    }
    return accumulator;
  }, {});

};

// given an array of movie data objects,return an array containing
// movies that came out between 1990 and 2000.
// TIP: use an array as your accumulator - don't push to an external array!
var ninetiesKid = function(movies) {
  console.log(movies);

  return _.reduce(movies, function(accumulator, movie) {
    if (movie.releaseYear >= 1990 && movie.releaseYear <= 2000) {
      accumulator.push(movie.title);
    }
    return accumulator;
  }, []);
};

// return an boolean stating if there exists a movie with a shorter
// runtime than your time limit.
// timeLimit is an integer representing a number of minutes.
var movieNight = function(movies, timeLimit) {

  return _.reduce(movies, function(accumulator, movie) {
    if (movie.runtime < timeLimit) {
      accumulator = true;
    }
    return accumulator;
  }, false);

};

/*
 *
 *  _.map
 *
 */

// given an array of strings, use _.map to return a new array containing all
// strings converted to uppercase letters.
var upperCaseFruits = function(fruits) {

  return _.map(fruits, function(fruit) {
    return fruit.toUpperCase();
  });
};

// given an array of dessert objects, return a new array of objects
// that have a new "glutenFree" property, with a boolean value.
// TIP: Items that contain flour are not gluten-free.
var glutenFree = function(desserts) {

  return _.map(desserts, function(dessert) {

    if (dessert.ingredients.indexOf('flour') === -1) {
      dessert.glutenFree = true;
    } else if (dessert.ingredients.indexOf('flour') >= 0) {
      dessert.glutenFree = false;
    }
    return dessert;
  });

};

// use _.map to return an array of items with their sale prices, with a new property
// containing the sale price. round any decimals to 2 places.
//
// having trouble with decimals? check out this article:
// http://adripofjavascript.com/blog/drips/avoiding-problems-with-decimal-math-in-javascript.html
//
/*

 example output:
  var salePrices = applyCoupon(groceries, 0.20);
  [
    {
      id: 1,
      product: 'Olive Oil',
      price: '$12.1',
      salePrice: '$9.68'
    }
  ];

*/
var applyCoupon = function(groceries, coupon) {
  console.log(groceries);

  return _.map(groceries, function(product) {

    var originalPriceNum = Number(product.price.slice(1, product.price.length));
    var discount = originalPriceNum * coupon;
    var saleCost = originalPriceNum - discount;
    var saleCostRounded = (saleCost * 100).toFixed(0) / 100;
    product.salePrice = '$' + saleCostRounded.toString();

    return product;

  });
};
