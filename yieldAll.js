const arr = [1, 2, 3, 4];

const yieldAll1 = function* (iter) {
  yield* iter;
};

const yieldAll2 = function* (iter) {
  for (a of iter) yield a;
};

const log = console.log;
const it1 = yieldAll1(arr);
const it2 = yieldAll2(arr);

log([...it1]);
log([...it2]);
