const sketchpadParent = document.querySelector("#sketchpad");
const nrSquares = document.querySelector("#numberSquares");
const clearButton = document.querySelector("#clearButton");
let pad = [];  // how to clear array

clearButton.addEventListener("click", clearPad);
nrSquares.addEventListener("change", createPad);
sketchpadParent.addEventListener("mouseover", addColor, false)

function getNrSquares() {
    return nrSquares.value;
}

function clearPad() {
    for (let square of pad) {
        square.style.backgroundColor = "rgb(241, 189, 189)";
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
        newSquare.style.backgroundColor = "rgb(241, 189, 189)";
        newSquare.style.height = String(sketchpadParent.clientHeight/getNrSquares()) + "px";
        newSquare.style.width = String(sketchpadParent.clientWidth/getNrSquares()) + "px";
        pad.push(newSquare);
        sketchpadParent.appendChild(newSquare);
    }
    console.log(getNrSquares());
}

function addColor(event) {
    event.target.style.backgroundColor = "blue";
    sketchpadParent.style.backgroundColor = "white";
}

createPad();
