---
permalink: in
title: in
category: primitives
---

Enforces the field value to be one of the allowed values.
 
```ts
import { validations } from 'indicative/validator'
 
const rules = {
  post_status: 'in:draft,published'
}
 
// or
const rules = {
  post_status: [
    validations.in(['draft', 'published'])
  ]
}
```ts