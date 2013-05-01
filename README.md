# require-config
validate configuration objects


## usage

    var requireConfig = require('require-config')

    var config = {
      foo: 'bar',
      baz: 42
    }

    requireConfig(config, {
      foo: String,
      baz: Number
    })
    // => undefined

    requireConfig(config, {
      qux: Boolean
    })
    // throws:

    Missing required config parameter:
      qux: Boolean


Interface is defined as a [tracery](https://npm.im/tracery) object.

## installation

    $ npm install require-config


## running the tests

From project root:

    $ npm install
    $ npm test


## contributors

jden <jason@denizac.org>


## license

MIT. (c) 2013 Agile Diagnosis <hello@agilediagnosis.com>. See LICENSE.md
