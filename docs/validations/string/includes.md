---
permalink: includes
title: includes
category: string
---

Enforces the field value to include a given substring.
 
```ts
import { validations } from 'indicative/validator'
 
const rules = {
  url: 'includes:adonisjs.com'
}
 
// or
const rules = {
  url: [
    validations.includes(['adonisjs.com'])
  ]
}
```