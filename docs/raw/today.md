---
permalink: today
title: today
category: src
gh_url: https://github.com/poppinss/indicative-rules/tree/develop/src/raw/today.ts
---

Exports [isToday](https://date-fns.org/v1.30.1/docs/isToday) function from `date-fns`. So
make sure to check their docs.
 
```js
const { is } = require('indicative')
 
if (is.today(new Date())) {
}
```