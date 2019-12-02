---
permalink: email
title: email
category: src
gh_url: https://github.com/poppinss/indicative-rules/tree/develop/src/raw/email.ts
---

Returns a boolean telling if email is valid as per email regex pattern
or not.
 
```js
const { is } = require('indicative')
 
if (is.email('virk@adonisjs.com')) {
}
```