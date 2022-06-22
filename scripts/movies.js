// Movie API Box Office

// Movie API
movieLayout = (movieData) => {
  
  for (i = 0; i < movieData.results.length; i++) {
      // const {title, poster_path, vote_average, overview, original_language, release_date, popularity} = movieData;  
      let imgURL = "https://image.tmdb.org/t/p/w500";

      const movieContainer = document.createElement("div");
      movieContainer.classList.add('movie-wrapper')
      movieContainer.innerHTML = `
            <a href="../html/movie-info.html" target="_blank" class="movie">

              <img class="movie-poster" src="${movieData.results[i].poster_path? imgURL+movieData.results[i].poster_path : "https://moviereelist.com/wp-content/uploads/2019/07/poster-placeholder.jpg"}" alt="${movieData.results[i].title}"/>
              <div class="shade"></div>
              <span class="movie-popularity"><strong>R: </strong>${Math.trunc(movieData.results[i].popularity)}</span>
              <span class="movie-duration">125mins</span>
              <div class="movie-detail-wrapper">
                <span class="movie-language">${movieData.results[i].original_language.toUpperCase()}</span>
                <span class="movie-rate">${movieData.results[i].vote_average}</span>
                <span class="movie-age">12A</span>
              </div>

              <p class="movie-name">
              ${movieData.results[i].title}
              <br>
              <span class="movie-release-year"><em>${movieData.results[i].release_date}</em></span>
              </p>

            </a>
      `

      movieMainContainer.appendChild(movieContainer);
  }
};

const movieMainContainer = document.getElementById("movies");

// Movie fetch

fetch(
  "https://api.themoviedb.org/3/discover/movie?api_key=6ee6d2c638a53edad93b9bf9fe334f43&page=1"
)
  .then((res) => res.json())
  .then((data) => {
    console.log(data);
    movieLayout(data);
  })
  .catch((error) => {
    console.log(error)
  });;;


// Slide show elements

const slideShow = document.getElementById("slides");

fetch(
  "https://api.themoviedb.org/3/discover/movie?api_key=6ee6d2c638a53edad93b9bf9fe334f43&page=1"
)
  .then((res) => res.json())
  .then((data) => {
    // Slide show
    for (i = 0; i < 5; i++) {
      const slide = document.createElement("img");
      const slideWrapper = document.createElement("div");

      slide.src = `https://image.tmdb.org/t/p/w500${data.results[i].backdrop_path}`;
      slide.alt = data.results[i].title + " poster";
      slideWrapper.classList.add("slide");

      if (i === 0) {
        slideWrapper.classList.add("slide-1");
      }
      slideWrapper.append(slide);
      slideShow.append(slideWrapper);
    }
  })
  .catch((error) => {
    console.log(error)
  });;;

// Search for Movies

const movieSearch = document.getElementById("user-search");
const movieInputSearch = document.getElementById("user-input-search");

movieSearch.addEventListener("click", async () => {
  movieMainContainer.innerHTML = "";
  await fetch(
    `https://api.themoviedb.org/3/search/movie?api_key=6ee6d2c638a53edad93b9bf9fe334f43&query=${movieInputSearch.value}`
  )
    .then((res) => res.json())
    .then((movieData) => {
      movieLayout(movieData);
    })
    .catch((error) => {
      console.log(error)
    });;;

  movieInputSearch.value = "";
});

// HTML Movie JS
/* 
// Movies elements

const moviePoster = document.getElementsByClassName("movie-poster");
const movieName = document.getElementsByClassName("movie-name");
const movieReleaseYear = document.getElementsByClassName("movie-release-year");
const moviePopularity = document.getElementsByClassName("movie-popularity");
const movieDuration = document.getElementsByClassName("movie-duration");
const movieRate = document.getElementsByClassName("movie-rate");
const movieLanguage = document.getElementsByClassName("movie-language");
const movieAge = document.getElementsByClassName("movie-age");

getMovie = async () => {
  await fetch(
    "https://api.themoviedb.org/3/discover/movie?api_key=6ee6d2c638a53edad93b9bf9fe334f43&page=1"
  )
    .then((res) => res.json())
    .then((data) => {
      for (i = 0; i < data.results.length; i++) {
        const imgURL = `https://image.tmdb.org/t/p/w500${data.results[i].poster_path}`;

        const movieTitle = data.results[i].title;
        const movieDate = data.results[i].release_date;
        const moviePopular = data.results[i].popularity;
        const movieLength = "";
        const movieRating = data.results[i].vote_average;
        const movieLan = data.results[i].original_language;
        const movieAgeLimit = "";

        // Display Img
        moviePoster[i].src = imgURL;
        moviePoster[i].alt = movieTitle;
        // Display Title
        movieName[i].innerHTML = movieTitle;
        // Display Release Date

        // Display Movie Popularity

        // Display Movie Duration

        // Display Movie Rate
        movieRate[i].innerHTML = movieRating;
        // Display Movie Language
        movieLanguage[i].innerHTML = movieLan.toUpperCase();
        // Display Movie Age Limit

        console.log(
          movieTitle,
          movieDate,
          moviePopular,
          movieLength,
          movieRating,
          movieLan,
          movieAgeLimit
        );
      }

      console.log(data.results);
    });
};

getMovie();
*/

