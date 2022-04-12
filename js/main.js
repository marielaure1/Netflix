let header = document.querySelector(".bg");
let top_num_active = document.querySelector(".top-num-active");
let top_title_active = document.querySelector(".top-title-active");
let tops = document.querySelectorAll(".top");
let titles = [
  "Perdus dans l'espace",
  "La Casa de Papel",
  "The Witcher",
  "Titans",
  "Squid Game",
  "Jojo's Bizarre Adventure",
  "Emily in Paris",
  "Maid",
  "Umbrella Academy",
  "Jurassic World: Camp Cretaceous",
];

let i = 1;

function sliderAuto() {
  document.getElementById("radio-" + i).checked == true;
  top_num_active.innerText = "0" + i;
  top_title_active.innerText = titles[i - 1];
  header.style.backgroundImage = `url("./images/top/top-${i}.jpg")`;

  i++;
  if (i > 10) {
    i = 1;
  }

}

let stopSliderAuto = setInterval(sliderAuto, 5000);

function sliderManual(top) {
    clearInterval(stopSliderAuto);
    top_num_active.innerText = "0" + top;
    top_title_active.innerText = titles[top - 1];
    header.style.backgroundImage = `url("./images/top/top-${top}.jpg")`;  
}


header.addEventListener("mouseleave", () => {
    location.reload();
})


