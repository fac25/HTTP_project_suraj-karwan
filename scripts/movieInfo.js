const id = window.location.search;

const movieInfoWrapper = document.getElementById("movie-info-main-container");

fetch(
  `https://api.themoviedb.org/3/movie/${id.slice(
    1
  )}?api_key=c2f06f2316756594bae1c15331319737`
)
  .then((res) => res.json())
  .then((movie) => {
    movieInfoWrapper.innerHTML = `
    <div class = "movie-info-wrapper">
        <img class="movie-info-poster" src="https://image.tmdb.org/t/p/w500${
          movie.poster_path
        }" alt="${movie.title}"/>
                <div class="movie-info">
                    <p class="title">${movie.title}</p>
                    <div class="duration">
                    <p >Duration:</p>
                    <span>${movie.runtime} mins</span>
                    </div>
                    <div class="language">
                    <p >Language:</p>
                    <span>${movie.original_language}</span>
                    </div>
                    <div class="seen">
                    <p >Seen:</p>
                    <span>${Math.floor(movie.popularity)}</span>
                    </div>
                    <div class="rate">
                    <p >Rate:</p>
                    <span>${movie.vote_average}</span>
                    </div>
                
                    <p class="movie-brief">${movie.overview}</p>
                </div>
            </div>
            <div class="movie-info-wallpaper">
                <img  src="https://image.tmdb.org/t/p/w500${
                  movie.backdrop_path
                }" alt="${movie.title}">
            </div>
            `;
  });
