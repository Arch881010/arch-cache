# Hi

I do not have an full documentation and things yet, but let me explain some things.
Notice: I keep a global variable as "Cache" until I understand a few things, may test with JSON soon.

If you require it as ```const Cache = require('arch881010-cache);```,

`cache.newCache();` - Creates a new cache.
`cache.add(key, value);` - Adds a key with a certain value.
`cache.update(key, value);` - Updates the existing key with a new value.
`cache.delete(key);` - Deletes the key and it's value.
If you like a general function, then:
`cache.manage(action, key, value);`
List of actions is: "Add", "Delete", "Edit", "Update". (There is some shortened naming pre-emptively, please open a issue and let me know what acronym could be added.)

Now, if you would like to require individual functions with good sounding names:

```js
const { addCache, updateCache, deleteCache, manageCache } = require('arch881010-cache`); 
```

W.I.P.
