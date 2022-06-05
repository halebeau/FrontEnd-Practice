const prev = document.getElementById("prev");
const next = document.getElementById("next");
const slider = document.querySelector(".slider");
const imgs = document.querySelector(".slider img");

let index = 0;
let width = imgs[index].clientWidth;

next.addEventListener("click", () => {
  index ++;

  slider.style.transform = `translate(${-index * (width + 10)}px)`;

  if(index === imgs.length -1) {
    next.classList.add("disable");
  }else {
    prev.classList.remove("disable")
  }
});

prev.addEventListener("click", () => {
  index--;

  slider.style.transform = `translate(${-index * (width + 10)}px)`

  if (index === 0) {
    prev.classList.add("disable")
  } else {
    next.classList.remove("disable")
  }
})

prev.classList.add("disable")