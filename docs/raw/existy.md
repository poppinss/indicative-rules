---
permalink: existy
title: existy
category: raw
---

Returns a boolean telling if value is existy or not.
Empty string, `null` and `undefined` are not
existy.
 
```js
const { is } = require('indicative')
 
is.existy('') // false
is.existy(null) // false
is.existy(true) // true
is.existy(false) // true
```