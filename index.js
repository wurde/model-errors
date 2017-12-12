'use strict'

class ModelErrors {
  constructor() {
    this.fields = []
    this.codes = []
    this.messages = []
    this.field_feedback = {}
  }

  get count() {
    return this.codes.length
  }

  get exists() {
    if (this.count > 0) {
      return true
    } else {
      return false
    }
  }

  has_field(field) {
    if (this.fields.includes(field)) {
      return true
    } else {
      return false
    }
  }
}

module.exports = ModelErrors
