---
permalink: ip
title: ip
category: string
gh_url: https://github.com/poppinss/indicative-rules/tree/develop/src/validations/string/ip.ts
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