---
permalink: stripTags
title: stripTags
category: sanitizations
---

Strips HTML tags from a string. If value is not a string, it will be returned
as it is.
 
```js
const sanitizationRules = {
  message: 'strip_tags'
}
 
// or
const sanitizationRules = {
  message: [
    rule('strip_tags')
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