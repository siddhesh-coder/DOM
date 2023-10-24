const accordion = document.getElementsByClassName('content-container');

for (let i = 0; i < accordion.length; i++) {
    accordion[i].addEventListener('click', function () {
        if (this.classList.contains('active')) {
            // If the clicked element is already open, close it
            this.classList.remove('active');
        } else {
            // If the clicked element is not open, close all others and then open it
            for (let j = 0; j < accordion.length; j++) {
                accordion[j].classList.remove('active');
            }
            this.classList.add('active');
        }
    });
}
