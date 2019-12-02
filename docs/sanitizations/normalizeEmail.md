---
permalink: normalizeEmail
title: normalizeEmail
category: src
gh_url: https://github.com/poppinss/indicative-rules/tree/develop/src/sanitizations/normalizeEmail.ts
---

Normalizes the email address by removing unwanted characters from it. For
example `foo+bar@gmail.com` will become `foobar@gmail.com` and also it
will normalize the characters case too.
 
If value is not a string, it will be returned as it is, otherwise it is
passed to [validator.js](https://github.com/chriso/validator.js)
normalizeEmail method.
 
```ts
import { sanitizations } from 'indicative/sanitizer'
 
const sanitizationRules = {
  email: [
    sanitizations.normalizeEmail()
  ]
}
 
// pass options
const sanitizationRules = {
  email: [
    sanitizations.normalizeEmail([{
      all_lowercase: true,
      icloud_remove_subaddress: true
    }])
  ]
}
```