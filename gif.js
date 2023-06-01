const img = document.querySelector('img');
const failDiv = document.querySelector('.fail-msg');
const placeholderImageURL = './Images/8tyty.jpg';

let searchInputValue = 'dogs';
const searchBtn = document.querySelector('#search-btn');
searchBtn.addEventListener('click', () => {
  const rawSearchValue = document.querySelector('#search').value;
  searchInputValue = encodeURIComponent(rawSearchValue.trim());
  fetchRandomGif();
});

const newGifBtn = document.querySelector('#new-gif-btn');
newGifBtn.addEventListener('click', fetchRandomGif);

function fetchRandomGif() {
/*   img.src = placeholderImageURL; */

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
    img.src = placeholderImageURL;
    failDiv.textContent = "Oops! An error occurred while fetching the GIF..."
    console.error(`An error occurred while fetching the GIF: ${err}`)
  });
}

fetchRandomGif();

function openGithub() {
  const githubIcon = document.getElementById('github-icon');
  githubIcon.addEventListener('click', () => {
    window.open('https://github.com/preto-phil');
  });
}

openGithub();