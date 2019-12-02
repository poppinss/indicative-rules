---
permalink: tomorrow
title: tomorrow
category: src
gh_url: https://github.com/poppinss/indicative-rules/tree/develop/src/raw/tomorrow.ts
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