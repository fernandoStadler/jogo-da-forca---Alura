
let tip = document.getElementById('tip');
let canvas = document.querySelector('canvas');
let darkScreen = document.getElementById('dark');
let modal_alert = document.getElementById('modal-msg');
let restart_game = document.getElementById('btn-modal');
let divNewWord = document.getElementById('new_word');
let btnAddWord = document.getElementById('addWord');

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
