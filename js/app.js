


for (position = 0; position < words.length; position++) {
    let span = document.createElement("span");
    span.setAttribute('id', position);
    let div = document.getElementById("word");
    div.appendChild(span);
}


for (position = 0; position < key.length; position++) {
    let button = document.createElement("button");
    let letter = document.createTextNode(key[position]);
    
    button.appendChild(letter);
    button.setAttribute('onclick', 'escolheLetra(\''+key[position]+'\')');
    button.setAttribute('id', key[position]);
    
    let div = document.getElementById("btns")
    div.appendChild(button);
}
function escolheLetra(letra) {

    let  correct = false;
    
    for (position = 0; position < words.length; position++) {
        if (letra === words[position]) {
            let span = document.getElementById(position);
            let l = document.createTextNode(letra);
            
            span.appendChild(l);
            
            let button = document.getElementById(letra);
            button.setAttribute('class', 'certa');
            button.removeAttribute('onclick');
            
            hits++;
            correct = true;
        }
    }
    
    if (correct === false) {
        
        
        var button = document.getElementById(letra);
        button.setAttribute('class', 'errada');
        button.removeAttribute('onclick');
        hangman++;
        chance--;
    }
    
    if (chance === 0) {
     
        alert("perdeu nessa porra")
    }
    
    if (hits === words.length) {
        alert("Ganhou nessa porra")
    }

    if(hangman>0){
        circle(200, 130, 25, "blue");
        
    }
    if(hangman>1){
        draw(200, 154, 1, 100, "blue");
        
    }
    if(hangman>2){
        line(150, 200, 200, 160, "blue");
        
    }
    if(hangman>3){
        line(250, 200, 200, 160, "blue");
        
    }
    if(hangman>4){
        line(200, 250, 250, 290, "blue");
        
    }
    if(hangman>5){
        line(200, 250, 150, 290, "blue");
        
    }
}



tip.innerHTML = `dica: ${clues}`;

draw(3, 5, 200, 4, "blue");
draw(200, 5, 3, 100, "blue");
draw(3, 5, 4, 350, "blue");
// head
// // body
// // left arm
// right arm
// right leg
// left leg

