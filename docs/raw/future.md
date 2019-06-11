---
permalink: future
title: future
category: raw
---

Exports [isFuture](https://date-fns.org/v1.30.1/docs/isFuture) function from `date-fns`. So
make sure to check their docs.
 
```js
const { is } = require('indicative')
 
if (is.isFuture(new Date(2080, 6, 10))) {
}
```