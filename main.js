const sketchpadParent = document.querySelector("#sketchpad");
const nrSquares = document.querySelector("#numberSquares");
const clearButton = document.querySelector("#clearButton");
const colors = document.querySelector("#colors");
const colorInput = document.querySelector("#colorInput");
const padBackgroundColor = "rgb(255, 255, 255)";
let colorActive = false;
let pad = [];
let colorType = colors.value;

clearButton.addEventListener("click", clearPad);
nrSquares.addEventListener("change", createPad);
sketchpadParent.addEventListener("mouseover", addColor, false);
sketchpadParent.addEventListener("mousedown",activateDrawing);
sketchpadParent.addEventListener("mouseup", deactivateDrawing);
colors.addEventListener("change", changeColors);


function activateDrawing () {
    colorActive=true;
}

function deactivateDrawing () {
    colorActive=false;
}

function getNrSquares() {
    return nrSquares.value;
}

function clearPad() {
    for (let square of pad) {
        square.style.backgroundColor = padBackgroundColor;
    }
}

function removeSquares() {
    for (let square of pad) {
        sketchpadParent.removeChild(square);
    }
    pad = [];
}

function createPad() {
    removeSquares();
    for (let i=0; i< getNrSquares()**2; i++) {
        let newSquare = document.createElement("div");
        newSquare.style.backgroundColor = padBackgroundColor;
        newSquare.style.height = String(sketchpadParent.clientHeight/getNrSquares()) + "px";
        newSquare.style.width = String(sketchpadParent.clientWidth/getNrSquares()) + "px";
        pad.push(newSquare);
        sketchpadParent.appendChild(newSquare);
    }
}

function addColor(event) {
    if (colorActive) {
        if (colorType == "multi") {
            let r = Math.floor(Math.random()*256);
            let g = Math.floor(Math.random()*256);
            let b = Math.floor(Math.random()*256);
            event.target.style.backgroundColor = `rgb(${r},${g},${b})`;
        }
        else if (colorType == "one") {
            event.target.style.backgroundColor = colorInput.value;
        }

        sketchpadParent.style.backgroundColor = "white";
    }
}

function changeColors(event) {
    colorType = "one";
    if (event.target.value == "multi") {
        colorType = "multi";
    }
}

createPad();
