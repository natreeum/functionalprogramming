const { filter, log, take, curry, go } = require("./modules");
const L = require("./Lazy");

const users = [
  { age: 32 },
  { age: 31 },
  { age: 37 },
  { age: 28 },
  { age: 25 },
  { age: 32 },
  { age: 31 },
  { age: 37 },
];

const find = curry((f, iter) => go(iter, filter(f), take(1), ([a]) => a));

log(find((e) => e.age < 30, users));

go(
  users,
  L.map((e) => e.age),
  find((e) => e < 30),
  log
);
