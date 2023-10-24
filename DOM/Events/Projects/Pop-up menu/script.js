let open = document.getElementById('button_1');
let pop = document.getElementById('modal-container');
let close = document.getElementById('close-btn');

open.addEventListener('click', function(){
    pop.style.display = 'block';
});

close.addEventListener('click', function(){
    pop.style.display = 'none';
});

window.addEventListener('click', function(e) {
    if (e.target === pop) {
        pop.style.display = 'none';
    }
});