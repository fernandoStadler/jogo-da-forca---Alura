function randomPosition(size) {
    return Math.round(Math.random() * (size - 1));
}
function draw(axiosX, axiosY, width, height, color) {
    const pincel = canvas.getContext('2d');
    pincel.fillStyle = color;
    pincel.fillRect(axiosX, axiosY, width, height);
}
function circle(axiosX, axiosY, size, color) {
    const pincel = canvas.getContext('2d');
    pincel.beginPath();
    pincel.strokeStyle = color;
    pincel.arc(axiosX, axiosY, size, 0, 2 * Math.PI);
    pincel.stroke()
}
function line(axiosX, axiosY, width, height, color) {
    const pincel = canvas.getContext('2d');
    pincel.beginPath();
    pincel.strokeStyle = color;
    pincel.moveTo(axiosX, axiosY);
    pincel.lineTo(width, height);
    pincel.stroke();
}


function randomWord() {
     words = Dictionary[index].word;
     clues = Dictionary[index].clue;
}

function modal(msg) {
    darkScreen.classList.remove("d-none");
    darkScreen.classList.add("d-flex");
    modal_alert.innerHTML = msg;
}
function restart() {
    randomWord();
    document.location.reload();
}

