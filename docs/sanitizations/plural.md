---
permalink: plural
title: plural
category: sanitizations
---

Converts a value to it's plural version. If value is not a string
then it will be returned as it is.
 
```ts
import { sanitizations } from 'indicative/sanitizer'
 
const sanitizationRules = {
  controllerName: 'plural'
}
 
// or
const sanitizationRules = {
  controllerName: [
    sanitizations.plural()
  ]
}
```