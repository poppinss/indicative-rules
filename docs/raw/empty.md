---
permalink: empty
title: empty
category: raw
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