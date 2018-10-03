// If life was easy, we could just do things the easy way:
// var getElementsByClassName = function (className) {
//   return document.getElementsByClassName(className);
// };

// But instead we're going to implement it from scratch:
var getElementsByClassName = function(className) {
  // your code here
  var result = [];
  var searchNode = function(node) {
    //check parent node
    if (node.classList !== undefined && node.classList.contains(className)) {
      result.push(node);
    }
    //then check for child nodes
    if (node.childNodes !== undefined && node.childNodes.length > 0) {
      for (var i = 0; i < node.childNodes.length; i++) { //iterate through the node.classList
        searchNode(node.childNodes[i]); //start recursion on child nodes
      }
    }
  };

  searchNode(document.body);
  return result;
};
