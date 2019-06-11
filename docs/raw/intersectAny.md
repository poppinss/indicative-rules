---
permalink: intersectAny
title: intersectAny
category: raw
---

Returns a boolean telling if any of the `input` array items are
from the `comparison` array or not.
 
```js
const { is } = require('indicative')
 
const input = ['foo', 'bar']
const compareWith = ['foo', 'baz']
 
if (is.intersectAny(input, compareWith)) {
}
```