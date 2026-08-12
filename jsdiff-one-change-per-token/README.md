# jsdiff `diffWords()` `oneChangePerToken` duplicated space

Minimal reproduction for the latest [jsdiff](https://github.com/kpdecker/jsdiff)
release (`diff` 9.0.0).

Run:

```sh
npm install
npm start
```

With `{ oneChangePerToken: true }`, `diffWords()` returns the separator space in
the common token and again at the start of both the removed and added tokens.
Joining the change values therefore duplicates the space. The other text diff
methods are each exercised with their own representative input and do not
produce duplicated spaces.

## Output

```text
> start
> node index.js

diffChars ("cat dog" -> "cat dig"):
changes: [{"count":1,"added":false,"removed":false,"value":"c"},{"count":1,"added":false,"removed":false,"value":"a"},{"count":1,"added":false,"removed":false,"value":"t"},{"count":1,"added":false,"removed":false,"value":" "},{"count":1,"added":false,"removed":false,"value":"d"},{"count":1,"added":false,"removed":true,"value":"o"},{"count":1,"added":true,"removed":false,"value":"i"},{"count":1,"added":false,"removed":false,"value":"g"}]
values: "cat doig"
contains duplicated space: false
diffWords ("a b" -> "a c"):
changes: [{"count":1,"added":false,"removed":false,"value":"a "},{"count":1,"added":false,"removed":true,"value":" b"},{"count":1,"added":true,"removed":false,"value":" c"}]
values: "a  b c"
contains duplicated space: true
diffWordsWithSpace ("red blue" -> "red green"):
changes: [{"count":1,"added":false,"removed":false,"value":"red"},{"count":1,"added":false,"removed":false,"value":" "},{"count":1,"added":false,"removed":true,"value":"blue"},{"count":1,"added":true,"removed":false,"value":"green"}]
values: "red bluegreen"
contains duplicated space: false
diffLines ("red\nblue\n" -> "red\ngreen\n"):
changes: [{"count":1,"added":false,"removed":false,"value":"red\n"},{"count":1,"added":false,"removed":true,"value":"blue\n"},{"count":1,"added":true,"removed":false,"value":"green\n"}]
values: "red\nblue\ngreen\n"
contains duplicated space: false
diffSentences ("The cat sleeps. The dog runs." -> "The cat rests. The dog runs."):
changes: [{"count":1,"added":false,"removed":true,"value":"The cat sleeps."},{"count":1,"added":true,"removed":false,"value":"The cat rests."},{"count":1,"added":false,"removed":false,"value":" "},{"count":1,"added":false,"removed":false,"value":"The dog runs."}]
values: "The cat sleeps.The cat rests. The dog runs."
contains duplicated space: false
```
