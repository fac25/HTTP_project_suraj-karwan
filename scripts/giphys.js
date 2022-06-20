// Giphy API

const giphyMainContainer = document.getElementById("giphy-main-container");

getGiphy = async () => {
  await fetch(
    "https://api.giphy.com/v1/gifs/trending?api_key=sGSQS2XOW32LeNaUXeW9c9UeWP4MiWtI&limit=25&rating=g"
  )
    .then((res) => res.json())
    .then((giphies) => {
      for (i = 0; i < giphies.data.length; i++) {
        const giphyContainer = document.createElement("div");
        const giphy = document.createElement("img");
        const giphyTitle = document.createElement("p");

        giphyContainer.classList.add("giphy-container");
        giphy.classList.add("giphy");
        giphyTitle.classList.add("giphy-title");

        giphy.src = `${giphies.data[i].images.original.url}`;
        giphyTitle.innerHTML = `${giphies.data[i].title}`;

        giphyContainer.append(giphy);
        giphyContainer.append(giphyTitle);

        giphyMainContainer.appendChild(giphyContainer);
      }
    });
};

getGiphy();
