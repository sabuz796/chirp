// change btn text for mobile screen

const btnText = document.querySelector(".main-btn-text");

function updateText() {
  const windowWidth = window.innerWidth;

  if (windowWidth <= 576) {
    btnText.textContent = "Sign in Twitter";
  } else {
    btnText.textContent = "Sign in with Twitter";
  }
}

// Call the function initially and whenever the window is resized
updateText();
window.addEventListener("resize", updateText);

// nav menu

const hamburgerMenu = document.querySelector(".hamburger");
const navList = document.querySelector(".nav-list");

hamburgerMenu.addEventListener("click", () => {
  navList.classList.toggle("open");
});
