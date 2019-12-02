---
permalink: between
title: between
category: src
gh_url: https://github.com/poppinss/indicative-rules/tree/develop/src/raw/between.ts
---

Returns a boolean telling, if the given value is between `min` and `max`
or not.
 
```js
const { is } = require('indicative')
 
if (is.between(10, [5, 20])) {
}
```