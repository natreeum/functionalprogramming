const log = console.log;

const curry =
  (f) =>
  (a, ..._) =>
    _.length ? f(a, ..._) : (..._) => f(a, ..._);

const go = (...args) => reduce((acc, func) => func(acc), args);

// const map = curry((func, iter) => {
//   let res = [];
//   for (const i of iter) {
//     res.push(func(i));
//   }
//   return res;
// });

const map = curry((f, iter) => {
  let res = [];
  iter = iter[Symbol.iterator]();
  let cur;
  while (!(cur = iter.next()).done) {
    const a = cur.value;
    res.push(f(a));
  }
  return res;
});

const filter = curry((func, iter) => {
  let res = [];
  for (const i of iter) {
    if (func(i)) res.push(i);
  }
  return res;
});

const reduce = curry((func, acc, iter) => {
  if (!iter) {
    iter = acc[Symbol.iterator]();
    acc = iter.next().value;
  }
  for (const i of iter) {
    acc = func(acc, i);
  }
  return acc;
});

const range = (l) => {
  let i = -1;
  let res = [];
  while (++i < l) {
    res.push(i);
  }
  return res;
};

const take = curry((l, iter) => {
  let res = [];
  for (const a of iter) {
    res.push(a);
    if (res.length == l) return res;
  }
  return res;
});

const takeAll = take(Infinity);

const pipe =
  (f, ...fs) =>
  (...arg) =>
    go(f(...arg), ...fs);

module.exports = {
  log,
  curry,
  go,
  map,
  filter,
  reduce,
  range,
  take,
  pipe,
  takeAll,
};
