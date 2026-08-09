# diff-match-patch-es `__proto__` edge case

Minimal reproduction for the exported `diffLinesToChars()` helper in the latest
`diff-match-patch-es` release.

Run:

```sh
npm install
npm start
```

The `__proto__` input is an exact final line without a trailing newline. The
identical inputs receive different character IDs and duplicate entries in the
line table, so diffing the encoded strings reports one deletion and one
insertion instead of an equality.

## Output

```
> start
> node index.js

normalText: {
  "chars1": "\u0001",
  "chars2": "\u0001",
  "lineArray": [
    "",
    "normalText"
  ]
}
diff: [
  [
    0,
    "normalText"
  ]
]
--------------------
__proto__: {
  "chars1": "\u0001",
  "chars2": "\u0002",
  "lineArray": [
    "",
    "__proto__",
    "__proto__"
  ]
}
diff: [
  [
    -1,
    "__proto__"
  ],
  [
    1,
    "__proto__"
  ]
]
```
