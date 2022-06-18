// The Movie DB

const API_KEY = "api_key=6ee6d2c638a53edad93b9bf9fe334f43";
const BASE_URL = "https://api.themoviedb.org/3";
const API_URL = BASE_URL + "/discover/movie?sort_by=popularity.desc&" + API_KEY;

// Gets Popular Movies
getMovies(API_URL);

function getMovies(url) {
  fetch(url)
    .then((res) => res.json())
    .then((data) => {
      console.log(data);
    });
}



// Giphy API

const giphyUrl = document.getElementsByClassName("giphy")
const giphyTitle = document.getElementsByClassName("giphy-title")

getGiphy = () => {
  fetch(
    "https://api.giphy.com/v1/gifs/trending?api_key=sGSQS2XOW32LeNaUXeW9c9UeWP4MiWtI&limit=25&rating=g"
  )
    .then((res) => res.json())
    .then((giphies) => {

      for(i = 0; i < giphies.data.length; i++){
        giphyUrl[i].src = `${giphies.data[i].images.original.url}`
        giphyTitle[i].innerHTML = `${giphies.data[i].title}`
      }

    });
};

getGiphy();
