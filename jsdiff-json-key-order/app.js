import { canonicalize, diffJson } from 'diff'

const oldExample = `{
  "resource": "server",
  "10": "ten",
  "2": "two",
  "status": "draft"
}`

const newExample = `{
  "resource": "server",
  "10": "ten",
  "2": "two",
  "status": "ready"
}`

const oldInput = document.querySelector('#old-json')
const newInput = document.querySelector('#new-json')
const diffOutput = document.querySelector('#diff-output')
const oldCanonicalOutput = document.querySelector('#old-canonical')
const newCanonicalOutput = document.querySelector('#new-canonical')
const keyOrderOutput = document.querySelector('#key-order')
const errorOutput = document.querySelector('#error')

oldInput.value = oldExample
newInput.value = newExample

function escapeHtml(value) {
  return value
    .replaceAll('&', '&amp;')
    .replaceAll('<', '&lt;')
    .replaceAll('>', '&gt;')
    .replaceAll('"', '&quot;')
    .replaceAll("'", '&#39;')
}

function prettyJson(value) {
  return JSON.stringify(canonicalize(value), null, 2)
}

function renderDiff(changes) {
  return changes.map((change) => {
    const className = change.added ? 'added' : change.removed ? 'removed' : 'unchanged'
    return `<span class="${className}">${escapeHtml(change.value)}</span>`
  }).join('')
}

function render() {
  try {
    const oldObject = JSON.parse(oldInput.value)
    const newObject = JSON.parse(newInput.value)
    const oldCanonical = prettyJson(oldObject)
    const newCanonical = prettyJson(newObject)

    oldCanonicalOutput.textContent = oldCanonical
    newCanonicalOutput.textContent = newCanonical
    keyOrderOutput.textContent = [
      `old Object.keys(): ${JSON.stringify(Object.keys(oldObject))}`,
      `new Object.keys(): ${JSON.stringify(Object.keys(newObject))}`,
    ].join('\n')
    diffOutput.innerHTML = renderDiff(diffJson(oldObject, newObject))
    errorOutput.hidden = true
  } catch (error) {
    diffOutput.textContent = ''
    oldCanonicalOutput.textContent = ''
    newCanonicalOutput.textContent = ''
    keyOrderOutput.textContent = ''
    errorOutput.textContent = `${error.name}: ${error.message}`
    errorOutput.hidden = false
  }
}

document.querySelector('#diff-button').addEventListener('click', render)
oldInput.addEventListener('input', render)
newInput.addEventListener('input', render)
render()
