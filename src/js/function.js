// 1)  Выполнить прошлое домашнее задание с использованием функций.

// function arrAdded() {
//     var arr = [];

//     for (var i = 0; i < 5; i++) {
//         arr[i] = prompt('Введите любое имя', +i);
//     }
// }

// arrAdded()

// function arrAddedWhile() {
//     var arr = [];
//     var i = 0;

//     while (i < 5) {
//         arr[i] = prompt('Введите любое имя', +i);
//         i++;
//     }
// }

// arrAddedWhile()

// 2) Написать программу, которая будет принимать на вход текст, с ошибкой 
// (после точки строчная буква), и будет выдавать исправленный текст.

// var string = prompt('Введите предложение', '');

// function ucFirstAllWords(str) {
//     var sentence = str.split(". ");
//     for (var i = 0; i < sentence.length; i++) {
//         var j = sentence[i].charAt(0).toUpperCase();
//         sentence[i] = j + sentence[i].substr(1).toLowerCase();
//     }
//     return sentence.join(". ");
// }

// 3) Написать программу, которая будет обрезать текст начиная с первого 
// слова и до слова “кукушка”.

// function cutWords(str) {
//     var sentence = str.split(". ")[0];

//     return sentence;
// }

// console.log(cutWords('В лесу была хорошая погода. Кукушка куковала.'))