// Movie API
//  The Movie Database API

let isLoaded = true;

const movieMainContainer = document.getElementById("movies");

// Fetch random Movies

  fetch(
    "https://api.themoviedb.org/3/discover/movie?api_key=6ee6d2c638a53edad93b9bf9fe334f43&page=1"
  )
    .then((res) => res.json())
    .then((randomMovies) => {
      movieLayout(randomMovies.results);
    })
    .catch((error) => {
      console.log(error);
    });

// Get Movies

movieLayout = (movies) => {
  const imgURL = "https://image.tmdb.org/t/p/w500";
  for (i = 0; i < movies.length; i++) {
    fetch(
      `https://api.themoviedb.org/3/movie/${movies[i].id}?api_key=c2f06f2316756594bae1c15331319737`
    )
      .then((res) => res.json())
      .then((movie) => {
        const movieContainer = document.createElement("div");
        movieContainer.classList.add("movie-wrapper");

        movieContainer.innerHTML = `
              <a href="../html/movie-info.html?${movie.id}" target="_blank" class="movie">
              <div class="movie-wrapper">
                <img class="movie-poster" src="${
                  movie.poster_path
                    ? imgURL + movie.poster_path
                    : "https://moviereelist.com/wp-content/uploads/2019/07/poster-placeholder.jpg"
                }" alt="${movie.title}"/>
                <div class="shade"></div>
                <span class="movie-popularity">${Math.trunc(
                  movie.popularity
                )}</span>
                <span class="movie-duration">${movie.runtime}mins</span>
                <div class="movie-detail-wrapper">
                  <span class="movie-language">${movie.original_language.toUpperCase()}</span>
                  <span class="movie-rate">${movie.vote_average}</span>
                </div>
                </div>
                <p class="movie-name">
                ${movie.title}
                <br>
                <span class="movie-release-year">${movie.release_date.slice(
                  0,
                  4
                )}</span>
                </p>
  
              </a>
        `;

        movieMainContainer.appendChild(movieContainer);

        movieContainer.addEventListener("click", () => {
          localStorage.setItem("moviename", `${movie.title}`);
        });
      });
  }
  isLoaded = false;
};

// Search for Movies

const searchMovie = document.getElementById("user-search");
const movieInputSearch = document.getElementById("user-input-search");

searchMovie.addEventListener("click", () => {
  movieMainContainer.innerHTML = "";
  fetch(
    `https://api.themoviedb.org/3/search/movie?api_key=6ee6d2c638a53edad93b9bf9fe334f43&query=${movieInputSearch.value}`
  )
    .then((res) => res.json())
    .then((movieData) => {
      movieLayout(movieData.results);
    })
    .catch((error) => {
      console.log(error);
    });

  movieInputSearch.value = "";
});

// Change pages

let pageCount = 1;

const changePage = (num) => {
  console.log(num);
  movieMainContainer.innerHTML = "";
  fetch(
    `https://api.themoviedb.org/3/discover/movie?api_key=6ee6d2c638a53edad93b9bf9fe334f43&page=${num}`
  )
    .then((res) => res.json())
    .then((randomMovies) => {
      movieLayout(randomMovies.results);
    })
    .catch((error) => {
      console.log(error);
    });
};

const handlePage = (e) => {
  changePage(e.innerHTML);
  pageCount = parseInt(e.innerHTML);
};

const nextPage = () => {
  pageCount += 1;
  changePage(pageCount);
};

const prevPage = () => {
  if (pageCount > 1) {
    pageCount -= 1;
    changePage(pageCount);
  }
};

//  Sort Movies

const handleSort = (e) => {
  movieMainContainer.innerHTML = "";
  fetch(
    `https://api.themoviedb.org/3/discover/movie?api_key=c2f06f2316756594bae1c15331319737&language=en-US&sort_by=${e.value}&page=1`
  )
    .then((res) => res.json())
    .then((randomMovies) => {
      movieLayout(randomMovies.results);
    })
    .catch((error) => {
      console.log(error);
    });
};

//  Sort by genre

const handleGenre = (e) => {
  movieMainContainer.innerHTML = "";
  fetch(
    `https://api.themoviedb.org/3/discover/movie?api_key=c2f06f2316756594bae1c15331319737&language=en-US&with_genres=${e.value}&page=1`
  )
    .then((res) => res.json())
    .then((randomMovies) => {
      movieLayout(randomMovies.results);
    })
    .catch((error) => {
      console.log(error);
    });
};
