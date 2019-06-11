---
permalink: falsy
title: falsy
category: raw
---

Returns a boolean telling if value is falsy or not. Following
values returns `true`.
 
- false
- 0
- null
- undefined
- empty string
 
```js
const { is } = require('indicative')
 
is.falsy('') // true
is.falsy(null) // true
is.falsy(false) // true
is.falsy(0) // true
is.falsy(true) // false
```