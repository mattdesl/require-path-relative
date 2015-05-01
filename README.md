# reuqire-path-relative

[![stable](http://badges.github.io/stability-badges/dist/stable.svg)](http://github.com/badges/stability-badges)

Like `path.relative(from, to)`, but normalizes it to look good in a Node `require()` statement. Also allows for an optional file entry-point.

For example:

```js
relative('/modules/utils', '/modules')
=> '../'

relative('/modules/utils', '/modules', './index.js')
=> '../test.js'

relative('/modules', '/modules/utils', 'test.js')
=> './utils/test.js'

relative('/modules', '/modules')
=> './'
```

## Usage

[![NPM](https://nodei.co/npm/reuqire-path-relative.png)](https://www.npmjs.com/package/reuqire-path-relative)

#### `filepath = relative(from, to, [entry])`

Resolves the `from` and `to` directories, and optionally appends the `entry` file to the end of the path. 

This is handy for generating pretty-looking Node source.

## License

MIT, see [LICENSE.md](http://github.com/mattdesl/reuqire-path-relative/blob/master/LICENSE.md) for details.
