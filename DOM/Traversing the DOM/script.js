//Traverse the DOM

// Parent Node Traversal

const ul = document.querySelector('ul');

console.log(ul.parentNode);
console.log(ul.parentElement);
console.log(ul.parentNode.parentNode);

const html = document.documentElement;

console.log(html.parentNode);
console.log(html.parentElement);
//Note: In the Document Object Model (DOM), parentNode is a property that exists on all DOM nodes. It represents the parent node of the current node. parentNode can be any type of node, including element nodes, text nodes, or even the document node. 
// parentElement is a property specifically available on element nodes. It returns the parent element of a particular child element. It is a read-only property. 
// The difference between parentNode and parentElement is that parentElement returns null if the parent node is not an element.

// Child Node Traversal

console.log(ul.childNodes); //note: it also take indentation between element node
console.log(ul.firstChild);
console.log(ul.lastChild);

//ul.childNodes[1].style.backgroundColor = 'yellow';

//OR

console.log(ul.children);
console.log(ul.firstElementChild);
console.log(ul.lastElementChild);

// ul.children[2].style.backgroundColor = 'red';
// ul.firstElementChild.style.backgroundColor = 'pink';
// ul.lastElementChild.style.backgroundColor = 'pink';

// Sibling Node Traversal
const div = document.querySelector('div');

console.log(div.childNodes);

console.log(div.previousSibling);   
console.log(div.nextSibling);
//OR
//best
console.log(ul.previousElementSibling);
console.log(ul.nextElementSibling);