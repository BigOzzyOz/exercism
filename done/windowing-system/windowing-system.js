// @ts-check

/**
 * Implement the classes etc. that are needed to solve the
 * exercise in this file. Do not forget to export the entities
 * you defined so they are available for the tests.
 */

/**
 * Creates a new Size object with the given width and height.
 * If no width and height are given, the object will have a
 * width of 80 and a height of 60.
 *
 * @param {number} [width=80]
 * @param {number} [height=60]
 */
export function Size(width = 80, height = 60) {
  this.width = width;
  this.height = height;
}

/**
 * Resizes the Size object to the specified width and height.
 *
 * @param {number} newWidth - The new width for the Size object.
 * @param {number} newHeight - The new height for the Size object.
 */
Size.prototype.resize = function (newWidth, newHeight) {
  this.width = newWidth;
  this.height = newHeight;
};

/**
 * Creates a new Position object with the given x and y coordinates.
 * If no x and y are given, the object will have a position of (0, 0).
 *
 * @param {number} [x=0]
 * @param {number} [y=0]
 */
export function Position(x = 0, y = 0) {
  this.x = x;
  this.y = y;
}

/**
 * Moves the Position object to the specified x and y coordinates.
 *
 * @param {number} newX - The new x-coordinate for the Position object.
 * @param {number} newY - The new y-coordinate for the Position object.
 */
Position.prototype.move = function (newX, newY) {
  this.x = newX;
  this.y = newY;
};

export class ProgramWindow {

  /**
   * Constructs a new ProgramWindow object.
   *
   * The new object's `screenSize` is set to (800, 600), and its `size` and
   * `position` are set to (80, 60) and (0, 0) respectively.
   */
  constructor() {
    this.screenSize = new Size(800, 600);
    this.size = new Size();
    this.position = new Position();
  }

  /**
   * Resizes the ProgramWindow to the specified dimensions.
   *
   * The new size is adjusted to ensure the window does not exceed the boundaries
   * of the screen and maintains a minimum size of 1x1.
   *
   * @param {Size} newSize - The desired new size for the window.
   */
  resize(newSize) {
    const width = Math.max(1, Math.min(newSize.width, this.screenSize.width - this.position.x));
    const height = Math.max(1, Math.min(newSize.height, this.screenSize.height - this.position.y));
    this.size.resize(width, height);
  }

  /**
   * Moves the ProgramWindow to the specified position.
   *
   * The new position is adjusted to ensure the window does not exceed the
   * boundaries of the screen and maintains a minimum position of (0, 0).
   *
   * @param {Position} newPosition - The desired new position for the window.
   */
  move(newPosition) {
    const x = Math.max(0, Math.min(newPosition.x, this.screenSize.width - this.size.width));
    const y = Math.max(0, Math.min(newPosition.y, this.screenSize.height - this.size.height));
    this.position.move(x, y);
  }
}

/**
 * Changes the size and position of the provided ProgramWindow.
 *
 * This function resizes the window to 400x300 and moves it to position (100, 150).
 * The updated window is returned.
 *
 * @param {ProgramWindow} updatedWindow - The window to be modified.
 * @returns {ProgramWindow} The modified window.
 */

export function changeWindow(updatedWindow) {
  const newSize = new Size(400, 300);
  const newPosition = new Position(100, 150);
  updatedWindow.resize(newSize);
  updatedWindow.move(newPosition);
  return updatedWindow;
}