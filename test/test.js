var chai = require('chai')
chai.should()
var expect = chai.expect

describe('require-config', function () {
  var requireConfig = require('../index')

  it('returns if all required parameters are present', function () {

    var config = {
        foo: 'bar',
        baz: 42
      }

      requireConfig(config, {
        foo: String,
        baz: Number
      })
  })

  it('throws if any of the required parameters is missing', function () {

      expect(function () {
        requireConfig({}, {
          qux: Boolean
        })
      }).to.throw('Missing required config parameter:\n\tqux: Boolean')

  })

  it('gets the cardinality of the label correct', function () {

    expect(function () {
        requireConfig({}, {
          qux: Boolean,
          flux: Number
        })
      }).to.throw('Missing required config parameters:\n\tqux: Boolean\n\tflux: Number')

  })

  it('throws if config is missing', function () {
    expect(function () {
      requireConfig(null, {foo: String, baz: Boolean})
    }).to.throw('Missing required config object:\n\tfoo: String\n\tbaz: Boolean')
  })

})
