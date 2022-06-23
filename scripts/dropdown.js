// Drop down button

const dropdown = document.getElementById("dropdown-wrapper");
const navWrapper = document.getElementById("nav-wrapper");

dropdown.addEventListener("click", (e) => {
  if (navWrapper.style.display === "block") {
    navWrapper.style.display = "none";
  } else {
    navWrapper.style.display = "block";
  }
});
