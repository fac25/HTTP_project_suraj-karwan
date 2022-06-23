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
    console.log(error);
  });



// Movie API

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
              <a href="./html/movie-info.html" target="_blank" class="movie">
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
};

const movieMainContainer = document.getElementById("movies");

// Movie fetch

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




//  Box office


// const boxOffice = document.getElementById("box-office")

// fetch(
//   "https://api.themoviedb.org/3/movie/popular?api_key=c2f06f2316756594bae1c15331319737&language=en-US&page=1"
// )
//   .then((res) => res.json())
//   .then((randomMovies) => {
//     for (i = 0; i < 5; i++) {
//       const boxOfficeContainer = document.createElement("div");
//       const moviePoster = document.createElement("img");
//       const movieTitle = document.createElement("p");
//       const movieRank = document.createElement("p")
//       const boxOfficeBudget = document.createElement("div");
//       const movieBudget = document.createElement("span")
//       const movieGross = document.createElement("span")

//       boxOfficeContainer.classList.add("box-office-poster");
//       movieTitle.classList.add("box-office-name")
//       movieRank.classList.add("box-office-num")
//       boxOfficeBudget.classList.add("box-office-details")
      
//       movieRank.innerHTML = i + 1;

//       fetch(
//         `https://api.themoviedb.org/3/movie/${randomMovies.results[i].id}?api_key=c2f06f2316756594bae1c15331319737`
//       )
//         .then((res) => res.json())
//         .then((movie) => {
//           console.log(movie)
//           moviePoster.src = `https://image.tmdb.org/t/p/w500${movie.poster_path}`

//           movieTitle.innerHTML = movie.title
//           movieBudget.innerHTML = "Budget: " + movie.budget
//           movieGross.innerHTML = ` \\ Gross: ${movie.revenue}`

//           boxOfficeContainer.append(moviePoster)
//           boxOfficeContainer.append(movieRank)
//           boxOfficeBudget.append(movieTitle)
//           boxOfficeBudget.append(movieBudget)
//           boxOfficeBudget.append(movieGross)
//           boxOfficeContainer.append(boxOfficeBudget)
//         });

//         boxOffice.append(boxOfficeContainer)
//     }
//   });
