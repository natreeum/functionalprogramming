const { pReduce1 } = require("./modules");
const C = {};

C.reduce = (f, acc, iter) =>
  iter ? pReduce1(f, acc, [...iter]) : pReduce1(f, [...acc]);

module.exports = C;
