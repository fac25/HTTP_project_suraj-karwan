// Giphy API

// Giphy page layout

giphyLayout = (giphyData) => {
  for (i = 0; i < giphyData.data.length; i++) {
    const giphyContainer = document.createElement("div");
    const giphy = document.createElement("img");
    const giphyTitle = document.createElement("p");

    giphyContainer.classList.add("giphy-container");
    giphy.classList.add("giphy");
    giphyTitle.classList.add("giphy-title");

    giphy.src = `${giphyData.data[i].images.original.url}`;
    giphy.alt = `${giphyData.data[i].title}`;
    giphyTitle.innerHTML = `${giphyData.data[i].title}`;

    giphyContainer.append(giphy);
    giphyContainer.append(giphyTitle);

    giphyMainContainer.append(giphyContainer);
  }
};

const giphyMainContainer = document.getElementById("giphy-main-container");

// Get Random Giphys

fetch(
  "https://api.giphy.com/v1/gifs/trending?api_key=sGSQS2XOW32LeNaUXeW9c9UeWP4MiWtI&limit=25&rating=g"
)
  .then((res) => res.json())
  .then((giphies) => {
    giphyLayout(giphies);
  })
  .catch((error) => {
    console.log(error)
  });;

// Search for Giphys

const giphySearch = document.getElementById("user-search");
const giphyInputSearch = document.getElementById("user-input-search");

giphySearch.addEventListener("click",  () => {
  giphyMainContainer.innerHTML = "";
   fetch(
    `https://api.giphy.com/v1/gifs/search?api_key=sGSQS2XOW32LeNaUXeW9c9UeWP4MiWtI&q=${giphyInputSearch.value}&limit=25&offset=0&rating=g&lang=en`
  )
    .then((res) => res.json())
    .then((giphyData) => {
      giphyLayout(giphyData);
    })
    .catch((error) => {
      console.log(error)
    });;

  giphyInputSearch.value = "";
});
