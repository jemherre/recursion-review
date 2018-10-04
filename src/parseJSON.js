// this is what you would do if you were one to do things the easy way:
// var parseJSON = JSON.parse;

// but you're not, so you'll write it from scratch:
var parseJSON = function(json) {
  console.log("JSON >> "+json);

    ////check first for "["
  if(json.charAt(0) === "["){
    if(json.charAt(json.length-1) !== "]") return undefined;
    var arr = [];
    //split ,
    if(json.length == 2) return arr;
    var splitArr = json.slice(1,json.length-1).split(','); //get rid of []

    //[ "[1", "2", "3]" ]  >> [ "1", "2", "3]" ]
    console.log("split "+splitArr, splitArr.length);
    for(var i =0; i < splitArr.length; i++){

      //start recursion for every element
      arr.push(parseJSON(splitArr[i]));
    }
    console.log(arr);
    return arr;
  }

  //check for objects
  if(json.charAt(0) === "{"){
    var obj= {};
    //split ,
    if(json.length == 2) return obj; //empty obj
    var splitObj = json.slice(2,json.length-1).split(', "'); //get rid of {}
    //{a:1,b:2} >> ["a:1","b:2"] >> [ ["a","1"],["b","2"] ]
    console.log(splitObj);
    for(var i =0; i < splitObj.length; i++){
      console.log(splitObj[i])
      //start recursion for every element
      var pair = splitObj[i].split(': ');
      console.log(pair);
      var key = pair[0].slice(0,pair[0].length-1);
      var val = parseJSON(pair[1]);
      console.log(key,pair);
      obj[key] = val;
    }
    console.log(JSON.stringify(obj));
    return obj;
  }

  //check for primitives
  if(isNaN(json)){ //string
    console.log("json = "+json);
    if(json === "true") return true;
    if(json === "false") return false;
    if(json === "null") return null;
    if(json.charAt(0) === '"') return json.slice(1,json.length-1);//remove ""
    if(json.charAt(0) === ' ') return parseJSON(json.slice(1));
    return json;
  } else {//its a number
    return Number(json);
  }
};
