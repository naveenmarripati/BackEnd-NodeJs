const os = require("os");
console.log("architecture", os.arch());
console.log("cpus", os.cpus());
console.log("free memory", os.freemem());
console.log("total memory", os.totalmem());
console.log("machine", os.machine());
console.log("version", os.version());