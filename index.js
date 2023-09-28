const themeIcon = document.querySelector(".fa-sun");

function changeTheme() {
  // changing the body apperance from the button click
  document.querySelector("html").classList.toggle("light");
  const theme = document.documentElement.classList.length - 1;

  // Changing the value of localStorage theme on every click
  localStorage.setItem("theme", document.documentElement.classList[theme]);

  themeIcon.classList.toggle("fa-moon");
}

// Initiating a change after button click
themeIcon.addEventListener("click", () => changeTheme());

// Initiating a change after keypress
document.body.addEventListener("keydown", (e) => {
  if (e.shiftKey) {
    if (e.code === "KeyT") {
      changeTheme();
    }
  }
});

// Checking browser storage for any saved theme data
document.body.onload = () => {
  let chosenTheme = localStorage.getItem("theme");

  document.documentElement.setAttribute("class", chosenTheme);
};

/////Chux Dennis/////
