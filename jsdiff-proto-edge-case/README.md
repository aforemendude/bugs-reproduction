# jsdiff `diffJson()` `__proto__` edge case

Minimal reproduction for the `diffJson()` helper in the latest `diff` release
(the npm package for [jsdiff](https://github.com/kpdecker/jsdiff)).

Run:

```sh
npm install
npm start
```

`JSON.parse()` creates an own `__proto__` property. jsdiff's `diffJson()`
canonicalization assigns that key to a normal object, where it changes the
object prototype instead of creating an own property. As a result, changing
the value of `__proto__` is reported as no change.

## Output

```text
> start
> node index.js

normal: [
  {
    "count": 1,
    "added": false,
    "removed": false,
    "value": "{\n"
  },
  {
    "count": 1,
    "removed": true,
    "value": "  \"normal\": \"old\"\n"
  },
  {
    "count": 1,
    "added": true,
    "value": "  \"normal\": \"new\"\n"
  },
  {
    "count": 1,
    "added": false,
    "removed": false,
    "value": "}"
  }
]
__proto__: [
  {
    "count": 1,
    "added": false,
    "removed": false,
    "value": "{}"
  }
]
```
