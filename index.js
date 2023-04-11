exports.newCache = function(){
  global.cache = new Map();
}
exports.manageCache = function(action, key, value) {
  if (cache === undefined) {}
  const data = require('./names.json');
  const getList = data.get;
  const updateList = data.update;
  const deleteList = data.delete;
  action = action.toLowerCase();
    if(getList.includes(action)) {
      if(cache.has(key)) {
          return cache.get(key);
      } else {
        console.error("There is no key as" + key);
        return;
      }
    } else if (updateList.includes(action)) {
      cache.set(key, value);
      return;
    } else if (deleteList.includes(action)) {
      cache.delete(key);
      return;
    } else {
      console.error("Use a proper input. Err(Wrong input). [Cache-Info] Try using " + `"new", "update", "edit", "remove", or (more to come).`);
      return;
    }
}