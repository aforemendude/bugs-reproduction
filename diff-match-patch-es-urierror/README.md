# diff-match-patch-es surrogate-pair `URIError`

Minimal reproduction for the latest `diff-match-patch-es` release.

Run:

```sh
npm install
npm start
```

Diffing two emoji with a zero-millisecond timeout returns unpaired UTF-16
surrogates. The delta and patch serializers pass those surrogates to URI
encoding, which throws `URIError: URI malformed`.

## Output

```text
> start
> node index.js

diff: [[0,"\ud83d"],[-1,"\ude00"],[1,"\ude03"]]
diffToDelta: URIError: URI malformed
patchToText: URIError: URI malformed
```
