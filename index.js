'use strict'

/**
 * Dependencies
 */

const path = require('path')
const Errors = require(path.join(__dirname, '/lib/errors'))
const is_valid = require(path.join(__dirname, '/lib/is_valid'))

module.exports = {
  Errors: Errors,
  is_valid: is_valid
}
