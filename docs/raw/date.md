---
permalink: date
title: date
category: raw
gh_url: https://github.com/poppinss/indicative-rules/tree/develop/src/raw/date.ts
---

Returns a boolean telling if value is a valid Date object or not.
 
```js
const { is } = require('indicative')
 
if (is.date(new Date())) {
}
 
// also works for `date-fns` instance
if (is.date(dateFns.parse('2018-11-20'))) {
}
```