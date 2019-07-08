---
permalink: phone
title: phone
category: raw
gh_url: https://github.com/poppinss/indicative-rules/tree/develop/src/raw/phone.ts
---

Validates an input string against the phone number regex. Checkout
[libphonenumber](https://www.npmjs.com/package/libphonenumber-js)
If looking for a battle tested phone number validation with
country codes.
 
```js
const { is } = require('indicative')
 
is.phone('9999999999')    // true
is.phone('999-999-9999')  // true
is.phone('999.999.9999')  // true
```