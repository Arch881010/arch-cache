# Hello

### Recent Patch Notes
1.0.5b:
Fix err (cb)  
Changes functions for better readability.  
Made cache last between updates. (At the cost of using fs-extra)  
Fixed certain functions so they don't throw errors as much, but logs warnings.
**Updating WILL wipe all cache. But beyond this version (1.0.5), it will not. Any older versions (<1.0.5) will have their cache COMPLETELY WIPED.**

### Info

Hey, when updating arch881010-cache, your cache gets **wiped.**  
**This has been fixed in 1.0.5 and greater!!!**
Also, weirdly, my old publishes are gone!

Type saftey.
Keys, values, passwords, any string being entered, is automatically trimmed of leading and trailing spaces.

I do not have an full documentation and things yet, but let me explain some things.
Notice: I keep a global variable as "cache" until I understand a few things, may test with JSON soon.
**Recent updates has this as a file, and not a local variable.**

### Light Documentation, also avaliable [here](https://arch881010.github.io/arch-cache/).

Assumes this is how you initialized it.  
`const cache = require('arch881010-cache);`,  

`cache.new(password);` - Creates the cache (password optional).  
`cache.add(key, value);` - Adds a key with a certain value.  
`cache.update(key, value);` - Updates the existing key with a new value.  
`cache.delete(key);` - Deletes the key and it's value.  
`cache.get(key);` - Gets the key's value.  
`cache.clear(password)` - Clears the cache. (Requires your password you already have, or leave blank if you didn't use the password.)  
`cache.about(t/f)` - Gets the details of the cache. (t/f = true/false)  
`cache.content(type)` - Gets the entire cache. (type: "str","obj". Defaults to "str"(string).)  
`cache.size()` - Gets the cache's size in bytes.

`
Note: case is not sensitive, and is forced to lower.
`