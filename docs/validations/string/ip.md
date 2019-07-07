---
permalink: ip
title: ip
category: string
---

Enforces the field value is a valid ip address.
 
```ts
import { validations } from 'indicative/validator'
 
const rules = {
  ip_address: 'ip'
}
 
// or
const rules = {
  ip_address: [
    validations.ip()
  ]
}
```