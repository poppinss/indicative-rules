---
permalink: after
title: after
category: raw
gh_url: https://github.com/poppinss/indicative-rules/tree/develop/src/raw/after.ts
---

Exports [isAfter](https://date-fns.org/v1.30.1/docs/isAfter) function from `date-fns`. So
make sure to check their docs.
 
```js
const { is } = require('indicative')
 
const date = new Date(1989, 6, 10)
const comparisonDate = new Date(1987, 1, 11)
 
if (is.after(date, comparisonDate)) {
}
```