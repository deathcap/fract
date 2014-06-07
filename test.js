'use strict';

var test = require('tape');
var fract = require('./');

test('fract', function(t) {
  // exact
  t.equal(fract(3.5), 0.5);
  t.equal(fract(-3.5), 0.5);

  t.equal(fract(1.25), 0.25);
  t.equal(fract(-1.25), 0.25);

  t.equal(fract(0.0), 0.0);
  t.equal(fract(3.0), 0.0);
  t.equal(fract(-4.0), 0.0);

  // nonnegative only (floor(-3.1) === -4)
  [3.1415926, 1/3, 1/4, 13/5, 1/6, 8/7, 0].forEach(function(f) {
    t.equal(Math.floor(f) + fract(f), f);
  });

  // truncate to integer + fractional part
  [3.1415926, 1/3, 1/4, 13/5, 1/6, 8/7, 0].forEach(function(f) {
    t.equal((f|0) + fract(f), f);

    // fract() always positive, so for negatives have to subtract
    var g = -f;
    t.equal((g|0) - fract(g), g);
  });

  // invalid
  t.equal(isNaN(fract(Infinity)), true);
  t.equal(isNaN(fract(-Infinity)), true);
  t.equal(isNaN(fract(NaN)), true);
  t.equal(isNaN(fract("foo")), true);
  t.equal(isNaN(fract(undefined)), true);
  t.equal(fract(null), 0);
  t.equal(fract(false), 0);
  
  t.end();
});
