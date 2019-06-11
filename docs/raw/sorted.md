---
permalink: sorted
title: sorted
category: raw
---

Returns a boolean telling if an array is sorted in ascending
order.
 
```js
const { is } = require('indicative')
 
is.sorted([1, 2, 3, 4, 5, 6]) // true
is.sorted([1, 2, 4, 3, 5, 6]) // false
```