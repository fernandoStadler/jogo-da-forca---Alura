let tip = document.getElementById('tip');
let latter = document.getElementById('latter');
var canvas = document.querySelector('canvas');


let size = Dictionary.length;
let index = randomPosition(size);
let tempWord = [];
let key={letter:""};


var letraTemporaria = key.letter;


function raffleWords() {
    let words = Dictionary[index].word;
    let clues = Dictionary[index].clue;
    tip.innerHTML = `dica: ${clues}`;
    
    for (var i = 0; i < words.length; i++) {
  
        latter.innerHTML += "*"
    }
}

function getKeyValue(keys) {
    
    return key.letter = latter.innerHTML = keys
}

raffleWords();

draw(3, 5, 4, 350, "blue");
draw(3, 5, 200, 4, "blue");
draw(200, 5, 3, 100, "blue");
// head
circle(200, 130, 25, "blue");
// body
draw(200, 154, 1, 100, "blue");
// left arm
line(150, 200, 200, 160, "blue");
// right arm
line(250, 200, 200, 160, "blue");
// right leg
line(200, 250, 250, 290, "blue");
// left leg
line(200, 250, 150, 290, "blue");

