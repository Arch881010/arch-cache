var fs = require('node:fs'); //ignore
JSON.parse(fs.readFileSync("./node_modules/arch881010-cache/storageFiles/cache.json","UTF-8"));
fs.writeFileSync("./node_modules/arch881010-cache/storageFiles/cache.json",JSON.stringify(data));

