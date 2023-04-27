const pig = document.getElementById("pig");
const bee = document.getElementById("bee");
const flower = document.getElementById("flower");
const water = document.getElementById("water");
const message = document.getElementById("message");

let pigJump = false;
let pigFalling = false;
let pigTop = parseInt(
  window.getComputedStyle(pig).getPropertyValue("top")
);
let beeLeft = parseInt(
  window.getComputedStyle(bee).getPropertyValue("left")
);
let flowerLeft = parseInt(
  window.getComputedStyle(flower).getPropertyValue("left")
);
let waterTop = parseInt(
  window.getComputedStyle(water).getPropertyValue("top")
);

document.addEventListener("keydown", (event) => {
  if (event.code === "Space" && !pigJump && !pigFalling) {
    pigJump = true;
    let jumpInterval = setInterval(() => {
      if (pigTop >= 200) {
        clearInterval(jumpInterval);
        pigFalling = true;
      }
      pigTop += 20;
      pig.style.top = pigTop + "px";
    }, 30);
  }
});

setInterval(() => {
  beeLeft -= 10;
  bee.style.left = beeLeft + "px";
  if (beeLeft <= -100) {
    beeLeft = 1100;
  }

  flowerLeft -= 8;
  flower.style.left = flowerLeft + "px";
  if (flowerLeft <= -100) {
    flowerLeft = 1100;
  }


  if (pigJump) {
    pigTop -= 5;
    pig.style.top = pigTop + "px";
  }
  if (pigFalling) {
    pigTop += 5;
    pig.style.top = pigTop + "px";
    if (pigTop >= 550) {
      pigFalling = false;
      pigJump = false;
      pigTop = 100;
      pig.style.top = pigTop + "px";
      message.innerHTML = "Você Perdeu! Reiniciando em 2 segundos...";
      setTimeout(() => {
        location.reload();
      }, 2000);
    }
  }

  if (flowerLeft <= 150 && flowerLeft >= 50 && pigTop >= 350) {
    pigJump = false;
    pigFalling = false;
    pigTop = 100;
    pig.style.top = pigTop + "px";
    message.innerHTML = "Você Perdeu! Reiniciando em 2 segundos...";
    setTimeout(() => {
      location.reload();
    }, 2000);
  }

  waterTop += 3;
  water.style.top = waterTop + "px";
  if (waterTop >= 650) {
    waterTop = 0;
  }
}, 30);