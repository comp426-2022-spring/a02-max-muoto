/** Coin flip functions 
 * This module will emulate a coin flip given various conditions as parameters as defined below
 */

/** Simple coin flip
 * 
 * Write a function that accepts no parameters but returns either heads or tails at random.
 * 
 * @param {*}
 * @returns {string} 
 * 
 * example: coinFlip()
 * returns: heads
 * 
 */

function coinFlip() {
  let rand = Math.floor(Math.random() * 2);
  if (rand == 1) {
    return "heads";
  } else {
    return "tails";
  }
}

/** Multiple coin flips
 * 
 * Write a function that accepts one parameter (number of flips) and returns an array of 
 * resulting "heads" or "tails".
 * 
 * @param {number} flips 
 * @returns {string[]} results
 * 
 * example: coinFlips(10)
 * returns:
 *  [
      'heads', 'heads',
      'heads', 'tails',
      'heads', 'tails',
      'tails', 'heads',
      'tails', 'heads'
    ]
 */

function coinFlips(flips) {
  let result = [];
  for (let i = 0; i < flips; i++) {
    result.push(coinFlip());
  }
  return result;
}

/** Count multiple flips
 * 
 * Write a function that accepts an array consisting of "heads" or "tails" 
 * (e.g. the results of your `coinFlips()` function) and counts each, returning 
 * an object containing the number of each.
 * 
 * example: conutFlips(['heads', 'heads','heads', 'tails','heads', 'tails','tails', 'heads','tails', 'heads'])
 * { tails: 5, heads: 5 }
 * 
 * @param {string[]} array 
 * @returns {{ heads: number, tails: number }}
 */

function countFlips(array) {
  let num_tails = 0;
  let num_heads = 0;
  for (let i = 0; i < array.length; i++) {
    if (array[i] == "heads") {
      num_heads += 1;
    } else {
      num_tails += 1;
    }
  }
  if (num_heads == 0) {
    return {
      tails: num_tails
    };
  }
  if (num_tails == 0) {
    return {
      heads: num_heads,
    };
  }
  return {
    heads: num_heads,
    tails: num_tails
  };
}

/** Flip a coin!
 * 
 * Write a function that accepts one input parameter: a string either "heads" or "tails", flips a coin, and then records "win" or "lose". 
 * 
 * @param {string} call 
 * @returns {object} with keys that are the input param (heads or tails), a flip (heads or tails), and the result (win or lose). See below example.
 * 
 * example: flipACoin('tails')
 * returns: { call: 'tails', flip: 'heads', result: 'lose' }
 */

function flipACoin(call) {
  let coin  = coinFlip();
  if (coin == call) {
    return {
      call: call,
      flip: coin,
      result: "win"
    };
  } else {
    return {
      call: call,
      flip: coin,
      result: "lose"
    };
  }
}


/** Export 
 * 
 * Export all of your named functions
*/


export {coinFlips, coinFlip, countFlips, flipACoin};