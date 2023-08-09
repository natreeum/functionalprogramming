const log = console.log;
const nop = Symbol("nop");

const curry =
  (f) =>
  (a, ..._) =>
    _.length ? f(a, ..._) : (..._) => f(a, ..._);

const go = (...args) => pReduce1((acc, func) => func(acc), args);

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
  iter = iter[Symbol.iterator]();
  return (function recur() {
    let cur;
    while (!(cur = iter.next()).done) {
      const a = cur.value;
      if (a instanceof Promise) {
        return a
          .then((a) => ((res.push(a), res).length == l ? res : recur()))
          .catch((e) => (e == nop ? recur() : Promise.reject(e)));
      }
      res.push(a);
      if (res.length == l) return res;
    }
    return res;
  })();
});

const takeAll = take(Infinity);

const pipe =
  (f, ...fs) =>
  (...arg) =>
    go(f(...arg), ...fs);

const find = curry((f, iter) => go(iter, filter(f), take(1), ([a]) => a));

const go1 = (a, f) => (a instanceof Promise ? a.then(f) : f(a));

const pReduceF = (acc, a, f) =>
  a instanceof Promise
    ? a.then(
        (a) => f(acc, a),
        (e) => (e == nop ? acc : Promise.reject(e))
      )
    : f(acc, a);

const head = (iter) => go1(take(1, iter), ([h]) => h);

const pReduce1 = curry((func, acc, iter) => {
  if (!iter) return pReduce1(func, head((iter = acc[Symbol.iterator]())), iter);

  iter = iter[Symbol.iterator]();

  return go1(acc, function recur(acc) {
    let cur;
    while (!(cur = iter.next()).done) {
      acc = pReduceF(acc, cur.value, func);
      if (acc instanceof Promise) return acc.then(recur);
    }
    return acc;
  });
});

const pGo1 = (...args) => pReduce1((acc, func) => func(acc), args);

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
  find,
  pGo1,
  go1,
  nop,
  pReduce1,
};
