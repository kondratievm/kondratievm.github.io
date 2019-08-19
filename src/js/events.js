// 1) Написать скрипт, который будет изменять стили блоков при нажатии на 
// них мышкой, без использования CSS (использовать onclick и addEventListener)


var eventItemFirst = document.querySelectorAll('.event-item')[0];

// eventItem.onclick = function () {
//     console.log('hui')
// }

eventItemFirst.addEventListener( 'click', start );
// eventItemFirst.addEventListener( 'animationiteration', update, false );
// eventItemFirst.addEventListener( 'animationend', end, false );

function start() {
    eventItemFirst.style.backgroundColor = 'pink';
}
