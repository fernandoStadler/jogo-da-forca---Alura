
let tip = document.getElementById('tip');
let canvas = document.querySelector('canvas');
let darkScreen = document.getElementById('dark');
let modal_alert = document.getElementById('modal-msg');
let restart_game = document.getElementById('btn-modal');
let divNewWord = document.getElementById('new_word');
let btnAddWord = document.getElementById('addWord');
let btnSave = document.getElementById('btn_save');
let txt_addWord = document.getElementById('txt_addWord');
let txt_addClue = document.getElementById('txt_addClue');
let list = localStorage.setItem("Lista", JSON.stringify(Dictionary));
let addWord_label = document.getElementById("addWord_label");
let div_new_word = document.getElementById("div_new_word");


let size = Dictionary.length;
let index = randomPosition(size);
let btnLabel = 'abcdefghijklmnopqrstuvwxyz';
let key = btnLabel.split("");


let words = Dictionary[index].word;
let clues = Dictionary[index].clue;


let hits = 0;
let chance = 6;
let hangman = 0;
let position;
