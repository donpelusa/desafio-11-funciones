/*  4_colores.html  */

const blue = document.getElementById("blue")
const red = document.getElementById("red")
const green = document.getElementById("green")
const yellow = document.getElementById("yellow")

const changeColor = (event) => {
    event.target.style.backgroundColor = 'black';
};

blue.addEventListener("click", changeColor)
red.addEventListener("click", changeColor)
green.addEventListener("click", changeColor)
yellow.addEventListener("click", changeColor)

/*  Fin  */