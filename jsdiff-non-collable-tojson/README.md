# jsdiff non-callable `toJSON` issue

Minimal reproduction for the `diffJson()` helper in the latest `diff` release
(the npm package for [jsdiff](https://github.com/kpdecker/jsdiff)).

Run:

```sh
npm install
npm start
```

When a parsed JSON object has a truthy, non-callable `toJSON` property,
jsdiff's JSON canonicalization tries to call it and throws a `TypeError`.

## Output

```text
> start
> node index.js

TypeError: obj.toJSON is not a function
```
