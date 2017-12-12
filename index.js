'use strict'

module.exports = {
  fields: [],
  codes: [],
  messages: [],
  field_feedback: {},
  count: () => {
    // How many errors are there?
    // return this.errors.codes.length
    return undefined
  },
  exists: () => {
    // Are there any errors?
    // if (this.errors_count > 0) {
    //   return true
    // } else {
    //   return false
    // }
    return undefined
  },
  has_field: (field) => {
    // Does it have a specific field?
    // if (this.errors.fields.includes(field)) {
    //   return true
    // } else {
    //   return false
    // }
    return undefined
  }
}
