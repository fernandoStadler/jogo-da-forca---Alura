
function screenAddword(){
    if(divNewWord.classList.contains('hide')){
        divNewWord.classList.remove('hide');
        divNewWord.classList.add('show');
        addWord.innerHTML  = "Fechar";
        cleanForm();
    } else{
        divNewWord.classList.add('hide');
        divNewWord.classList.remove('show');
        addWord.innerHTML  = "Adicionar nova palavra";
        cleanForm();
    }  
}
function showDivNewWord(){
    div_new_word.classList.remove('d-flex')
    div_new_word.classList.add('d-none')
}
function addWords(){
    var tWord = txt_addWord.value
    var tClue = txt_addClue.value
    var dataStorage = localStorage.getItem("Lista")
    dataStorage = dataStorage ? dataStorage.split(',') : [JSON.stringify(Dictionary)];
    dataStorage.push(JSON.stringify({"word":`"${tWord}"`, "clue":`${tClue}`}))
    localStorage.setItem("Lista", dataStorage);
    console.table(dataStorage);
    div_new_word.classList.add('d-flex')
    addWord_label.innerHTML =  `A Palavra <label style="color:red">${tWord}</label> e a Dica <label style="color:red">${tClue}</label> foram adicionadas com sucesso!`
    cleanForm()
    setInterval(showDivNewWord,5000)
    
} 
btnSave.onclick = addWords;
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
    button.setAttribute('onclick', 'chooseLetter(\''+key[position]+'\')');
    button.setAttribute('id', key[position]);
    
    let div = document.getElementById("btns")
    div.appendChild(button);
}
function chooseLetter(chosenLetter) {
    let  correct = false;
    for (position = 0; position < words.length; position++) {
        if (chosenLetter === words[position]) {
            let span = document.getElementById(position);
            let l = document.createTextNode(chosenLetter);
            span.appendChild(l);
            let button = document.getElementById(chosenLetter);
            button.setAttribute('class', 'certa');
            button.removeAttribute('onclick');
            hits++;
            correct = true;
        }
    }
    if (correct === false) {
        let button = document.getElementById(chosenLetter);
        button.setAttribute('class', 'errada');
        button.removeAttribute('onclick');
        hangman++;
        chance--;
    }
    if (chance === 0) {
        modal("Que pena,você perdeu")
    }
    if (hits === words.length) {
       modal("Parabéns,você ganhou!")
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

draw(3, 5, 200, 4, "blue");
draw(200, 5, 3, 100, "blue");
draw(3, 5, 4, 350, "blue");

btnAddWord.onclick = screenAddword;
tip.innerHTML = `dica: ${clues}`;
restart_game.onclick = restart;
