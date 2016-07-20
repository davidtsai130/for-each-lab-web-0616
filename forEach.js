function iterativeLog(array) {
  array.forEach((element, index) => {
    console.log(`${index}: ${element}`)})
}

function iterate(callback) {
  var arr = ['hi', 'herro', 'wat']
  arr.forEach(callback)
  return arr
}

function doToArray(array, callback) {
  array.forEach(callback)
}