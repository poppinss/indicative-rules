---
permalink: ipv4
title: ipv4
category: string
gh_url: https://github.com/poppinss/indicative-rules/tree/develop/src/validations/string/ipv4.ts
---

Enforces the field value is a valid `ipv4` address.
 
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