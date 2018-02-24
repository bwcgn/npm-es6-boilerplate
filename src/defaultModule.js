'use strict'

/** Class named Hello World. */
export default class HelloWorld {
  /**
   * Create Hello World.
   * @param {String} name - Name the world.
   */
  constructor (name) {
    this.name = name || 'hello hello'
  }

  /**
   * This function returns the sum of 2 numbers.
   * @param {number} a any number
   * @param {number} b any other number
   * @returns {number} sum of both numbers.
   */
  calcTest (a, b) {
    return a + b
  }
}
