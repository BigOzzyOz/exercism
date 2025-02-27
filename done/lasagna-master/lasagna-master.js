/// <reference path="./global.d.ts" />
// @ts-check

/**
 * Implement the functions needed to solve the exercise here.
 * Do not forget to export them so they are available for the
 * tests. Here an example of the syntax as reminder:
 *
 * export function yourFunction(...) {
 *   ...
 * }
 */

/**
 * Returns the status of the lasagna, given the remaining timer value.
 *
 * @param {number} [timer] - The remaining timer value.
 * @returns {string} The status of the lasagna.
 */
export function cookingStatus(timer) {
  if (timer === undefined) {
    return 'You forgot to set the timer.';
  }
  return timer > 0 ? 'Not done, please wait.' : 'Lasagna is done.';
}

/**
 * Calculates the total preparation time for the lasagna.
 *
 * @param {string[]} layers - The layers of the lasagna.
 * @param {number} [preparationTimePerLayer=2] - The preparation time per layer.
 * @returns {number} The total preparation time.
 */
export function preparationTime(layers, preparationTimePerLayer = 2) {
  return layers.length * preparationTimePerLayer;
}

/**
 * Calculates the required amounts of noodles and sauce.
 *
 * @param {string[]} layers - The layers of the lasagna.
 * @returns {Quantities} The required amounts of noodles and sauce.
 */
export function quantities(layers) {
  const ingredients = {
    noodles: 0,
    sauce: 0,
  };
  layers.forEach((layer) => {
    if (layer === 'noodles') {
      ingredients.noodles += 50;
    } else if (layer === 'sauce') {
      ingredients.sauce += 0.2;
    }
  });
  return ingredients;
}

/**
 * Adds the last ingredient of the friends list to your list.
 *
 * @param {string[]} friendsList - The friends list.
 * @param {string[]} myList - Your list.
 */
export function addSecretIngredient(friendsList, myList) {
  myList.push(friendsList[friendsList.length - 1]);
}


export function scaleRecipe(recipe, portions) {
  const scaledRecipe = {};
  for (const key in recipe) {
    scaledRecipe[key] = recipe[key] * portions / 2;
  }
  return scaledRecipe;
}
