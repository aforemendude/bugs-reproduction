# `diff-match-patch-es` delta infinite loop

Minimal reproduction for `diff-match-patch-es` 2.0.1.

Run the reproduction:

```sh
npm install
timeout 5s npm start; echo "Exit code: $?"
```

The command prints the diff and then times out because `diffCleanupSemantic`
does not return. `diffCleanupSemanticLossless` has the same issue.
