/*
JSON.parse(fs.readFileSync("./node_modules/arch881010-cache/storageFiles/cache.json","UTF-8"));
fs.writeFileSync("./node_modules/arch881010-cache/storageFiles/cache.json",JSON.stringify(data));
*/
exports.new = function(password) {
  var fs = require('node:fs');
  var cache = fs.readFileSync("./node_modules/arch881010-cache/storageFiles/cache.json","UTF-8");
  password = password ?? "";
  obj = {
    "password":password
  }
  if (cache == '{}' || cache == "") {
    fs.writeFileSync("./node_modules/arch881010-cache/storageFiles/cache.json",JSON.stringify(obj));
  } else {
  }
}


exports.newCache = function(password) {
  var fs = require('node:fs');
  var cache = fs.readFileSync("./node_modules/arch881010-cache/storageFiles/cache.json","UTF-8");
  password = password ?? "";
  obj = {
    "password":password
  }
  if (cache == '{}' || cache == "") {
    fs.writeFileSync("./node_modules/arch881010-cache/storageFiles/cache.json",JSON.stringify(obj));
  } else {
  }
}


//Creates/adds a new item.
exports.addCache = function(key, value) {
  var fs = require('node:fs');
  var data = JSON.parse(fs.readFileSync("./node_modules/arch881010-cache/storageFiles/cache.json","UTF-8"));
  key = key ?? null;a
  value = value ?? null;
  if (key === null && value === null) {
    throw new ReferenceError("You did not supply a key or a value.");
  } else if (key === key && value == null) {
    throw new ReferenceError("You did not supply a value to set it to. Key provided: " + key);
  } else if (key === null && value == value) {
    throw new ReferenceError("Key is undefined. Was gave no key and received a value as " + value);
  } else {
    data[`${key}`] = value;
    fs.writeFileSync("./node_modules/arch881010-cache/storageFiles/cache.json",JSON.stringify(data));
  }
};



exports.add = function(key, value) {
  var fs = require('node:fs');
  var data = JSON.parse(fs.readFileSync("./node_modules/arch881010-cache/storageFiles/cache.json","UTF-8"));
  key = key ?? null;
  value = value ?? null;
  if (key === null && value === null) {
    throw new ReferenceError("You did not supply a key or a value.");
  } else if (key === key && value == null) {
    throw new ReferenceError("You did not supply a value to set it to. Key provided: " + key);
  } else if (key === null && value == value) {
    throw new ReferenceError("Key is undefined. Was gave no key and received a value as " + value);
  } else {
    data[`${key}`] = value;
    fs.writeFileSync("./node_modules/arch881010-cache/storageFiles/cache.json",JSON.stringify(data));
  }
};


//Updates a value for an key.
exports.updateCache = function(key, value) {
  var fs = require('node:fs');
  var data = JSON.parse(fs.readFileSync("./node_modules/arch881010-cache/storageFiles/cache.json","UTF-8"));
  key = key ?? null;
  value = value ?? null;
  if (key === null && value === null) {
    throw new ReferenceError("You did not supply a key or a value.");
  } else if (key === key && value == null) {
    throw new ReferenceError("You did not supply a value to set it to. Key provided: " + key);
  } else if (key === null && value == value) {
    throw new ReferenceError("Key is undefined. Was gave no key and received a value as " + value);
  } else {
    data[`${key}`] = value;
    fs.writeFileSync("./node_modules/arch881010-cache/storageFiles/cache.json",JSON.stringify(data));
  }
};
exports.update = function(key, value) {
  var fs = require('node:fs');
  var data = JSON.parse(fs.readFileSync("./node_modules/arch881010-cache/storageFiles/cache.json","UTF-8"));
  key = key ?? null;
  value = value ?? null;
  if (key === null && value === null) {
    throw new ReferenceError("You did not supply a key or a value.");
  } else if (key === key && value == null) {
    throw new ReferenceError("You did not supply a value to set it to. Key provided: " + key);
  } else if (key === null && value == value) {
    throw new ReferenceError("Key is undefined. Was gave no key and received a value as " + value);
  } else {
    data[`${key}`] = value;
    fs.writeFileSync("./node_modules/arch881010-cache/storageFiles/cache.json",JSON.stringify(data));
  }
}


//Deletes a cached item.
exports.deleteCache = function(key) {
  var fs = require('node:fs');
  var data = JSON.parse(fs.readFileSync("./node_modules/arch881010-cache/storageFiles/cache.json","UTF-8"))
  key = key ?? null;
  if (key === null || typeof data[`${key}`] == 'undefined' ) {
    throw new ReferenceError("There is no key as \"" + key + "\" in the cache.");
  } else {
    delete data[`${key}`];
    fs.writeFileSync("./node_modules/arch881010-cache/storageFiles/cache.json",JSON.stringify(data));
  }
};
exports.delete = function(key) {
  var fs = require('node:fs');
  var data = JSON.parse(fs.readFileSync("./node_modules/arch881010-cache/storageFiles/cache.json","UTF-8"))
  key = key ?? null;
  if (key === null || typeof data[`${key}`] == 'undefined' ) {
    throw new ReferenceError("There is no key as \"" + key + "\" in the cache.");
  } else {
    delete data[`${key}`];
    fs.writeFileSync("./node_modules/arch881010-cache/storageFiles/cache.json",JSON.stringify(data));
  }
};


exports.getCache = function(key) {
  var fs = require('node:fs');
  var data = JSON.parse(fs.readFileSync("./node_modules/arch881010-cache/storageFiles/cache.json","UTF-8"));
  if(typeof data[key] == 'undefined' ) {
    throw new ReferenceError(`There is no key as ${key} in the Cache.`);
  } else {
    return data[key];
  }
};

exports.get = function(key) {
  var fs = require('node:fs');
  var data = JSON.parse(fs.readFileSync("./node_modules/arch881010-cache/storageFiles/cache.json","UTF-8"));
  if(typeof data[`${key}`] == 'undefined' ) {
    throw new ReferenceError(`There is no key as ${key} in the Cache.`);
  } else {
    return data[`${key}`];
  }
};

exports.clear = function(password){
  password = password ?? "";
  var fs = require('node:fs');
  var cachePassword = JSON.parse(fs.readFileSync("./node_modules/arch881010-cache/storageFiles/cache.json","UTF-8")).password ?? "";
  if (password != cachePassword) {
    console.log("Improper password.");
    return;
  };
  fs.writeFileSync("./node_modules/arch881010-cache/storageFiles/cache.json", "{}");
}

exports.clearCache = function(password){
  password = password ?? "";
  var fs = require('node:fs');
  var cachePassword = JSON.parse(fs.readFileSync("./node_modules/arch881010-cache/storageFiles/cache.json","UTF-8")).password ?? "";
  if (password != cachePassword) {
    console.log("Improper password.");
    return;
  };
  fs.writeFileSync("./node_modules/arch881010-cache/storageFiles/cache.json", "{}");
}