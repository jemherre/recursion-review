// this is what you would do if you liked things to be easy:
// var stringifyJSON = JSON.stringify;

// but you don't so you're going to write it from scratch:

var stringifyJSON = function(obj) {
  // your code goes here
  //function, undefined


  if (typeof obj === "function" || typeof obj === undefined || obj === null) {
    return 'null';
  }
  if (typeof obj === "boolean" || typeof obj === "number") {
    return obj.toString();
  }
  if (typeof obj === "string") { //string
    return '"' + obj + '"';
  }


  if (Array.isArray(obj)) {
    var strArr = '[';
    for (var i = 0; i < obj.length; i++) {
      strArr += stringifyJSON(obj[i]) + ',';
    }

    if (strArr.length > 1) {
      return strArr = strArr.slice(0, strArr.length - 1) + ']';
    } else {
      return strArr + ']';
    }
  }
  //obj
  var strObj = '{';
  for (var key in obj) {
    if (obj[key] !== undefined && typeof obj[key] !== "function") {
      strObj += stringifyJSON(key) + ':' + stringifyJSON(obj[key]) + ',';
    }
  }
  if (strObj.length > 1) {
    return strObj = strObj.slice(0, strObj.length - 1) + '}';
  } else {
    return strObj + '}';
  }

};
