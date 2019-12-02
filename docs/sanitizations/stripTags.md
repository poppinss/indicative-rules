---
permalink: stripTags
title: stripTags
category: src
gh_url: https://github.com/poppinss/indicative-rules/tree/develop/src/sanitizations/stripTags.ts
---

Strips HTML tags from a string. If value is not a string, it will be returned
as it is.
 
```ts
import { sanitizations } from 'indicative/sanitizer'
 
const sanitizationRules = {
  message: 'strip_tags'
}
 
// or
const sanitizationRules = {
  message: [
    sanitizations.stripTags()
  ]
}
```
 
Also you can pass an array of whitelisted tags.
 
```js
const sanitizationRules = {
  message: 'strip_tags:a,img'
}
 
// or
const sanitizationRules = {
  message: [
    rule('strip_tags', ['a', 'img'])
  ]
}
```