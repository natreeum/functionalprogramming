const { pReduce1, go, log, takeAll, take } = require("./modules");
const L = require("./Lazy");

const add = (a, b) => {
  return a + b;
};

// go(
//   [1, 2, 3, 4, 5],
//   L.map((a) => Promise.resolve(a * a)),
//   L.filter((a) => Promise.resolve(a % 2)),
//   pReduce1(add),
//   log
// );

// latency
go(
  [1, 2, 3, 4, 5, 6, 7, 8, 9],
  L.map((a) => {
    log(a);
    return new Promise((resolve) => setTimeout(() => resolve(a * a), 1000));
  }),
  L.filter((a) => {
    log(a);
    return new Promise((resolve) => setTimeout(() => resolve(a % 2), 1000));
  }),
  // takeAll,
  take(2),
  log
);
