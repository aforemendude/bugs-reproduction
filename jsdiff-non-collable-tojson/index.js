import { diffJson } from 'diff'

const oldObject = JSON.parse('{"toJSON":"old"}')
const newObject = JSON.parse('{"toJSON":"new"}')

try {
  console.log(diffJson(oldObject, newObject))
} catch (error) {
  console.log(`${error.name}: ${error.message}`)
}
