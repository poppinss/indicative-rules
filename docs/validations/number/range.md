---
permalink: range
title: range
category: validations
---

Ensures the value of field under validation is under a given range.
 
```js
const rules = {
  age: 'range:16,60'
}
 
// or
const rules = {
  age: [
    rules.range([16, 60])
  ]
}
```