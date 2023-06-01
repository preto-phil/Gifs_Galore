//// Giphy App

// Declare img variable and link to img
const img = document.querySelector('img');

// Declare variable equal to search input
let searchInputValue = 'dogs';
const searchBtn = document.querySelector('#search-btn');

searchBtn.addEventListener('click', () => {
  const rawSearchValue = document.querySelector('#search').value;
  searchInputValue = encodeURIComponent(rawSearchValue.trim());
});

function fetchRandomGif() {
  fetch(`https://api.giphy.com/v1/gifs/translate?api_key=mGWay0MRfopcreOrjHhrouhIc3lMAXlX&s=${searchInputValue}`, { mode: 'cors' })
  .then(response => {
    if (!response.ok) {
      throw new Error('Network response was not ok');
    }
    return response.json();
  })
  .then(response => {
    img.src = response.data.images.original.url;
  })
  .catch(err => {
    console.error(`An error occurred while fetching the GIF: ${err}`)
  });
}

// Fetch and display Gif initially
fetchRandomGif();

// Fetching data using fetch
const newGifBtn = document.querySelector('#new-gif-btn');
newGifBtn.addEventListener('click', fetchRandomGif)


function openGithub() {
  const githubIcon = document.getElementById('github-icon');
  githubIcon.addEventListener('click', () => {
    window.open('https://github.com/preto-phil');
  });
}






/* function fetchGIF() {
  fetch('https://api.giphy.com/v1/gifs/translate?api_key=mGWay0MRfopcreOrjHhrouhIc3lMAXlX&s=dogs', { mode: 'cors' })
  .then(function(response) {
    return response.json();
  })
  .then(function(response) {
    img.src = response.data.images.original.url;
  })
  .catch((err) => {
    console.error(`You\' gone fucked up: ${err}`)
  });
}

function openGithub() {
  const githubIcon = document.getElementById('github-icon');
  githubIcon.addEventListener('click', () => {
    window.open('https://github.com/preto-phil');
  });
} */

openGithub();


/* //// API form Giphy with key
'https://api.giphy.com/v1/gifs/translate?api_key=YWyS1bNKM0DAJRUR9igAsKY3YlkK9BrPl&s=cats'





// Weather App

fetch('https://api.weatherapi.com/v1/current.json?key=e0d3c7ebf93b4fb48c1121421233105&q=thabazimbi', {
  mode: 'cors',
})
  .then(function(response) {
    // successful response
  })
  .catch(function(err) {
    // error
  }); */