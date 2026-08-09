import { diffCharsToLines, diffLinesToChars, diffMain } from 'diff-match-patch-es'

function diffAndLog(text) {
  const lines = diffLinesToChars(text, text)
  const diff = diffMain(lines.chars1, lines.chars2)
  diffCharsToLines(diff, lines.lineArray)

  console.log(`${text}:`, JSON.stringify(lines, null, 2))
  console.log('diff:', JSON.stringify(diff, null, 2))
}

diffAndLog('normalText')
console.log('--------------------')
diffAndLog('__proto__')
