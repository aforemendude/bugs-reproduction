import { diffCharsToLines, diffLinesToChars, diffMain } from 'diff-match-patch-es'

const proto = diffLinesToChars('__proto__', '__proto__')
const constructor = diffLinesToChars('constructor', 'constructor')
const protoDiff = diffMain(proto.chars1, proto.chars2)
diffCharsToLines(protoDiff, proto.lineArray)

console.log('__proto__:', proto)
console.log('diff:', protoDiff)
console.log('constructor:', constructor)
