'use strict'

/**
 * Runs validations and checks for errors.
 *
 * @method
 * @return {Boolean} - Is the object in a valid state?
 * @public
 */

async function is_valid() {
  await this.validate()
  if (this.errors.count == 0) {
    return true
  } else {
    return false
  }
}

/**
 * Export validation check
 */

module.exports = is_valid
