const { log, takeAll, pipe } = require("./modules");
const L = require("./Lazy");

const it = L.flatten([[1, 2], 3, 4, [5, 6], [7, 8, 9]]);

// const arr = [[1, 2], 3, 4, [5, 6], [7, 8, 9]];
// log();

const flatten = pipe(L.flatten, takeAll);
// log(flatten([[1, 2], 3, 4, [5, 6], [7, 8, 9]]));
log([...L.deepFlat([[[1]], 2, [3, [4, 5]]])]);
