[voicers]: https://www.voicerss.org/
[voicerssApi]: https://www.voicerss.org/api/
[jokeApi]: https://sv443.net/jokeapi/v2/

![HTML5](https://img.shields.io/badge/html5-%23E34F26.svg?style=for-the-badge&logo=html5&logoColor=white)
![CSS3](https://img.shields.io/badge/css3-%231572B6.svg?style=for-the-badge&logo=css3&logoColor=white)
![JavaScript](https://img.shields.io/badge/javascript-%23323330.svg?style=for-the-badge&logo=javascript&logoColor=%23F7DF1E)

# Joke Teller

<img src="joke-teller.png">

This fun application brings joy with a simple click, fetching a random joke from an API and then using a text-to-speech service to read it aloud. It's a great way to lighten the mood, accessible to everyone who needs a good laugh.

## :hammer: Getting started

To enjoy the full experience of Joke Teller, you'll need an API key from VoiceRSS for the text-to-speech functionality. Here's a step-by-step guide to get you set up:

### Step 1: Register for an API Key

1. Visit [VoiceRSS][voicers] to register for an account.
2. Once registered, navigate to the API key section of your account dashboard.
3. Copy the provided API Key; you'll need this to enable the text-to-speech feature in the project.

### Step 2: Set up the project locally

1. Download the project by either using the git clone command or downloading the ZIP file directly from GitHub.
    - If you're cloning the repository, open your terminal and run:
    ```git
        git clone https://github.com/amssdias/joke-teller.git
    ```
    - If downloading the ZIP, simply extract it to your preferred location on your computer.

### Step 3: Configure your API Key

1. Navigate to the project directory and open the script.js file in your favorite code editor.
2. Locate the APIKEY variable declaration and replace <YourApiKey> with your VoiceRSS API key. Ensure you keep the quotation marks around the key:
```javascript
const APIKEY = "paste_your_api_key_here";
```

### Step 4: Enjoy the Application

1. Find the index.html file in the project directory.
2. Double-click on index.html to open it in your web browser.
3. Click the button to fetch and listen to jokes. Have some laughs! :smile:


## API Reference

This project makes use of the following APIs:

- [Joke API][jokeApi]
- [Text-to-Speech API][voicerssApi]

For more information, please refer to the API documentation at their respective links.
