import { diffJson } from 'diff'

function diffAndLog(label, oldJson, newJson) {
  console.log(`${label}:`, JSON.stringify(diffJson(JSON.parse(oldJson), JSON.parse(newJson)), null, 2))
}

diffAndLog('normal', '{"normal":"old"}', '{"normal":"new"}')
diffAndLog('__proto__', '{"__proto__":"old"}', '{"__proto__":"new"}')
