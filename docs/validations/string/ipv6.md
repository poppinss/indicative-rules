---
permalink: ipv6
title: ipv6
category: string
---

Enforces the field value is a valid `ipv6` address.
 
```ts
import { validations } from 'indicative/validator'
 
const rules = {
  ip_address: 'ipv6'
}
 
// or
const rules = {
  ip_address: [
    validations.ipv6()
  ]
}
```