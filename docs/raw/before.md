---
permalink: before
title: before
category: src
gh_url: https://github.com/poppinss/indicative-rules/tree/develop/src/raw/before.ts
---

Exports [isBefore](https://date-fns.org/v1.30.1/docs/isBefore) function from `date-fns`. So
make sure to check their docs.
 
```js
const { is } = require('indicative')
 
const date = new Date(1987, 1, 11)
const comparisonDate = new Date(1989, 6, 10)
 
if (is.before(date, comparisonDate)) {
}
```