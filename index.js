var path = require('path')

module.exports = function (from, to, file) {
  var loc = path.relative(from, to)

  if (loc.lastIndexOf('..') === loc.length - 2) {
    loc += '/'
  }

  if (path.resolve(from) === path.resolve(to)) {
    loc = './'
  }

  if (file) {
    loc = path.join(loc, file)
    if (/^[^\.\\\/]/.test(loc))
      loc = './' + loc
  }

  return loc
}
