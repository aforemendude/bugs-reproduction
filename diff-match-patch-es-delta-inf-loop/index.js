import { diffCleanupSemantic, diffFromDelta } from 'diff-match-patch-es'

const diffs = diffFromDelta('ac', '=1\t-0\t=0\t+b\t=1')

console.log('diff:', JSON.stringify(diffs))
diffCleanupSemantic(diffs)
