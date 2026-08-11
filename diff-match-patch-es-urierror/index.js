import { diff, diffToDelta, patch, patchToText } from 'diff-match-patch-es'

const oldText = '😀'
const newText = '😃'

const diffs = diff(oldText, newText)
console.log('diff:', JSON.stringify(diffs))

for (const [label, reproduce] of [
  ['diffToDelta', () => diffToDelta(diffs)],
  ['patchToText', () => patchToText(patch(oldText, newText))],
]) {
  try {
    console.log(`${label}:`, reproduce())
  } catch (error) {
    console.log(`${label}:`, `${error.name}: ${error.message}`)
  }
}
