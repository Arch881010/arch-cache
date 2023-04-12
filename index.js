exports.Cache = function() {
  if (typeof cache == 'undefined') {
    global.cache = new Map();
  } else {
    throw new ReferenceError("Cache(); has already been ran before.", "index.js", 3);
  }
}


exports.newCache = function() {
  if (typeof cache == 'undefined') {
    global.cache = new Map();
  } else {
    throw new ReferenceError("newCache(); has already been ran before.", "index.js", 3);
  }
}


//Creates/adds a new item.
exports.addCache = function(key, value) {
  if (typeof cache == 'undefined') {
    throw new Error("Missing cache. (Require and run \"new Cache();\" once and anywhere.)", "index.js", 5);
  }
  key = key ?? null;
  value = value ?? null;
  if (key === null && value === null) {
    throw new ReferenceError("You did not supply a key or a value.");
  } else if (key === key && value == null) {
    throw new ReferenceError("You did not supply a value to set it to. Key provided: " + key);
  } else if (key === null && value == value) {
    throw new ReferenceError("Key is undefined. Was gave no key and received a value as " + value);
  } else {
    cache.set(key, value);
  }
};



exports.add = function(key, value) {
  if (typeof cache == 'undefined') {
    throw new Error("Missing cache. (Rqure and run \"new Cache();\" once and anywhere.)", "index.js", 5);
  }
  key = key ?? null;
  value = value ?? null;
  if (key === null && value === null) {
    throw new ReferenceError("You did not supply a key or a value.");
  } else if (key === key && value == null) {
    throw new ReferenceError("You did not supply a value to set it to. Key provided: " + key);
  } else if (key === null && value == value) {
    throw new ReferenceError("Key is undefined. Was gave no key and received a value as " + value);
  } else {
    cache.set(key, value);
  }
};


//Updates a value for an object lazily.
exports.updateCache = function(key, value) {

  addCache(key, value);
};
exports.update = function(key, value) {
  addCache(key, value);
}


//Deletes a cached item.
exports.deleteCache = function(key) {
  if (typeof cache == 'undefined') {
    throw new Error("Missing cache. (Import and run \"new Cache();\" once and anywhere.)", "index.js", 5);
  }
  key = key ?? null;
  if (key === null) {
    throw new ReferenceError("There is no key as \"" + key + "\" in the cache.")
  } else {
    cache.delete(key);
  }
};
exports.delete = function(key) {
  if (typeof cache == 'undefined') {
    throw new Error("Missing cache. (Import and run \"new Cache();\" once and anywhere.)", "index.js", 5);
  }
  key = key ?? null;
  if (key === null) {
    throw new ReferenceError("There is no key as \"" + key + "\" in the cache.");
  } else {
    cache.delete(key);
  }
};


//Global manger
exports.manageCache = function(action, key, value) {
  if (typeof cache == 'undefined') {
    throw new Error("Missing cache. (Import and run newCache(); once and anywhere.)", "index.js", 5);
  };
  const data = require('./names.json');
  const getList = data.get;
  const updateList = data.update;
  const deleteList = data.delete;
  action = action.toLowerCase();
  if (getList.includes(action)) {
    if (cache.has(key)) {
      return cache.get(key);
    } else {
      throw new URIError("Invalid key.", "index.js", 12)
    }
  } else if (updateList.includes(action)) {
    cache.set(key, value);
    return;
  } else if (deleteList.includes(action)) {
    cache.delete(key);
    return;
  } else {
    throw new TypeError("Improper input. Err(Wrong input). [Cache-Info] Try using " + `"new", "update", "edit", "remove", or (more to come)."`, "index.js", 10);
  };
};
exports.manage = function(action, key, value) {
  if (typeof cache == 'undefined') {
    throw new Error("Missing cache. (Import and run newCache once and anywhere.)", "index.js", 5);
  };
  const data = require('./names.json');
  const getList = data.get;
  const updateList = data.update;
  const deleteList = data.delete;
  action = action.toLowerCase();
  if (getList.includes(action)) {
    if (cache.has(key)) {
      return cache.get(key);
    } else {
      throw new URIError("Invalid key.", "index.js", 12)
    }
  } else if (updateList.includes(action)) {
    cache.set(key, value);
    return;
  } else if (deleteList.includes(action)) {
    cache.delete(key);
    return;
  } else {
    throw new TypeError("Improper input. Err(Wrong input). [Cache-Info] Try using " + `"new", "update", "edit", "remove", or (more to come)."`, "index.js", 10);
  };
};

exports.getCache = function(key) {
  if (typeof cache == 'undefined') {
    throw new ReferenceError("Cache is undefined, require/import newCache(); and run it.")
  }
  if (typeof key == 'undefined') {
    throw new ReferenceError("You did not send a key to be fetched.")
  } else if (!cache.has(key)) {
    return undefined;
  } else {
    return cache.get(key);
  }
};

exports.get = function(key) {
  if (typeof cache == 'undefined') {
    throw new ReferenceError("Cache is undefined, require/import newCache(); and run it.")
  };
  if (typeof key == 'undefined') {
    throw new ReferenceError("You did not send a key to be fetch.")
  } else if (!cache.has(key)) {
    return undefined;
  } else {
    return cache.get(key);
  }
};

