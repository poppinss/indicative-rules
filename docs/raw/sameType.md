---
permalink: sameType
title: sameType
category: raw
gh_url: https://github.com/poppinss/indicative-rules/tree/develop/src/raw/sameType.ts
---

Compare two values to be exactly same type
 
```js
const { is } = require('indicative')
 
is.same('foo', 'bar') // true
is.same(10, 22) // true
```