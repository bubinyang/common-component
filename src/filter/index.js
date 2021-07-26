
export function showLabel(value, list, key = 'id') {
  if (!value) return ''
  const findItem = list.find(item => item[key] === value)
  return findItem ? findItem.name : value
}

