---
permalink: future
title: future
category: src
gh_url: https://github.com/poppinss/indicative-rules/tree/develop/src/raw/future.ts
---

Exports [isFuture](https://date-fns.org/v1.30.1/docs/isFuture) function from `date-fns`. So
make sure to check their docs.
 
```js
const { is } = require('indicative')
 
if (is.isFuture(new Date(2080, 6, 10))) {
}
```