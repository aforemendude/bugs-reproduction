# jsdiff JSON key order

Minimal browser reproduction for the key-order behavior in jsdiff's `diffJson()` helper.

The example parses two JSON documents containing the keys `"resource"`, `"10"`, `"2"`, and `"status"`. Although the numeric-looking keys are written in the middle of the input, V8 enumerates them first after `JSON.parse()`. jsdiff's canonical JSON therefore shows the numeric keys before the string keys.

Build the standalone page:

```sh
npm install
npm run build
```

The result is `dist/index.html`; it contains the `diff` package bundle and can be opened directly in a browser. The build also copies it to [`docs/jsdiff-json-key-order.html`](../docs/jsdiff-json-key-order.html) for GitHub Pages.

Live demo: [jsdiff JSON key order](https://aforemendude.github.io/bugs-reproduction/jsdiff-json-key-order.html)
