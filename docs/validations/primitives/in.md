---
permalink: in
title: in
category: primitives
---

Ensures the value of a given field matches one of expected values.
 
```ts
import { validations } from 'indicative/validator'
 
const rules = {
  post_type: 'in:draft,published'
}
 
// or
const rules = {
  post_type: [
    validations.in(['draft', 'published'])
  ]
}
```ts