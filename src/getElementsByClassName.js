// If life was easy, we could just do things the easy way:
// var getElementsByClassName = function (className) {
//   return document.getElementsByClassName(className);
// };

// But instead we're going to implement it from scratch:

/*

Notes: 

Need to use/look-up: 
1) Document.body -- gets content of the body in html 
2) elements.childNodes ---read-only property returns a live NodeList (array?) of child nodes of element. the first child node is assigned index 0.
3) element.classlist --- read-only property;returns a live DOMTokenList collection of the class attributes of the element.

-need to identify the elements that have that className - can use contains or hasClass here, loop ? 
-then i need to check for its children -- for each 
return an array? -check console 
*/
var getElementsByClassName = function(className) {
  var result = false;
  var elementList = [];
  function filter(element) {
    var classList = element.classList
    if (_(classList).contains(className)) {
      elementList.push(element);
    }
    _(element.childNodes).forEach(function(child) {
      filter(child);
    });
  }
  filter(document.body);
  return elementList;
};


