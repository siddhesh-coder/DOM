// Note: ---innerHTML--- can create security risks for websites. For example, attackers can use cross-site scripting (XSS) to: 
// Add malicious client-side scripts that steal private user information
// Execute malicious scripts within the context of your page, compromising user data
// Inject code into the page, which can steal the user's sensitive information, such as login credentials or execute malicious code on the user's browser
// innerHTML can be dangerous because: 
// Using it for input fields can cause DOM manipulation
// Manipulating content using innerHTML can expose your application to XSS attacks
// innerHTML can add content that includes actual bits of HTML code

//getElementById
const title = document.getElementById('main-heading');

title.style.color = 'red'; //inline css

//getElementsByClassName
// const list = document.getElementsByClassName('list-items'); //HTMLCollection

// for(let i=0;i<list.length;i++){
//    list[i].style.backgroundColor = 'yellow';
// }

//getElementsByTagName
// const tags = document.getElementsByTagName('li');

// for(let i=0;i<tags.length;i++){
//    tags[i].style.backgroundColor = 'blue';
// }


//querySelector

// const seq = document.querySelector('div');

// seq.style.border = '4px solid black';

//querySelectorAll

// const seq2 = document.querySelectorAll('div'); //HTMLCollection

// for(let i=0;i<seq2.length;i++){
//     seq2[i].style.border = '4px solid black';
//  }

//Adding Element

const ul = document.querySelector('ul');

const li = document.createElement('li');

//add
ul.appendChild(li);

const text = document.createTextNode('Hello new');

//add
li.append(text);

//Modifying Attributes & Classes

//Attributes
//Setting attribute

// li.setAttribute('class', 'list-items');

//Getting the attribute

// console.log(li.getAttribute('class')); //list-items

//Removing attribute

// li.removeAttribute('class');

//Classes

//Adding
li.classList.add('list-items');

//Removing
//i.classList.remove('list-items');

//contains
console.log(li.classList.contains('list-items')); //return boolean value

//remove
//li.remove();

//Adding before Element

// const span = document.createElement('span');
// const txt1 = document.createTextNode("Before");
// span.appendChild(txt1);

// const parent = document.querySelector('.container');

// const ex = document.querySelector('#main-heading');



// parent.insertBefore(span,ex);

// //Removing HTML elements

// parent.removeChild(span);

// const line = document.getElementsByTagName('li');
// const index= line.length-1;
// line[index].remove();

//Replacing HTML elements

//parentElement.replaceChild(newElement,oldElement);

// const newNode = document.createElement('h1');
// const newTxt = document.createTextNode("My Fav Movies of the Year");
// newNode.appendChild(newTxt);

// //replace
// parent.replaceChild(newNode,ex);


// //Events
// //
// parent.addEventListener('click',function(){
//     alert("clicked work on container");
// });

//append
// The main difference between append and appendChild in JS is that appendChild() can only be used to append one node, whereas append() can append multiple nodes at once. Additionally, append() accepts DOMString objects, while appendChild() does not.
// To sum it up, append() is used to add HTML content or an element to the end of an existing element, while appendChild() is used to add a new node element as a child to an existing node.
// Here are some examples of how to use append() and appendChild() in JS:
// append()

// const ul = document.getElementById("myUl");



// // Append a new li element to the end of the ul element.

// ul.append("<li>New Item</li>");



// // Append multiple li elements to the end of the ul element.

// ul.append("<li>New Item 1</li><li>New Item 2</li>");



// // Append a DOMString object to the end of the ul element.

// ul.append("New Text");