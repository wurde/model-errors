'use strict'

/**
 * Dependencies
 */

const assert = require('assert')
const index = require('./index')

/**
 * Assertions
 */

describe("index.js", () => {
  it("should have tests", () => {
    assert.ok(true)
  })

  it("should return type Object", () => {
    assert.equal(index.constructor, Object)
  })

  it("has {Array} property 'fields'", () => {
    assert.ok('fields' in index)
    assert.equal(index.fields.constructor, Array)
  })

  it("has {Array} property 'codes'", () => {
    assert.ok('codes' in index)
    assert.equal(index.codes.constructor, Array)
  })

  it("has {Array} property 'messages'", () => {
    assert.ok('messages' in index)
    assert.equal(index.messages.constructor, Array)
  })

  it("has {Object} property 'field_feedback'", () => {
    assert.ok('field_feedback' in index)
    assert.equal(index.field_feedback.constructor, Object)
  })

  it("has {Function} property 'count'", () => {
    assert.ok('count' in index)
    assert.equal(index.count.constructor, Function)
  })

  it("has {Function} property 'exists'", () => {
    assert.ok('exists' in index)
    assert.equal(index.exists.constructor, Function)
  })

  it("has {Function} property 'has_field'", () => {
    assert.ok('has_field' in index)
    assert.equal(index.has_field.constructor, Function)
  })
})
