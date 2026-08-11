# diff-match-patch-es surrogate-pair `URIError`

Minimal reproduction for `diff-match-patch-es` 2.0.1.

Run:

```sh
npm install
npm start
```

Diffing two emoji with the default options returns unpaired UTF-16 surrogates.
The delta and patch serializers pass those surrogates to URI encoding, which
throws `URIError: URI malformed`.

## Output

```text
> start
> node index.js

diff: [[0,"\ud83d"],[-1,"\ude00"],[1,"\ude03"]]
diffToDelta: URIError: URI malformed
patchToText: URIError: URI malformed
```
