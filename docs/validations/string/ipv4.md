---
permalink: ipv4
title: ipv4
category: string
---

Ensures the value is a valid ip address as per `ipv4` spec only.
 
```ts
import { validations } from 'indicative/validator'
 
const rules = {
  ip_address: 'ipv4'
}
 
// or
const rules = {
  ip_address: [
    validations.ipv4()
  ]
}
```