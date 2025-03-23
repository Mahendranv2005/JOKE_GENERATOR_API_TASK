const button = document.getElementById("button");
const jokeContent = document.getElementById("jokeContent");
const joke = document.getElementById("joke");

button.onclick = () => {
    axios.get("https://official-joke-api.appspot.com/random_joke")
    .then(response => {
        button.textContent = "Next Joke";
        joke.textContent = "";
        jokeContent.textContent = response.data.setup;

        setTimeout(() => {
            joke.textContent = response.data.punchline;
        }, 1500);
    })
    .catch(error => {
        console.log(error);
        jokeContent.textContent = "Oops! Something went wrong. Try again.";
    });
};
