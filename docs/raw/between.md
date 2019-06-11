---
permalink: between
title: between
category: raw
---

Returns a boolean telling, if the given value is between `min` and `max`
or not.
 
```js
const { is } = require('indicative')
 
if (is.between(10, [5, 20])) {
}
```