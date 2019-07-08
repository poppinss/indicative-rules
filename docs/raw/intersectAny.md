---
permalink: intersectAny
title: intersectAny
category: raw
gh_url: https://github.com/poppinss/indicative-rules/tree/develop/src/raw/intersectAny.ts
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