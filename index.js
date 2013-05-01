var diff = require('tracery/diff')
var _ = require('funderscore')

module.exports = function requireConfig(config, Interface) {
  var objMissing = typeof config !== 'object' || config === null
  var errors = _.reduce(
    diff(Interface, config || {}),
    function (errors, error, key) {
      return errors.concat(key + ': ' + error.expected)
    }, [])

  if (errors.length) {
    var message = objMissing ? 'Missing required config object'
                             : 'Missing required config parameter' +
                               (errors.length !== 1 ? 's' : '')
    throw new Error(message + ':\n\t' + errors.join('\n\t'))
  }
}
