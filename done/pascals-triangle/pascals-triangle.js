//
// This is only a SKELETON file for the 'Pascals Triangle' exercise. It's been provided as a
// convenience to get you started writing code faster.
//

export const rows = (n) => {
  if (n === 0) {
    return [];
  }
  let result = [[1]];
  let previousRow = [1];
  for (let i = 1; i < n; i++) {
    let currentRow = [];

    for (let j = 0; j <= i; j++) {
      if (j === 0 || j === i) {
        currentRow.push(1);
      } else {
        currentRow.push(previousRow[j] + previousRow[j - 1]);
      }
    }
    previousRow = currentRow;
    result.push(currentRow);
  }
  return result;
};

