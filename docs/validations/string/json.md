---
permalink: json
title: json
category: string
gh_url: https://github.com/poppinss/indicative-rules/tree/develop/src/validations/string/json.ts
---

Enforces the field value is a valid JSON string and can be safely
parsed using `JSON.parse`.
 
```ts
import { validations } from 'indicative/validator'
 
const rules = {
  payload: 'json'
}
 
// or
const rules = {
  payload: [
    validations.json()
  ]
}
```