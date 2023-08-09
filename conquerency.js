const { pReduce1, curry, take, catchNoop } = require("./modules");
const C = {};

// C.reduce = curry((f, acc, iter) => {
//   return iter ? pReduce1(f, acc, [...iter]) : pReduce1(f, [...acc]);
// });

C.reduce = curry((f, acc, iter) => {
  const iter2 = catchNoop(iter ? [...iter] : [...acc]);
  return iter ? pReduce1(f, acc, iter2) : pReduce1(f, iter2);
});

C.take = curry((l, iter) => take(l, catchNoop([...iter])));

module.exports = C;
