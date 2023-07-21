const { log, curry, pipe, map, takeAll, range } = require("./modules");
const L = require("./Lazy");

const arr = [
  [1, 2],
  [3, 4],
  [5, 6, 7],
];

const it = L.flatMap(
  map((a) => a * a),
  arr
);

// log([...it]);

const flatten = pipe(L.flatten, takeAll);
const flatMap = curry(pipe(L.map, flatten));
// log(
//   flatMap(
//     map((a) => a * a),
//     arr
//   )
// );

log(flatMap(L.range, [1, 2, 3]));
const iterator = L.flatMap(L.range, [1, 2, 3]);
log([...iterator]);
const it2 = L.flatMap(
  L.range,
  map((a) => a + 1, [1, 2, 3])
);
log(it2.next());
log(it2.next());
log(it2.next());
log(it2.next());
