//Event Progagation

//Event Capturing
window.addEventListener('click', function(){
    console.log('window');
},true);

document.addEventListener('click', function(){
    console.log('document');
},true);

document.querySelector('.div2').addEventListener('click', function(){
    console.log('DIV 2')
},true);

document.querySelector('.div1').addEventListener('click', function(){
    console.log('DIV 1');
},true);

document.querySelector('button').addEventListener('click', function(e){
    console.log(e.target.innerText = 'Clicked!');
},true);

//Event Bubbling
//default
// window.addEventListener('click', function(){
//     console.log('window');
// }.false);

// document.addEventListener('click', function(){
//     console.log('document');
// }.false);

// document.querySelector('.div2').addEventListener('click', function(){
//     console.log('DIV 2')
// }.false);

// document.querySelector('.div1').addEventListener('click', function(){
//     console.log('DIV 1');
// }.false);

// document.querySelector('button').addEventListener('click', function(e){
//     console.log(e.target.innerText = 'Clicked!');
// }.false);


//stopPropagation() -> workes in both(Capturing and Bubbling) to stop the propagation it perticular point

// window.addEventListener('click', function(){
//     console.log('window');
// },true);

// document.addEventListener('click', function(){
//     console.log('document');
// },true);

// document.querySelector('.div2').addEventListener('click', function(e){
//     e.stopPropagation();
//     console.log('DIV 2')
// },true);

// document.querySelector('.div1').addEventListener('click', function(){
//     console.log('DIV 1');
// },true);

// document.querySelector('button').addEventListener('click', function(e){
//     console.log(e.target.innerText = 'Clicked!');
// },true);


//once: true -> it fire that part only once 

//default
// window.addEventListener('click', function(){
//     console.log('window');
// },false);

// document.addEventListener('click', function(){
//     console.log('document');
// },false);

// document.querySelector('.div2').addEventListener('click', function(){
//     console.log('DIV 2')
// },{once : true}); //{once : true}

// document.querySelector('.div1').addEventListener('click', function(){
//     console.log('DIV 1');
// },false);

// document.querySelector('button').addEventListener('click', function(e){
//     console.log(e.target.innerText = 'Clicked!');
// },false);

//to run his uncommand html and css parts
//preventDefault()

//for anchor tag <a> when we click on this refresh quick when we clicked.
//for prevention of the quick refresh use preventDefault

// window.addEventListener('click', function(){
//     console.log('window');
// },false);

// document.addEventListener('click', function(){
//     console.log('document');
// },false);

// document.querySelector('.div2').addEventListener('click', function(){
//     console.log('DIV 2')
// },false); 

// document.querySelector('.div1').addEventListener('click', function(){
//     console.log('DIV 1');
// },false);

// document.querySelector('.button').addEventListener('click', function(e){
//     e.preventDefault();
//     console.log(e.target.innerText = 'Clicked!');
// },false);