---
permalink: empty
title: empty
category: raw
gh_url: https://github.com/poppinss/indicative-rules/tree/develop/src/raw/empty.ts
---

Tells whether input is empty or not
 
```
const { is } = require('indicative')
 
 // Following yield to true
 is.empty({})
 is.empty([])
 is.empty('')
 is.empty(null)
 is.empty(undefined)
```