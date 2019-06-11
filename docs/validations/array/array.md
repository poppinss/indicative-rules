---
permalink: array
title: array
category: validations
---

Checks if field value under validation is a valid Javascript array.
 
```js
const rules = {
  whiteListedUrls: 'array'
}
 
// or
const rules = {
  whiteListedUrls: [
    rules.array()
  ]
}
 