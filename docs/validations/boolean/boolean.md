---
permalink: boolean
title: boolean
category: boolean
---

Enforces the field value to be a valid boolean representation. The rule will
attempt to cast following values to their boolean counter part.
 
[casts]
  [label fromText="string ('0')", from="string", to="boolean", toText="boolean (false)"]
  [label fromText="string ('1')", from="string", to="boolean", toText="boolean (true)"]
  [label fromText="string ('false')", from="string", to="boolean", toText="boolean (false)"]
  [label fromText="string ('true')", from="string", to="boolean", toText="boolean (true)"]
  [label fromText="number ('0')", from="integer", to="boolean", toText="boolean (false)"]
  [label fromText="number ('1')", from="integer", to="boolean", toText="boolean (true)"]
[/casts]
 
```ts
import { validations } from 'indicative/validator'
 
const rules = {
  remember_me: 'boolean'
}
 
// or
const rules = {
  remember_me: [
    validations.boolean()
  ]
}
```