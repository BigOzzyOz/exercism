/// <reference path="./global.d.ts" />
//
// @ts-check

/**
 * Determine the price of the pizza given the pizza and optional extras
 *
 * @param {Pizza} pizza name of the pizza to be made
 * @param {Extra[]} extras list of extras
 *
 * @returns {number} the price of the pizza
 */
export function pizzaPrice(pizza, ...extras) {
  const basePrices = {
    Margherita: 7,
    Caprese: 9,
    Formaggio: 10
  };
  const extraPrices = {
    ExtraSauce: 1,
    ExtraToppings: 2
  };
  if (!(pizza in basePrices)) {
    throw new Error(`Unknown pizza: ${pizza}`);
  }

  function calculateTotal(currentTotal, remainingExtras) {
    if (remainingExtras.length === 0) return currentTotal;
    const [currentExtra, ...rest] = remainingExtras;
    return calculateTotal(
      currentTotal + (extraPrices[currentExtra] || 0),
      rest
    );
  }
  return calculateTotal(basePrices[pizza], extras);
}

/**
 * Calculate the price of the total order, given individual orders
 *
 * (HINT: For this exercise, you can take a look at the supplied "global.d.ts" file
 * for a more info about the type definitions used)
 *
 * @param {PizzaOrder[]} pizzaOrders a list of pizza orders
 * @returns {number} the price of the total order
 */
export function orderPrice(pizzaOrders) {
  let total = 0;
  for (const order of pizzaOrders) {
    total += pizzaPrice(order.pizza, ...order.extras);
  }
  return total;
}
