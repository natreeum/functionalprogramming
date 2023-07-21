const { log, curry, pipe, map, reduce } = require("./modules");
const L = require("./Lazy");

L.entries = function* (obj) {
  for (const k in obj) yield [k, obj[k]];
};

const queryStr = pipe(
  Object.entries,
  map(([k, v]) => `${k}=${v}`),
  reduce((a, b) => `${a}&${b}`)
);

const join = curry((seperator = ",", iter) => {
  if (typeof iter === "function") {
    iter = iter();
  }
  return reduce((a, b) => `${a}${seperator}${b}`, iter);
});

const LqueryStr = pipe(
  L.entries,
  L.map(([k, v]) => `${k}=${v}`),
  join()
);

const object = {
  limit: 10,
  offset: 10,
  type: "notice",
};

// log(queryStr(object));
log(LqueryStr(object));

// function* a() {
//   yield 10;
//   yield 20;
//   yield 30;
//   yield 40;
//   yield 50;
// }

// log(join("-", a())); // [Function (anonymous)]
