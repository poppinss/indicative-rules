---
permalink: tomorrow
title: tomorrow
category: raw
---

Exports [isTomorrow](https://date-fns.org/v1.30.1/docs/isTomorrow) function from `date-fns`. So
make sure to check their docs.
 
```js
const { is } = require('indicative')
 
const date = new Date()
date.setDate(date.getDate() + 1)
 
if (is.tomorrow(date)) {
}
```