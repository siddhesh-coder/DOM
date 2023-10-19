const button = document.querySelector('.reveal-btn');
const content = document.querySelector('.hidden-content');

function change(){
   if(content.classList.contains('reveal-btn')){
        content.classList.remove('reveal-btn')
   }else{
    content.classList.add('reveal-btn')
   }
}


button.addEventListener('click',change);

//OR

//The .toggle() method in JavaScript is used to toggle (i.e., switch back and forth between) the visibility or presence of an element or class. This method can be applied to HTML elements and is often used to show/hide elements or toggle a CSS class on or off.

// const button = document.querySelector('.reveal-btn');
// const content = document.querySelector('.hidden-content');

// function change() {
//   content.classList.toggle('reveal-btn');
// }

// button.addEventListener('click', change);

