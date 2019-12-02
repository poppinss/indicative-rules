---
permalink: existy
title: existy
category: src
gh_url: https://github.com/poppinss/indicative-rules/tree/develop/src/raw/existy.ts
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