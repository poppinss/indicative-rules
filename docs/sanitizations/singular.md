---
permalink: singular
title: singular
category: sanitizations
---

Converts a value to it's singular version. If value is not a string
then it will be returned as it is.
 
```ts
import { sanitizations } from 'indicative/sanitizer'
 
const sanitizationRules = {
  modelName: 'singular'
}
 
// or
const sanitizationRules = {
  modelName: [
    sanitizations.singular()
  ]
}
```