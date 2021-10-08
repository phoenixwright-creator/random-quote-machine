const quotes = [
    {text: `"A rose by any other name would smell as sweet."`, author: "William Shakespeare"},
    {text: `"All that glitters is not gold."`, author: "William Shakespeare"},
    {text: `"All the world’s a stage, and all the men and women merely players."`, author: "William Shakespeare"},
    {text: `"Ask not what your country can do for you; ask what you can do for your country."`, author: "John Kennedy"},
    {text: `"Ask, and it shall be given you; seek, and you shall find."`, author: "The Bible"},
    {text: `"Eighty percent of success is showing up."`, author: "Woody Allen"},
    {text: `"Elementary, my dear Watson."`, author: "Sherlock Holmes"},
    {text: `"For those to whom much is given, much is required."`, author: "The Bible"},
    {text: `"Frankly, my dear, I don't give a damn."`, author: "Rhett Butler"},
    {text: `"Genius is one percent inspiration and ninety-nine percent perspiration."`, author: "Thomas Edison"},
];

const quoteText = document.getElementById("text");
const authorName = document.getElementById("author");
const newQuoteBtn = document.getElementById("new-quote");
let randomNum = Math.floor(Math.random()*10);
quoteText.innerHTML = quotes[randomNum]["text"];
authorName.innerHTML = quotes[randomNum]["author"];

function changeQuote(){
    let newRandomNum = 0;
    do {
        newRandomNum = Math.floor(Math.random()*10);
    } while(newRandomNum===randomNum);
    
    quoteText.innerHTML = quotes[newRandomNum]["text"];
    authorName.innerHTML = quotes[newRandomNum]["author"];
}

newQuoteBtn.addEventListener("click", changeQuote);
