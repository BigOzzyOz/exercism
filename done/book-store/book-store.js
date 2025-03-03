//
// This is only a SKELETON file for the 'BookStore' exercise. It's been provided as a
// convenience to get you started writing code faster.
//

export const cost = (books) => {
  // coded with help from deepseek till I got my lightbulb moment 
  if (books.length === 0) return 0;

  const counts = [0, 0, 0, 0, 0];
  for (const book of books) {
    counts[book - 1]++;
  }
  counts.sort((a, b) => b - a);

  const memo = {};

  function calculateCost(sortedCounts) {
    const key = sortedCounts.join(',');
    if (Object.prototype.hasOwnProperty.call(memo, key)) return memo[key];

    if (sortedCounts.every(c => c === 0)) {
      memo[key] = 0;
      return 0;
    }

    let maxGroupSize = 0;
    while (maxGroupSize < 5 && sortedCounts[maxGroupSize] > 0) {
      maxGroupSize++;
    }

    let minCost = Infinity;

    for (let k = maxGroupSize; k >= 1; k--) {
      const newCounts = [...sortedCounts];
      for (let i = 0; i < k; i++) {
        newCounts[i]--;
      }
      newCounts.sort((a, b) => b - a);

      let groupCost;
      switch (k) {
        case 1:
          groupCost = 800;
          break;
        case 2:
          groupCost = 2 * 800 * 0.95;
          break;
        case 3:
          groupCost = 3 * 800 * 0.90;
          break;
        case 4:
          groupCost = 4 * 800 * 0.80;
          break;
        case 5:
          groupCost = 5 * 800 * 0.75;
          break;
        default:
          groupCost = 0;
      }

      const remainingCost = calculateCost(newCounts);
      const totalCost = groupCost + remainingCost;

      if (totalCost < minCost) minCost = totalCost;
    }

    memo[key] = minCost;
    return minCost;
  }

  return Math.round(calculateCost(counts));
};