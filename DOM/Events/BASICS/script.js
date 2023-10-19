//Event Listeners

//element.addEventListeners("click", function, boolean); boolean(by default false) use if require

const buttonTwo = document.querySelector('.btn-2');

function alertBtn(){
    alert('Button 2 clicked!')
};

buttonTwo.addEventListener("click", alertBtn);

//Mouseover

const changeBgColor = document.querySelector('.box-3');

function bgColor(){
    changeBgColor.style.backgroundColor = 'blue';
};

changeBgColor.addEventListener("mouseover", bgColor);