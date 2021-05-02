var recipes = {}

function updateObjectWithKeyAndValue(object, key, value) {
 Object.assign({}, object, {['key']:value})
 return object
}

function destructivelyUpdateObjectWithKeyAndValue(object, key, value) {
 object.key=value
 return object
}

function deleteFromObjectByKey(object, key) {
  return delete object.key
}

function destructiveltyDeleteFromObjectByKey(object,key) {
  
}