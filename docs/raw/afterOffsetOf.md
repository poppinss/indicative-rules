---
permalink: afterOffsetOf
title: afterOffsetOf
category: raw
---

Returns a boolean telling if input date is after the given
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
 
if (is.afterOffsetOf(new Date(), 10, 'days')) {
}
```