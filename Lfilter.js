const { log } = require("./modules");
const L = require("./Lazy");

const it = L.filter((a) => a % 2, [1, 2, 3, 4]);

log([...it]);
// log(it.next());
