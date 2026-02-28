// console.log("Hello World")

// Select HTML elements
const header = document.querySelector("#header");
const changeHeaderButton = document.querySelector("#change-header-button");
const changeThemeButton = document.querySelector("#change-theme-button");
const img1 = document.querySelector("#img1");
const img2 = document.querySelector("#img2");
const img3 = document.querySelector("#img3");

// Change header with button click (original from tutorial)
    // changeHeaderButton.addEventListener("click", () => {
    //   header.innerHTML = "Click the image to reveal another one";
    // });

// Change header with button click (Toggle)
changeHeaderButton.addEventListener("click", () => {
    if (header.textContent == "Images of Pokémon builds in Mincraft") {
        header.textContent = "Click the image to reveal another one"
    } else {
        header.textContent = "Images of Pokémon builds in Mincraft"
    }
})

 



// Toggle color theme

// Create function for changing button text
function changeButtonText() {
  if (document.body.classList.contains("dark")) {
    changeThemeButton.textContent = "Switch to Light Theme";
  } else {
    changeThemeButton.textContent = "Switch to Dark Theme";
  }
}

// Click event on button
changeThemeButton.addEventListener("click", () => {
  // add/remove dark class to body
  document.body.classList.toggle("dark");
  changeButtonText();
});

// Toggle image visibility
img1.addEventListener("click", () => {
  img2.classList.remove("hidden");
});

img2.addEventListener("click", () => {
  img3.classList.remove("hidden");
});
