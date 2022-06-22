const button = document.getElementById("button")
const bubble = document.getElementById("speech")

function renderJoke(joke) {
    bubble.textContent = joke 
}

async function getJokes() {

    const url = "https://v2.jokeapi.dev/joke/Any?blacklistFlags=nsfw,religious,political,racist,sexist,explicit"

    let joke = " "

    try {
        const response = await fetch(url)
        const data = await response.json()

        if (data.setup) {
            joke = `${data.setup} ... ${data.delivery}`

        } else {
            joke = data.joke
        }

        console.log(joke)
    }
    catch(e) {
         console.log(e)
    }

    renderJoke(joke)

    tellMeAJoke(joke)
}

function tellMeAJoke(joke) {
    VoiceRSS.speech({
        key: '9696c7d1755848eebcffbd6379423b11',
        src: joke,
        hl: 'en-us',
        v: 'Mike',
        r: 0, 
        c: 'mp3',
        f: '44khz_16bit_stereo',
        ssml: false
    });
}

button.addEventListener("click", getJokes)