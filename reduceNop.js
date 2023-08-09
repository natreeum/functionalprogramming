const { pReduce1, go, log, nop } = require("./modules");
const L = require("./Lazy");

const add = (a, b) => {
  return a + b;
};

go(
  [1, 2, 3, 4, 5],
  L.map((a) => Promise.resolve(a * a)),
  L.filter((a) => Promise.resolve(a % 2)),
  pReduce1(add),
  log
);
