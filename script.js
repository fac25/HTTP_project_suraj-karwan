      // The Movie DB

      const API_KEY = "api_key=6ee6d2c638a53edad93b9bf9fe334f43";
      const BASE_URL = "https://api.themoviedb.org/3";
      const API_URL = BASE_URL + "/discover/movie?" + API_KEY + "&page=3";
      
      const IMG_URL = "https://image.tmdb.org/t/p/w500";

      // Main Page
      
      const mainHome = document.getElementById('mainHome')
      
      // Gets Popular Movies
      getMovies(API_URL);
      
      function getMovies(url) {
        fetch(url)
          .then((res) => res.json())
          .then((data) => {
            console.log(data.results);
            showMovies(data.results);
          });
      }
      
      function showMovies(data) {
        mainHome.innterHTML = '';
      
        data.forEach(movie => {
          const{title, poster_path, vote_average, overview, release_date} = movie;
          const movieEl = document.createElement('div');
          movieEl.classList.add('movie')
          movieEl.innerHTML = `
          <img src="${poster_path? IMG_URL+[poster_path]: "https://moviereelist.com/wp-content/uploads/2019/07/poster-placeholder.jpg"}" alt="${title}" />

          <div class="movie-info">
            <p>${title}</p>
            <span class="${getColor(vote_average)}">${vote_average}</span><br>
            <span>${release_date}</span>
          </div>
          `
          mainHome.appendChild(movieEl);
        })
      }

      // Rating

      function getColor(vote) {
        if (vote >= 8) {
          return 'green'
        } 
        else if (vote >= 5) {
          return 'orange'
        } 
        else {
          return'red'
        }
      }
      

