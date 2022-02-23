const loadQuote = () => {
    fetch('https://api.kanye.rest/')
        .then(res => res.json())
        .then(quots => displayQuots(quots))
}

const displayQuots = (newQuote) => {

    const displayArea = document.getElementById('quots-area');
    displayArea.innerText = newQuote.quote;
}
