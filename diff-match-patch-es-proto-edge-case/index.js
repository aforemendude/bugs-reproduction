import { diffCharsToLines, diffLinesToChars, diffMain } from 'diff-match-patch-es'

function diffAndLog(text) {
  const lines = diffLinesToChars(text, text)
  const diff = diffMain(lines.chars1, lines.chars2)
  diffCharsToLines(diff, lines.lineArray)

  console.log(`${text}:`, lines)
  console.log('diff:', diff)
}

diffAndLog('normalText')
diffAndLog('__proto__')
