var recipes = {}

function updateObjectWithKeyAndValue(object, key, value) {
 var object2 = Object.assign({}, object)
 object2[key] = value
 return object2
}

function destructivelyUpdateObjectWithKeyAndValue(object, key, value) {
 object[key]=value
 return object
}

function deleteFromObjectByKey(object, key) {
  return delete object.key
}

function destructivelyDeleteFromObjectByKey(object, key) {

  object2 = delete object.key
  console.log({object2})
 
}