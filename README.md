# fract

Get the fractional part of a floating point value

Usage:

    var fract = require('fract');

    fract(3.5) === 0.5
    fract(-3.5) === 0.5

The fractional part returned is always positive, and is equal
to the original value added or subtracted from the truncated
integer value (x|0). More examples in `test.js`.

## License

MIT

