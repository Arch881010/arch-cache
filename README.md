# Hi

1.0.4:
Cache size (B (Bytes))
Readme.md update.
Warning of depreceiation for individual functions (addCache, etc (this is still fine with {get}, {add})). It was a hassal to maintain.
Docs are now included. It will be hosted on github. (Link will be added eventually)

Hey, when updating arch881010-cache, your cache gets **wiped.** This can be saved by simply removing index.js and finding the source on github with the new index.js. (This occurs with older versions. This shouldn't happen in 1.0.4 or greater.)

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
`cache.clear(password)` - Clears the cache. (Requires your password you already have, or leave blank if you didn't use the password.)  
`cache.about(t/f)` - Gets the details of the cache. (t/f = true/false)  
`cache.content(type)` - Gets the entire cache. (type: "str","obj". Defaults to "str"(string).)  
`cache.size()` - Gets the cache's size in bytes.

`
Note: case is not sensitive, and forced to lower.
`

W.I.P.
