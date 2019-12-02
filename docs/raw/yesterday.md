---
permalink: yesterday
title: yesterday
category: src
gh_url: https://github.com/poppinss/indicative-rules/tree/develop/src/raw/yesterday.ts
---

Exports [isYesterday](https://date-fns.org/v1.30.1/docs/isYesterday) function from `date-fns`. So
make sure to check their docs.
 
```js
const { is } = require('indicative')
 
const date = new Date()
date.setDate(date.getDate() - 1)
 
if (is.yesterday(date)) {
}
```