---
permalink: isFunction
title: isFunction
category: raw
---

Returns a boolean telling if value is a function or not.
 
```js
const { is } = require('indicative')
 
function foo () {}
 
if (is.isFunction(foo)) {
}
```