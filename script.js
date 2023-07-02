
let jokeContainer = document.getElementById('joke');
let btn = document.getElementById('btn');
let url = "https://v2.jokeapi.dev/joke/Any?blacklistFlags=nsfw,religious,political,racist,sexist,explicit&type=single"

const jokeGenerator =()=>{
    fetch(url)
    .then(data => data.json())
    .then(item => {
        jokeContainer.textContent = `${item.joke}`;
    })
    .then(item => console.log(item))
}

btn.addEventListener('click',jokeGenerator)

jokeGenerator();