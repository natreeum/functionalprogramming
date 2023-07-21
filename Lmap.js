const { log } = require("./modules");
const L = require("./Lazy");

const it = L.map((a) => a + 10, [1, 2, 3]);

log([...it]);
// log([it.next().value]);
