let menu = document.getElementById("menu");
menu.addEventListener("click", (evt) => {
  const link = document.querySelector(".nav");

  if (link.style.display === "block") {
    link.style.display = "none";
  } else {
    link.style.display = "block";
  }

  evt.stopPropagation();
});
