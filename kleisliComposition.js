const { log, take, takeAll, pGo1 } = require("./modules");
const L = require("./Lazy.js");

pGo1(
  [1, 2, 3, 4, 5, 6],
  L.map((a) => Promise.resolve(a * a)),
  L.filter((a) => {
    return a % 2;
  }),
  L.map((a) => {
    return a * a;
  }),
  take(2),
  log
);
