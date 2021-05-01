///G2 Reviews
let slider = document.getElementById("slider");
let innerSlider = document.getElementById("slider-inner");
let pressed = false;
let startx;
let x;

slider.addEventListener("mousedown", (e) => {
  pressed = true;
  startx = e.offsetX - innerSlider.offsetLeft;
  console.log(startx);
  slider.style.cursor = "grabbing";
});

slider.addEventListener("mouseenter", () => {
  slider.style.cursor = "grab";
});

slider.addEventListener("mouseup", () => {
  slider.style.cursor = "grab";
});

window.addEventListener("mouseup", () => {
  pressed = false;
});

slider.addEventListener("mousemove", (e) => {
  if (!pressed) return;
  e.preventDefault();

  x = e.offsetX;

  innerSlider.style.left = `${x - startx}px`;
  checkBoundary();
});

function checkBoundary()  {
  let outer = slider.getBoundingClientRect();
  let inner = innerSlider.getBoundingClienttRect();

  if (parseInt(innerSlider.style.left) > 0) {
    innerSlider.style.left = '0px';
  }
};

checkBoundary();
