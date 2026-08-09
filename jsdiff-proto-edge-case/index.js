import { diffJson } from 'diff'

function diffAndLog(label, oldJson, newJson) {
  const oldObject = JSON.parse(oldJson)
  const newObject = JSON.parse(newJson)
  const changes = diffJson(oldObject, newObject)

  console.log(`${label}:`, JSON.stringify(changes, null, 2))
}

diffAndLog('normal', '{"normal":"old"}', '{"normal":"new"}')
console.log('--------------------')
diffAndLog('__proto__', '{"__proto__":"old"}', '{"__proto__":"new"}')
