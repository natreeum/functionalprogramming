const { pipe, curry } = require("./modules");
const L = {};

// filter
L.filter = curry(function* (f, iter) {
  for (const a of iter) if (f(a)) yield a;
});

// flatten
const isIterable = (a) => a && a[Symbol.iterator];
L.flatten = function* (iter) {
  for (const a of iter) {
    if (isIterable(a)) yield* a;
    else yield a;
  }
};

// deepFlat
L.deepFlat = function* f(iter) {
  for (const a of iter) {
    if (isIterable(a)) yield* f(a);
    else yield a;
  }
};

// map
L.map = curry(function* (f, iter) {
  for (const a of iter) yield f(a);
});

// Range
L.range = function* (l) {
  let i = -1;
  while (++i < l) {
    yield i;
  }
};

// Entries
L.entries = function* (obj) {
  for (const k in obj) yield [k, obj[k]];
};

// flatMap
L.flatMap = curry(pipe(L.map, L.flatten));

module.exports = L;
