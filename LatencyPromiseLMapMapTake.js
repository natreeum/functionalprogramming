const { pGo1, take, log } = require("./modules");
const L = require("./Lazy");

pGo1(
  [Promise.resolve(1), Promise.resolve(2), Promise.resolve(3)],
  // [2, 3, 4],
  // L.map((a) => a + 10),
  L.map((a) => Promise.resolve(a + 10)),
  take(2),
  log
);
