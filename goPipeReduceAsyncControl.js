const { log, pGo1 } = require("./modules");

pGo1(
  Promise.resolve(1),
  (a) => a + 10,
  // (a) => Promise.resolve(a + 100),
  (a) => Promise.reject("ERROR"),
  (a) => a + 1000,
  (a) => a + 10000,
  log
).catch((a) => log(a));
