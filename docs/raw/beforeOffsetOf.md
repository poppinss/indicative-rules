---
permalink: beforeOffsetOf
title: beforeOffsetOf
category: raw
---

Returns a boolean telling if input date is before the given
offset or not.
 
The `key` has to be one of the following values.
 
- years
- quarters
- months
- weeks
- days
- hours
- minutes
- seconds
- milliseconds
 
```js
const { is } = require('indicative')
const inputDate = new Date().setDate(new Date().getDate() - 11)
 
if (is.beforeOffsetOf(inputDate, 10, 'days')) {
}
```