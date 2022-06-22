const button = document.getElementById("button")
const bubble = document.getElementById("speech")
const header = document.getElementById("header")

function renderJoke(joke, header) {
    bubble.textContent = joke
    header.textContent = header 
}

async function getJokes() {

    const url = "https://api.adviceslip.com/advice"

    let joke = ""

    let header = ""

    try {
        const response = await fetch(url)
        const data = await response.json()

        if (data.slip.id) {
            joke = `${data.slip.advice}`
            header = `Advice #${data.slip.id}`

        } else {
            joke = data.joke
        }

        console.log(joke)
    }
    catch(e) {
         console.log(e)
    }

    renderJoke(joke, header)

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