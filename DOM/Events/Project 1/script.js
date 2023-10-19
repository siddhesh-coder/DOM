const btn = document.querySelector("#new-quote");
const quote = document.querySelector(".quote");
const person = document.querySelector(".person");

const quotes = [{
    quote: `"You have to dream before your dreams can come true."`,
    person: `A.P.J. Abdul Kalam`
},{
    quote: `"Our greatest glory is not in never falling, but in rising every time we fall."`,
    person: `Swami Vivekananda`
},{
    quote: `"Don't be pushed around by the fears in your mind. Be led by the dreams in your heart."`,
    person: `Roy T. Bennett`
},{
    quote: `"The best preparation for tomorrow is doing your best today." `,
    person: `H. Jackson Brown Jr. `
},{
    quote: `"The only way to do great work is to love what you do."`,
    person: `Steve Jobs`
}];

btn.addEventListener('click', function(){
    const random = Math.floor(Math.random() * quotes.length);
    
    quote.innerText = quotes[random].quote;
    person.innerText = quotes[random].person;
});