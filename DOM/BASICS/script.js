// DOM Tree
//BASICS
//document is the object (in which it contain all html elements)

//console.log(window.document); 

//1]How to Select Elements

document.getElementById("myDiv"); //return HTMLElement [note: console.log() if you want to check]

document.getElementsByClassName("bold"); //Returns a HTMLCollection of the elements

document.getElementsByTagName("p"); //Retrieves a collection of objects based on the specified element name.

document.querySelector(".bold"); //return HTMLElement it aplicable for first selected element 

document.querySelectorAll(".bold"); //return HTMLCollection 

//2] Work

const el = document.getElementById("myDiv");
console.log(el.innerText); //you can GET and SET (for setting el.innerText = "SET") for this

console.log(el.innerHTML); //you can GET and SET the html (for setting el.innerHTML = `<p class="bold"> Hello DOM </p>`) note: write html code inside ``.

console.log(el.id);

console.log("Below is ClassName");

const e = document.getElementsByClassName("bold")[0]; //[0] to get first one because it return the HTMLCollection if we remove [0] then it will undefined
console.log(e.className);
console.log(e.innerHTML);
console.log(e.innerText);

console.log("Below is TagName");

const ell = document.getElementsByTagName("p")[0]; //[0] to get first one because it return the HTMLCollection if we remove [0] then it will undefined
console.log(ell.className);
console.log(ell.innerHTML);
console.log(ell.innerText);

//Attributes
console.log(ell.getAttribute("class"));
ell.setAttribute("class","bold dark"); //override the value
console.log(ell.getAttribute("class")); //bold dark

//CSS Styles (you can also do styling by using JS)
//here I have shown only limited styles

//note: below all are inline styling

ell.style.color = "blue"; //setting the color 

console.log(ell.style.color);//you can also get the color

ell.style.backgroundColor = "yellow";

ell.style.border = "1px solid red";


//3] Events (IMP)
const ell2 = document.getElementsByTagName("p")[0];

ell2.addEventListener('click', function(){ //property,function
    alert("clicked"); //you can add more things, for now just use alert to check it is working or not
});


//4] Adding elements in html

const ell3 = document.getElementsByTagName("p")[0];

//making
const child = document.createElement('span'); //you can add any html tag you want

ell3.appendChild(child);

console.log("inner"+ell3.innerHTML);