---
permalink: singular
title: singular
category: sanitizations
---

Converts a value to it's singular version. If value is not a string
then it will return as it is.
 
```js
const sanitizationRules = {
  modelName: 'singular'
}
 
// or
const sanitizationRules = {
  modelName: [
    rule('singular')
  ]
}
```