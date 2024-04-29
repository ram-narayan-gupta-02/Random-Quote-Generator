const text = document.querySelector("#quote");
const author = document.querySelector("#author");
const tweetButton = document.querySelector("#tweet");

const getNewQuote = async () => {
    let url = "https://type.fit/api/quotes";

    const response = await fetch(url);
    console.log(typeof response);
    const allQuotes = await response.json();
    const indx = Math.floor(Math.random() * allQuotes.length);
    const quote = allQuotes[indx].text;
    const auth = allQuotes[indx].author;

    if (auth == null) {
        author = "Anonymous";
    }
    text.innerHTML = quote;
    author.innerHTML = "~ " + auth;

    tweetButton.href = "https://twitter.com/intent/tweet?text=" + quote + " ~ " + auth;
}
getNewQuote();