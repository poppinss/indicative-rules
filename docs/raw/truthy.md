---
permalink: truthy
title: truthy
category: raw
gh_url: https://github.com/poppinss/indicative-rules/tree/develop/src/raw/truthy.ts
---

Returns a boolean telling if value is truthy or not.
All values except following yields `true`.
 
- false
- 0
- null
- undefined
- empty string
 
```js
const { is } = require('indicative')
 
is.truthy('') // false
is.truthy(null) // false
is.truthy(false) // false
is.truthy(true) // true
is.truthy(true) // true
is.truthy('hello world') // true
```