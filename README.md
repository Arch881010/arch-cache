# Hi

1.0.2:
Param Update
getCache -> getFromCache
deleteCache -> deleteFromCache

Formatting.

New function: getFullCacheContent(type)
Returns the cache as a string or object.
(Type: "str", "obj", etc. Not caps sensitive.)

Type saftey.
Keys, values, passwords, any string being entered, is automatically trimmed.

I do not have an full documentation and things yet, but let me explain some things.
Notice: I keep a global variable as "cache" until I understand a few things, may test with JSON soon.

If you require it as `const cache = require('arch881010-cache);`,  
Password is a string and is optional.
`cache.new(password);` - Creates the cache.  
`cache.add(key, value);` - Adds a key with a certain value.  
`cache.update(key, value);` - Updates the existing key with a new value.  
`cache.delete(key);` - Deletes the key and it's value.  
`cache.get(key);` - Gets the key's value.  
`cache.clear(password)` - Clears the cache. (Requires your password you already have.)  
`cache.about(t/f)` - Gets the details of the cache. (t/f = true/false)  
`cache.getFullCacheContent(type)` - Gets the entire cache. (type: "str","obj". Defaults to "str"(string).)  

`
Note: case is not sensitive, and forced to lower.
Now, if you would like to require individual functions:

```js
const { newCache, addCache, updateCache, getFromCache, getFullCacheContent, deleteFromCache, clearCache } = require('arch881010-cache');
```

W.I.P.
