---
permalink: isFunction
title: isFunction
category: raw
gh_url: https://github.com/poppinss/indicative-rules/tree/develop/src/raw/isFunction.ts
---

Returns a boolean telling if value is a function or not.
 
```js
const { is } = require('indicative')
 
function foo () {}
 
if (is.isFunction(foo)) {
}
```