const { log, go, map, filter, range, take } = require("./modules");
const L = require("./Lazy");

console.time("즉시 평가");
go(
  range(100000),
  map((n) => n + 10),
  filter((n) => n % 2),
  take(2),
  log
);
console.timeEnd("즉시 평가");

console.time("지연 평가");
go(
  L.range(100000),
  L.map((n) => n + 10),
  L.filter((n) => n % 2),
  take(2),
  log
);
console.timeEnd("지연 평가");
