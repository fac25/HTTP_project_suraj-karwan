// Movie API Box Office

// Movie API

const moviePoster = document.getElementsByClassName("movie-poster");
const movieName = document.getElementsByClassName("movie-name");
const movieReleaseYear = document.getElementsByClassName("movie-release-year");
const moviePopularity = document.getElementsByClassName("movie-popularity");
const movieDuration = document.getElementsByClassName("movie-duration");
const movieRate = document.getElementsByClassName("movie-rate");
const movieLanguage = document.getElementsByClassName("movie-language");
const movieAge = document.getElementsByClassName("movie-age");

getMovie = () => {
  fetch(
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


