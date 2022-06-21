// Giphy API

// Giphy page layout

giphyLayout = (giphyData) =>{
  for (i = 0; i < giphyData.data.length; i++) {
    const giphyContainer = document.createElement("div");
    const giphy = document.createElement("img");
    const giphyTitle = document.createElement("p");

    giphyContainer.classList.add("giphy-container");
    giphy.classList.add("giphy");
    giphyTitle.classList.add("giphy-title");

    giphy.src = `${giphyData.data[i].images.original.url}`;
    giphyTitle.innerHTML = `${giphyData.data[i].title}`;

    giphyContainer.append(giphy);
    giphyContainer.append(giphyTitle);

    giphyMainContainer.append(giphyContainer);
  }
}

const giphyMainContainer = document.getElementById("giphy-main-container");

// Get Random Giphys

fetch(
  "https://api.giphy.com/v1/gifs/trending?api_key=sGSQS2XOW32LeNaUXeW9c9UeWP4MiWtI&limit=25&rating=g"
)
  .then((res) => res.json())
  .then((giphies) => {
    giphyLayout(giphies)
  });

// Search for Giphys

const giphySearch = document.getElementById("giphy-search");
const giphyInputSearch = document.getElementById("giphy-input-search");

giphySearch.addEventListener("click", async() => {
  await fetch(
    `https://api.giphy.com/v1/gifs/search?api_key=sGSQS2XOW32LeNaUXeW9c9UeWP4MiWtI&q=${giphyInputSearch.value}&limit=25&offset=0&rating=g&lang=en`
  ).then((res) => res.json())
  .then(giphyData => {
    giphyLayout(giphyData)
  })

  giphyInputSearch.value = "";
});
