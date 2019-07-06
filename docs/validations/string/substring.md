---
permalink: substring
title: substring
category: string
---

Ensures the value of field under validation contains a given substring.
 
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