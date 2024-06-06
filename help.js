var fs = require('node:fs'); //ignore
JSON.parse(fs.readFileSync("./node_modules/cache/arch_cache.json","UTF-8"));
fs.writeFileSync("./node_modules/cache/arch_cache.json",JSON.stringify(data));

