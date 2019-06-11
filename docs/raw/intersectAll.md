---
permalink: intersectAll
title: intersectAll
category: raw
---

Returns a boolean telling if all of the `input` array items are
from the `comparison` array or not.
 
```js
const { is } = require('indicative')
 
const input = ['foo', 'bar']
const compareWith = ['foo', 'bar', 'baz']
 
if (is.intersectAll(input, compareWith)) {
}
```