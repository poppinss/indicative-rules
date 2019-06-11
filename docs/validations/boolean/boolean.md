---
permalink: boolean
title: boolean
category: validations
---

Ensures the value of a field is a valid boolean representation.
 
Validation fails, if value isn't a boolean and also unable to
cast value to boolean.
 
[casts]
 [from label="string ('0')"]
 [to label="boolean (false)"]
[/casts]
 
[casts]
 [from label="string ('1')"]
 [to label="boolean (true)"]
[/casts]
 
[casts]
 [from label="string ('false')"]
 [to label="boolean (false)"]
[/casts]
 
[casts]
 [from label="string ('true')"]
 [to label="boolean (true)"]
[/casts]
 
[casts]
 [from label="number (0)"]
 [to label="boolean (false)"]
[/casts]
 
[casts]
 [from label="number (1)"]
 [to label="boolean (true)"]
[/casts]
 
```js
const rules = {
  remember_me: 'boolean'
}
 
// or
const rules = {
  remember_me: [
    rules.boolean()
  ]
}
```
    We mutate the value to a boolean when it is castable
    to a boolean.