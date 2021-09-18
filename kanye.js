// fuction useing array function
const loadQuotes = () => {
  fetch("https://api.kanye.rest/")
    .then((res) => res.json())
    .then((data) => displayQuotes(data));
};

// const displayQuotes = (data) => {
//     const quoteElement = document.getElementById("quote");
//     const div = document.createElement('div');
//     // console.log(data);
//     div.innerHTML = `quote: ${data.quote}` //to ge string/property inside the quote
//     quoteElement.appendChild(div);
    
// }
const displayQuotes = data => {
    const quoteElement = document.getElementById('quote');
    quoteElement.innerText = data.quote;//to ge string/property inside the quote
}