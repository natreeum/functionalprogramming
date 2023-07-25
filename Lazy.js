const { pipe, curry, go1, nop } = require("./modules");
const L = {};

// filter
L.filter = curry(function* (f, iter) {
  for (const a of iter) {
    const b = go1(a, f);
    if (b instanceof Promise)
      yield b.then((b) => (b ? a : Promise.reject(nop)));
    else if (b) yield a;
  }
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
  for (const a of iter) yield go1(a, f);
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
