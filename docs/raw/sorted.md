---
permalink: sorted
title: sorted
category: raw
gh_url: https://github.com/poppinss/indicative-rules/tree/develop/src/raw/sorted.ts
---

Returns a boolean telling if an array is sorted in ascending
order.
 
```js
const { is } = require('indicative')
 
is.sorted([1, 2, 3, 4, 5, 6]) // true
is.sorted([1, 2, 4, 3, 5, 6]) // false
```