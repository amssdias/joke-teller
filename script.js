const APIKEY = "paste_your_api_key_here";
const button = document.getElementById("button");
const audioElement = document.getElementById("audio");

// Disable/Enable button
function toggleButton() {
    button.disabled = !button.disabled;
}

// Passing Joke to VoiceRSS API
function sayJoke(joke) {
    VoiceRSS.speech({
        key: APIKEY,
        src: joke,
        hl: 'en-us',
        v: 'Linda',
        r: 0,
        c: 'mp3',
        f: '44khz_16bit_stereo',
        ssml: false
    });
}

// Get Jokes from Joke API
async function getJokes() {

    const apiUrl = "https://v2.jokeapi.dev/joke/Programming";

    try {

        const response = await fetch(apiUrl);
        const data = await response.json();
        return data.setup ? `${data.setup} ... ${data.delivery}` : data.joke;

    } catch (error) {
        console.error(error);
        return "Sorry, couldn't get any joke, try again."
    }
}

async function tellJoke() {
    // Get Joke
    const joke = await getJokes();

    // Disable button
    toggleButton();

    // Tell joke
    sayJoke(joke);
}

button.addEventListener("click", tellJoke);
audioElement.addEventListener("ended", toggleButton);
