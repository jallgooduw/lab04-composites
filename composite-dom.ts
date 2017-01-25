interface IDomElement {
  print();
}

class TextNode {


}

class DomElement {
var currentNode,
  ni = document.createNodeIterator(document.documentElement, NodeFilter.SHOW_ELEMENT);

while(currentNode=ni.nextNode()){
  console.log(currentNode.nodeName);
  }
}

//http://stackoverflow.com/questions/4256339/javascript-how-to-loop-through-all-dom-elements-on-a-page