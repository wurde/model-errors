'use strict'

/**
 * Dependencies
 */

const assert = require('assert')
const model_errors = require('./index')

/**
 * Define class
 */

class Post {
  constructor() {
    this.errors = new model_errors.Errors()
    this.is_valid = model_errors.is_valid
  }
}

/**
 * Assertions
 */

describe("index.js", () => {
  it("should have tests", () => {
    assert.ok(true)
  })

  it("should return type Object", () => {
    let post = new Post()
    assert.equal(post.errors.constructor, model_errors.Errors)
  })

  it("has {Array} property 'fields'", () => {
    let post = new Post()
    assert.ok('fields' in post.errors)
    assert.equal(post.errors.fields.constructor, Array)
  })

  it("has {Array} property 'codes'", () => {
    let post = new Post()
    assert.ok('codes' in post.errors)
    assert.equal(post.errors.codes.constructor, Array)
  })

  it("has {Array} property 'messages'", () => {
    let post = new Post()
    assert.ok('messages' in post.errors)
    assert.equal(post.errors.messages.constructor, Array)
  })

  it("has {Object} property 'field_feedback'", () => {
    let post = new Post()
    assert.ok('field_feedback' in post.errors)
    assert.equal(post.errors.field_feedback.constructor, Object)
  })

  it("has {Function} property 'count'", () => {
    let post = new Post()
    assert.ok('count' in post.errors)
  })

  it("has {Function} property 'exists'", () => {
    let post = new Post()
    assert.ok('exists' in post.errors)
  })

  it("has {Function} property 'has_field'", () => {
    let post = new Post()
    assert.ok('has_field' in post.errors)
  })

  it("returns count of fields with errors", () => {
    let post = new Post()
    post.errors.codes.push('title_too_short')
    assert.equal(post.errors.count, 1)
    post.errors.codes.push('title_too_long')
    assert.equal(post.errors.count, 2)
  })

  it("checks if any errors exist", () => {
    let post = new Post()
    assert.equal(post.errors.exists, false)
    post.errors.codes.push('invalid_email')
    assert.equal(post.errors.exists, true)
  })

  it("looks up which fields have errors", () => {
    let post = new Post()
    post.errors.fields.push('title')
    assert.equal(post.errors.has_field('title'), true)
    assert.equal(post.errors.has_field('content'), false)
  })
})
