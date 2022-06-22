      // Movies Pageination

      const next = document.querySelector('.next-page');
      let num = 1;
      const prev = document.querySelector('.prev-page');

      // // Next page

      next.addEventListener('click', () => {
              num++;
              changePage();
          })

      function changePage() {
        movieMainContainer.innerHTML = "";

        if(true) {
          fetch(
            `https://api.themoviedb.org/3/discover/movie?api_key=6ee6d2c638a53edad93b9bf9fe334f43&page=${num}`
          )
            .then((res) => res.json())
            .then((data) => {
              console.log(data);
              movieLayout(data);
            });
        }
      }

      // // Previous page

      prev.addEventListener('click', () => {
        if(num > 1) {
        num--;
        changePage();
        } else {
          return;
        }
      })
