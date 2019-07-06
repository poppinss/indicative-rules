---
permalink: ip
title: ip
category: string
---

Ensures the value is a valid ip address as per `ipv4` and `ipv6` specs.
 
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