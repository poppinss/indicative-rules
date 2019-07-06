---
permalink: ipv6
title: ipv6
category: string
---

Ensures the value is a valid ip address as per `ipv6` spec only.
 
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