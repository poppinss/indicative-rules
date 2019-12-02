---
permalink: creditCard
title: creditCard
category: src
gh_url: https://github.com/poppinss/indicative-rules/tree/develop/src/raw/creditCard.ts
---

Returns a boolean telling, if value is a valid credit card number pattern
or not.
 
```js
const { is } = require('indicative')
 
if (is.creditCard('4111-1111-1111-1111')) {
}
```