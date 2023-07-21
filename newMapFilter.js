const { log, take, curry, pipe } = require("./modules");
const L = require("./Lazy");

const takeAll = take(Infinity);

const map = curry(pipe(L.map, takeAll));
log(map((a) => a + 10, L.range(4)));

const filter = curry(pipe(L.filter, takeAll));
log(filter((a) => a % 2, L.range(4)));
