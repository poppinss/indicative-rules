---
permalink: past
title: past
category: raw
---

Exports [isPast](https://date-fns.org/v1.30.1/docs/isPast) function from `date-fns`. So
make sure to check their docs.
 
```js
const { is } = require('indicative')
 
if (is.past(new Date(1990, 6, 10))) {
}
```