/* global describe, it */

'use strict'

var unnamed = require('..')

require('should')

describe('node module', function () {
  it('must have at least one test', function (done) {
    unnamed()

    true.should.be.true

    done()
  })
})
