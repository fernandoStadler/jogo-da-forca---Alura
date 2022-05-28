
let tip = document.getElementById('tip');
var canvas = document.querySelector('canvas');

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
