// 1) Написать скрипт, который создаст дополнительный блок, с текстом и 
// картинкой (bgi), стили этому блоку добавить в CSS, а блок создать с помощью JS.

var parent = document.querySelector( '.function-block' );

var container = document.createElement( 'div' );
container.className = 'parent-container';

var div = document.createElement( 'div' );
div.className = 'inner-container';
div.innerHTML = "<strong class='inner-text'>Всем привет!</strong> Вы прочитали важное сообщение.";

var imgWrapper = document.createElement( 'div' );
imgWrapper.className = 'img-wrapper'
var innerImg = document.createElement( 'img' );
innerImg.className = 'inner-img';

parent.appendChild(container);
container.appendChild(div);
container.appendChild(imgWrapper);
imgWrapper.appendChild(innerImg);

// 2) Получить в консоль содержимое любого другого блока. Класс блока вводил пользователь, 
// если класса нет, то выдать ошибку.

// var search = prompt('Поиск по классу', '');

// if ( search == 'parent' ) {
//     console.log( parent );
// } else {
//     console.log( 'error' );
// }

// 3) Уже существующему блоку дописать 2 новых класса.

parent.classList.add( 'class--one' );
parent.classList.add( 'class--two' );

parent.onclick = function() {
    div.classList.toggle( 'class--animation-one' );
    parent.classList.toggle( 'class--animation-two' );
}