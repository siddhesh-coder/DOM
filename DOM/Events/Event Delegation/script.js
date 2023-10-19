
// Event Delegation -> It allows users to append a SINGLE event Listener to a parent element that adds it to all of its present AND future descendants that match a selector. 


// document.querySelector('#football').addEventListener('click', function(e){
//     console.log("Football is clicked");

//     const target = e.target;

//     if(target.matches('li')){
//         target.style.backgroundColor = "lightgrey";
//     }
// })
// document.querySelector('#basketball').addEventListener('click', function(e){
//     console.log("Basketball is clicked");

//     const target = e.target;

//     if(target.matches('li')){
//         target.style.backgroundColor = "lightgrey";
//     }
// })
// document.querySelector('#boxing').addEventListener('click', function(e){
//     console.log("Boxing is clicked");

//     const target = e.target;

//     if(target.matches('li')){
//         target.style.backgroundColor = "lightgrey";
//     }
// })
// document.querySelector('#tennis').addEventListener('click', function(e){
//     console.log("Tennis is clicked");

//     const target = e.target;

//     if(target.matches('li')){
//         target.style.backgroundColor = "lightgrey";
//     }
// })
// document.querySelector('#golf').addEventListener('click', function(e){
//     console.log("Golf is clicked");

//     const target = e.target;

//     if(target.matches('li')){
//         target.style.backgroundColor = "lightgrey";
//     }
// })

//above code working perfectly fine but code is much we want to optimize it, because for same action we are using this lines of code.

//event delegation

document.querySelector('#sports').addEventListener('click', function(e){
  if (e.target.tagName === 'LI') {
    console.log(e.target.innerText + ' is clicked');
    e.target.classList.toggle('change');
  }

  //OR
 //note: but it will not remove color
    //  if(target.matches('li')){
    //     target.style.backgroundColor = "lightgrey";
    // }

    //OR
    // if (e.target.tagName === 'LI') {
    //   if (e.target.classList.contains('change')) {
    //         e.target.classList.remove('change');
    //       } else {
    //         e.target.classList.add('change');
    //       }
    // }
})

const sports = document.querySelector('#sports');
const newGame = document.createElement('li');

newGame.innerText = "Cricket";
newGame.setAttribute('id', 'cricket');

sports.appendChild(newGame);

//source: JavaScript DOM Manipulation – Full Course for Beginners(freeCodeCamp)