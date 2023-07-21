const { log } = require("./modules");

const g = (a) => a + 1;
const f = (a) => a ** 2;

// log(f(g(1)));
// log(f(g()));

// []
//   .map(g)
//   .map(f)
//   .forEach((r) => log(r));

// Array.of()
//   .map(g)
//   .map(f)
//   .forEach((r) => log(r));

// Promise.resolve()
//   .then(g)
//   .then(f)
//   .then((r) => log(r));

// const setNum = (p) => {
//   num = [p];
// };
// const delaySetNum = (p) => {
//   setTimeout(() => setNum(p), 1000);
// };
// let num = [];
// log(num);
// delaySetNum(20);
// setTimeout(
//   () =>
//     num
//       .map(g)
//       .map(f)
//       .forEach((n) => log(n)),
//   1500
// );
// num
//   .map(g)
//   .map(f)
//   .forEach((n) => log(n));

const delay = (n, t) => new Promise((res) => setTimeout(() => res(n), t));
delay(1, 1000).then(g).then(f).then(log);
delay(2, 1500).then(g).then(f).then(log);
delay(3, 2000).then(g).then(f).then(log);
