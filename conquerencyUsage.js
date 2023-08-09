const { log, go, pReduce1 } = require("./modules");
const L = require("./Lazy");
const C = require("./conquerency");

const add = (a, b) => a + b;

const delay1000 = (a) =>
  new Promise((resolve) => {
    setTimeout(() => resolve(a), 1000);
  });

console.time("");
go(
  [1, 2, 3, 4, 5, 6, 7, 8, 9],
  L.map((a) => delay1000(a * a)),
  L.filter((a) => delay1000(a % 2)),
  L.map((a) => delay1000(a * a)),
  // C.reduce(add),
  C.take(2),
  log,
  (_) => console.timeEnd("")
);
