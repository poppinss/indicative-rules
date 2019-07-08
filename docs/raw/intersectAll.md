---
permalink: intersectAll
title: intersectAll
category: raw
gh_url: https://github.com/poppinss/indicative-rules/tree/develop/src/raw/intersectAll.ts
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