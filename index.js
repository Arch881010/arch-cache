//Global notice:
/**
 * @version 1.0.5
 * @author Arch
 */
/**
 * @param {string | boolean | number} [detailed = ""] - To get full details or not. >1 | 0, true | false, "yes" | "", "yes" | "no". Not case sensitive.
 * @returns {console.log} Logs the details into the console, so it doesn't return anything.
 * @example Example 1
 * const {about} = require('arch881010-cache');
 * about(false); // OR about(true);
 * @example Example 2
 * const cache = require('arch881010-cache');
 * cache.about(false); // OR about(true);
 * @since 1.0.3
 * @readonly
 */
exports.about = function(detailed) {
  var fs = require('node:fs');
  detailed = detailed ?? "";
  try {
  detailed = detailed.trim();
  } catch(err){}
  var type = String(typeof detailed);
  var typesend;
  if (type == "string") {
    if (detailed.toLowerCase() == "no" || detailed == "") {
      typesend = false;
    } else {
      typesend = true;
    }
  } else if (type == "boolean") {
    typesend = detailed;
  } else if (type == "number") {
    if (!type) {
      typesend = false;
    } else {
      typesend = true;
    }
  }
  var data = JSON.parse(fs.readFileSync('./node_modules/arch881010-cache/package.json', "utf-8"));
  if (typesend) {
    console.log(`---------------\nName: ${data.name}\nDescription: ${data.description}\nVersion: ${data.version}\nAuthor: ${data.author}\n---------------`)
  } else {
    console.log(`---------------\nVersion: ${data.version}\nAuthor: ${data.author}\n---------------`);
  }
  return;
}
/**
  * This module requires {@link module node:fs}.
  * 
  *  Password is allowed to prevent destructive clear() by external eval().
  * You cannot use const {new} = require('arch881010-cache') as new is a saved word.
 * @param {string} [password=""] - Your password to "lock" (optional)
 * @example Example
 * const cache = require('arch881010-cache');
 * cache.new(password)
 * @returns It is always successful, thus, it returns nothing.
*/
exports.new = function(password) {
  password = password ?? "";
  try {
  password = password.trim();
  } catch (err) {}
  var fs = require('node:fs');
  var cache;
  try {
    cache = fs.readFileSync("./node_modules/arch881010-files/cache.json", "UTF-8");
  } catch(err) {
    cache = "{}"
  }
  password = password ?? "";
  obj = {
    "cache_lock_password_NOOVERWRITE": password
  }
  if (cache == '{}' || cache == "") {
    var {outputFileSync} = require('fs-extra');
    outputFileSync("./node_modules/arch881010-files/cache.json", JSON.stringify(obj, null, 2));
  } else {
    console.log("Cache already exists. If you want to clear it, use clear([password]). [password] is optional. (Read the documentation for more information.)");
  }
}

/**
 * @deprecated 1.0.5
  *@description This module requires {@link module node:fs}.
  * 
  *  Password is allowed to prevent destructive clear() by external eval().
 * @param {string} [password=""] - Your password to "lock" clearing cache (optional)
 * @example Example 1
 * const {newCache} = require('arch881010-cache');
 * newCache(password);
 * @example Example 2
 * const cache = require('arch881010-cache');
 * cache.newCache(password);
 * @returns Always successful (if installed correctly), which results in nothing. 
*/
exports.newCache = function(password) {
  throw new ReferenceError("newCache() is deprecated, use new()");
}
//Creates/adds a new item.
/**
 * @deprecated 1.0.5
 * @description This module requires {@link module node:fs}.
 * @param {string} key - The cache key you want to save it as.
 * @param {string} value - The value for the cache key you saved it as (key).
 * @example Example 1
 * const {addCache} = require('arch881010-cache');
 * addCache("name","value");
 * @example Example 2
 * const cache = require('arch881010-cache');
 * cache.addCache("key","value");
 * @returns If its successful, it doesn't return anything. Otherwise, it returns a reference error.
 * @since 1.0.0
*/
exports.addCache = function(key, value) {
  throw new ReferenceError('addCache() is depreceated, use add() instead.');
};

/**
  * This module requires {@link module node:fs}.
 * @param {string} key - The cache key you want to save it as.
 * @param {string} value - The value for the cache key you saved it as (key).
 * @example Example 1
 * const {add} = require('arch881010-cache');
 * add("name","value");
 * @example Example 2
 * const cache = require('arch881010-cache');
 * cache.add("key","value");
 * @returns If its successful, it doesn't return anything. Otherwise, it returns a reference error.
 * @since 1.0.0
*/
exports.add = function(key, value) {
  key = key ?? "";
  value = value ?? "";
  try {
  key = key.trim();
  } catch (err) {}
  try {
  value = value.trim();
  } catch (err) {}
  var fs = require('node:fs');
  var data = JSON.parse(fs.readFileSync("./node_modules/arch881010-files/cache.json", "UTF-8"));
  key = key ?? null;
  value = value ?? null;
  if (!key && !value) {
    throw new ReferenceError("You did not supply a key or a value.");
  } else if (key === key && !value) {
    throw new ReferenceError("You did not supply a value to set it to. Key provided: " + key);
  } else if (!value && value == value) {
    throw new ReferenceError("Key is undefined. Was gave no key and received a value as " + value);
  } else {
    try {
      data[`${key}`] = JSON.parse(value);
    } catch (e) {
      data[`${key}`] = value;
    }
    fs.writeFileSync("./node_modules/arch881010-files/cache.json", JSON.stringify(data));
  }
};

/**
 * @deprecated 1.0.5
 * @description This module requires {@link module node:fs}.
 * @param {string} key - They key's name your changing.
 * @param {string} value - The value for the cache key you saved it as (key).
 * @example Example 1
 * const {updateCache} = require('arch881010-cache');
 * updateCache("name","value");
 * @example Example 2
 * const cache = require('arch881010-cache');
 * cache.updateCache("key","value");
 * @returns If its successful, it doesn't return anything. Otherwise, it sets a new key as that value.
 * @since 1.0.0
*/
//Updates a value for an key.
exports.updateCache = function(key, value) {
 throw new ReferenceError("updateCache() is depreceated, use update() instead.")
};

/**
  * This module requires {@link module node:fs}.
 * @param {string} key - They key's name your changing.
 * @param {string} value - The value for the cache key you saved it as (key).
 * @example Example 1
 * const {update} = require('arch881010-cache');
 * update("name","value");
 * @example Example 2
 * const cache = require('arch881010-cache');
 * cache.update("key","value");
 * @returns If its successful, it doesn't return anything. Otherwise, it creates a new key and saves it as that value.
 * @since 1.0.0
*/

exports.update = function(key, value) {
  var fs = require('node:fs');
  var data = JSON.parse(fs.readFileSync("./node_modules/arch881010-files/cache.json", "UTF-8"));
  key = key ?? null;
  value = value ?? null;
  if(key) {
    try {
    key = key.trim();
    } catch (err){}
  }
  if(value) {
    try {
    value = value.trim();
    } catch (err) {}
  }
  if (key === null && value === null) {
    throw new ReferenceError("You did not supply a key or a value.");
  } else if (key === key && value == null) {
    throw new ReferenceError("You did not supply a value to set it to. Key provided: " + key);
  } else if (key === null && value == value) {
    throw new ReferenceError("Key is undefined. Was gave no key and received a value as " + value);
  } else {
    try {
      data[`${key}`] = JSON.parse(value);
    } catch (e) {
      data[`${key}`] = value;
    }
    fs.writeFileSync("./node_modules/arch881010-files/cache.json", JSON.stringify(data));
  }
}


//Deletes a cached item.
/**
 * @deprecated 1.0.5
  * This module requires {@link module node:fs}. 
  * 
  * This does not require the password.
 * @param {string} key - They key your deleting.
 * @example Example 1
 * const {deleteFromCache} = require('arch881010-cache');
 * deleteFromCache("name","value");
 * @example Example 2
 * const cache = require('arch881010-cache');
 * cache.deleteFromCache("key","value");
 * @returns If its successful, it doesn't return anything. Otherwise, it returns a reference error.
 * @since 1.0.0
*/
exports.deleteFromCache = function(key) {
  throw new ReferenceError("deleteFromCache() is depreceated, use delete() instead.");
};

/**
  * This module requires {@link module node:fs}.
  * 
  * This does not require the password.
 * @param {string} key - They key your deleting.
 * @example Example 
 * const cache = require('arch881010-cache');
 * cache.delete("key","value");
 * @returns If its successful, it doesn't return anything. Otherwise, it returns a reference error.
 * @since 1.0.0
*/
exports.delete = function(key) {
  key = key ?? "";
  try {
  key = key.trim();
  } catch (err){}
  var fs = require('node:fs');
  var data = JSON.parse(fs.readFileSync("./node_modules/arch881010-files/cache.json", "UTF-8"))
  if (!key || typeof data[`${key}`] == 'undefined') {
    throw new ReferenceError("There is no key as \"" + key + "\" in the cache.");
  } else {
    delete data[`${key}`];
    fs.writeFileSync("./node_modules/arch881010-files/cache.json", JSON.stringify(data));
  }
};

/**
  * This module requires {@link module node:fs}.
  * 
  * This does not require the password.
 * @param {string} key - They key your deleting.
 * @example Example 
 * const cache = require('arch881010-cache');
 * cache.remove("key");
 * @returns If its successful, it doesn't return anything. Otherwise, it returns a reference error.
 * @since 1.0.5
*/
exports.remove = function(key) {
  key = key ?? "";
  try {
  key = key.trim();
  } catch (err){}
  var fs = require('node:fs');
  var data = JSON.parse(fs.readFileSync("./node_modules/arch881010-files/cache.json", "UTF-8"))
  if (!key || typeof data[`${key}`] == 'undefined') {
    throw new ReferenceError("There is no key as \"" + key + "\" in the cache.");
  } else {
    delete data[`${key}`];
    fs.writeFileSync("./node_modules/arch881010-files/cache.json", JSON.stringify(data));
  }
};

//Gets cached item. 
/**
 * @deprecated 1.0.5
  * @description This module requires {@link module node:fs}. 
  * 
  * This does not require the password.
 * @param {string} key - They key your retrieving from the cache.
 * @example Example 1
 * const {getFromCache} = require('arch881010-cache');
 * var result = getFromCache("name","value");
 * @example Example 2
 * const cache = require('arch881010-cache');
 * var result = cache.getFromCache("key","value");
 * @returns {string} If its successful, it will return your requested value. Otherwise, it will return an empty string and logs a notice.
 * @since 1.0.0
*/
exports.getFromCache = function(key) {
  throw new ReferenceError('getFromCache is deprecated. Use get(); instead.');
};

/**
  * This module requires {@link module node:fs}. 
  * 
  * This does not require the password.
 * @param {string} key - They key your retrieving from the cache.
 * @example Example 1
 * const {get} = require('arch881010-cache');
 * var result = get("name","value");
 * @example Example 2
 * const cache = require('arch881010-cache');
 * var result = cache.get("key","value");
 * @returns {string} If its successful, it returns the value. Otherwise, it returns a reference error.
 * @since 1.0.0
*/
exports.get = function(key) {
  key = key ?? "";
  try {
  key = key.trim();
  } catch (err) {}
  var fs = require('node:fs');
  var data = JSON.parse(fs.readFileSync("./node_modules/arch881010-files/cache.json", "UTF-8"));
  if (typeof data[`${key}`] == 'undefined') {
    throw new ReferenceError(`There is no key as ${key} in the Cache.`);
  } else {
    return data[`${key}`];
  }
};

//Clears cache with designated password
/**
  * This module requires {@link module node:fs}.
  * 
  * Allows the user to easily clear the cache. (Instead of navigating to "./node_modules/arch881010-files/cache.json")
 * @param {string} [password=""] - Your password to clear the cache.
 * @example Example 1
 * const {clear} = require('arch881010-cache');
 * clear(password);
 * @example Example 2
 * const cache = require('arch881010-cache');
 * cache.clear(password);
 * @returns If its successful, it doesn't return anything. Otherwise, it logs an error for being the wrong password.
 * @since 1.0.0
*/
exports.clear = function(password) {
  password = password ?? "";
  try {
  password = password.trim();
  } catch(err){}
  var fs = require('node:fs');
  var cachePassword = JSON.parse(fs.readFileSync("./node_modules/arch881010-files/cache.json", "UTF-8")).cache_lock_password_NOOVERWRITE ?? "";
  if (password != cachePassword) {
    console.log("Improper password.");
    return;
  };
  fs.writeFileSync("./node_modules/arch881010-files/cache.json", "{}");
  console.log("Cache cleared.");
}

/**
 * @deprecated 1.0.5
  * @description This module requires {@link module node:fs}.
  * 
  *  Allows the user to easily clear the cache. (Instead of navigating to "./node_modules/arch881010-files/cache.json")
 * @param {string} [password=""] - Your password to clear the cache.
 * @example Example 1
 * const {clearCache} = require('arch881010-cache');
 * clearCache(password);
 * @example Example 2
 * const cache = require('arch881010-cache');
 * cache.clearCache(password);
 * @returns If its successful, it doesn't return anything. Otherwise, it logs an error for being the wrong password.
 * @since 1.0.0
*/
exports.clearCache = function(password) {
  throw new Error("clearCache() is deprecated. Use clear() instead.");
}

/**
 * @deprecated 1.0.5
 * @description This module requires {@link module node:fs}.
 * 
 * Allows a way to easily export cache. Defaults to string.
 * @returns {(string | object)} Returns the cache content as an string or object.
 * @param {string} [how="Str"] - "Obj"/"Str" (Not case sensitive)
 * @example Example 1
 * const {getFullCacheContent} = require('arch881010-cache');
 * var data = getFullCacheContent("Str"); // or "Obj" (Not case sensitive)
 * @example Example 2
 * const cache = require('arch881010-cache');
 * var data = cache.getFullCacheContent("Str") // or "Obj" (Not case sensitive)
 * @since 1.0.3
 */
exports.getFullCacheContent = function(how) {
  throw new ReferenceError("getFullCacheContent() is depreceated, use content()");
}

/**
 * @link This module requires {@link module node:fs}.
 * @description Allows a way to easily export cache. Defaults to string. Derived from "getFullCacheContent()"
 * @returns {(string | object)} Returns the cache content as an string or object.
 * @param {string} [how="Str"] - "Obj"/"Str" (Not case sensitive)
 * @example Example 
 * const cache = require('arch881010-cache');
 * var data = cache.content("Str"); // or "Obj" (Not case sensitive)
 * @since 1.0.4
 */
exports.content = function(how) {
  how = how ?? "str";
  how = how.trim();
  var fs = require('node:fs');
  if (how.toLowerCase() == "obj" || how.toLowerCase() == "object" || how.toLowerCase() == "o") {
    return JSON.parse(fs.readFileSync('./node_modules/arch881010-files/cache.json', 'utf-8'));
  } else {
    return fs.readFileSync('./node_modules/arch881010-files/cache.json', 'utf-8');
  }
}

/**
 * @returns {string} The cache size in bytes.
 * @example 
 * const {size} = require('arch881010-cache');
 * console.log(size());
 * @example
 * const cache = require('arch881010-cache');
 * console.log(cache.size());
 * @since 1.0.4
*/

exports.size = function() {
  var fs = require('node:fs');
  var stats = fs.stat('./node_modules/arch881010-files/cache.json', 'utf-8');
  var bytes = stats.size;
  return bytes
}
/**
 * 
 * @param {string} match - A string to match to delete all keys with that name.
 * @returns Nothing, cache is updated.
 * @since 1.0.4
 */

exports.deleteMatching = function(match) {
  var fs = require('node:fs')
  try{
    match = match.trim();
  } catch(err){}
  match = match ?? null;
  if(match == null || match == "") {
    throw new ReferenceError("Missing option. [Match is empty.]")
  }
  match = match.toLowerCase();
  var cache;
  try {
    var cache = JSON.parse(fs.readFileSync("./node_modules/arch881010-files/cache.json","UTF-8"));
  } catch(err) {
    throw new ReferenceError("Missing cache??")
  }
  var amount = 0;
  var keys = cache.keys()
  for (var key of keys) {
    if(key.includes(match)){
      delete cache[key];
      amount = amount + 1;
      continue
    } else {}
  }
  fs.writeFileSync("./node_modules/arch881010-files/cache.json", JSON.stringify(cache));
  console.log(`You deleted ${String(amount)} of keys.`);
}