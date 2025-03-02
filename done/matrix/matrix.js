//
// This is only a SKELETON file for the 'Matrix' exercise. It's been provided as a
// convenience to get you started writing code faster.
//

export class Matrix {
  newMatrix = [];

  constructor(matrix) {
    this.rowsData = matrix
      .split('\n')
      .map(row => row.split(' ').map(Number));
  }

  get rows() {
    return this.rowsData;
  }

  get columns() {
    return this.rowsData[0]
      ?.map((_, colIndex) => this.rowsData.map(row => row[colIndex]))
      ?? [];
  }
}
