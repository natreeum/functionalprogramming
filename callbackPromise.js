const { log } = require("./modules");

// function add10(a, callback) {
//   setTimeout(() => callback(a + 10), 100);
// }

// add10(5, (res) => {
//   add10(res, (res) => {
//     add10(res, (res) => {
//       add10(res, (res) => {
//         log(res);
//       });
//     });
//   });
// });

// function add20(a) {
//   return new Promise((res) => setTimeout(() => res(a + 20), 100));
// }

// add20(5).then(add20).then(add20).then(add20).then(log);

// const go1 = (a, f) => f(a);
const add5 = (a) => a + 5;

// log(go1(10, add5));

// log(go1(Promise.resolve(10), add5));

const delay100 = (a) =>
  new Promise((resolve) => setTimeout(() => resolve(a), 100));

const go2 = (a, f) => (a instanceof Promise ? a.then(f) : f(a));

// const r1 = go2(10, add5);
// log(r1);

// const r2 = go2(delay100(10), add5);
// r2.then(log);

// go2(go2(10, add5), log);
// go2(go2(delay100(10), add5), log);

const num1 = 10;
go2(go2(num1, add5), log);

const num2 = delay100(10);
go2(go2(num2, add5), log);
