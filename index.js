exports.newCache = function(){
  if(typeof cache == 'undefined') {
  global.cache = new Map();
  } else {
    throw new ReferenceError("cache has already been defined.", "index.js",3);
  }
}
exports.manageCache = function(action, key, value) {
  if (cache === undefined) {
    throw new Error("Missing cache. (Import and run newCache once and anywhere.)", "index.js", 5);
  }
  const data = require('./names.json');
  const getList = data.get;
  const updateList = data.update;
  const deleteList = data.delete;
  action = action.toLowerCase();
    if(getList.includes(action)) {
      if(cache.has(key)) {
          return cache.get(key);
      } else {
        throw new URIError("Invalid key.","index.js",12)
      }
    } else if (updateList.includes(action)) {
      cache.set(key, value);
      return;
    } else if (deleteList.includes(action)) {
      cache.delete(key);
      return;
    } else {
      throw new TypeError("Improper input. Err(Wrong input). [Cache-Info] Try using " + `"new", "update", "edit", "remove", or (more to come)."`, "index.js", 10);
      //return;
    }
}