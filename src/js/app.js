document.addEventListener("DOMContentLoaded", () => {
  [...document.querySelectorAll(".place")].forEach((el) => {
    const img = document.createElement("img");
    img.classList.add("characters", "visible");
    img.getAttribute("src");
    img.getAttribute("alt");
    img.setAttribute(
      "src",
      "https://github.com/netology-code/ahj-homeworks/raw/video/dom/pic/goblin.png"
    );
    img.setAttribute("alt", "Goblin photo");
    el.insertAdjacentElement("afterbegin", img);
  });
  let randomList = new Set();
  while ([...randomList].length < 16)
    randomList.add(Math.floor(Math.random() * 16));
  let n = 0;
  setInterval(() => {
    const images = [...document.querySelectorAll("img")];
    const activPosition = images.find(
      (el) => !el.classList.contains("visible")
    );
    const pos = [...randomList][n];
    if (activPosition) {
      activPosition.classList.add("visible");
      images.at(pos).classList.remove("visible");
    } else {
      images.at(pos).classList.remove("visible");
    }
    n >= 15 ? (n = 0) : n++;
  }, 1000);
});
