/*  key  */

const keyDiv = document.querySelector("#key");
let color;

document.addEventListener('keydown', function (event) {
    if (event.key === 'a' || event.key === "A") {
        keyDiv.style.backgroundColor = "pink";
    } else if (event.key === 's' || event.key === "A") {
        keyDiv.style.backgroundColor = "orange";
    } else if (event.key === 'd' || event.key === "D") {
        keyDiv.style.backgroundColor = "skyblue";
    } else if (event.key === 'q' || event.key === "Q") {
        createNewDiv("purple");
    } else if (event.key === 'w' || event.key === "W") {
        createNewDiv("gray");
    } else if (event.key === 'e' || event.key === "E") {
        createNewDiv("brown");
    }
});

function createNewDiv(color) {

    const newDiv = document.createElement("div");
    newDiv.id = "newKey";
    newDiv.style.gap = "10px";
    newDiv.style.width = "200px";
    newDiv.style.height = "200px";
    newDiv.style.backgroundColor = color;
    newDiv.style.border = "2px solid black";
    newDiv.style.margin = "15px";
    newDiv.style.padding = "auto";

    document.body.appendChild(newDiv);
}

/*  FIN  */