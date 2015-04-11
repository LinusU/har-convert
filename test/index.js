/* global describe, it */

'use strict'

var convert = require('..')

require('should')

describe('node module', function () {
  it('must have at least one test', function (done) {
    convert()

    true.should.be.true

    done()
  })
})
