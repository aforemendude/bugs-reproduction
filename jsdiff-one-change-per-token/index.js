import {
  diffChars,
  diffLines,
  diffSentences,
  diffWords,
  diffWordsWithSpace,
} from 'diff'

const options = { oneChangePerToken: true }

const diffCases = [
  ['diffChars', diffChars, 'cat dog', 'cat dig'],
  ['diffWords', diffWords, 'a b', 'a c'],
  ['diffWordsWithSpace', diffWordsWithSpace, 'red blue', 'red green'],
  ['diffLines', diffLines, 'red\nblue\n', 'red\ngreen\n'],
  [
    'diffSentences',
    diffSentences,
    'The cat sleeps. The dog runs.',
    'The cat rests. The dog runs.',
  ],
]

for (const [name, diffMethod, oldText, newText] of diffCases) {
  const changes = diffMethod(oldText, newText, options)
  console.log(`${name} (${JSON.stringify(oldText)} -> ${JSON.stringify(newText)}):`)

  const renderedValues = changes.map(change => change.value).join('')
  console.log('changes:', JSON.stringify(changes, null, 2))
  console.log('------------------------------')
}
