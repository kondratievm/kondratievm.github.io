var blockFirst = document.querySelector('.social-block-content__item:nth-child(1)'),
    blockSecond = document.querySelector('.social-block-content__item:nth-child(2)'),
    blockThird = document.querySelector('.social-block-content__item:nth-child(3)'),
    blockFourth = document.querySelector('.social-block-content__item:nth-child(4)');

var iconFirst = blockFirst.querySelector('.icon'),
    iconSecond = blockSecond.querySelector('.icon'),
    iconThird = blockThird.querySelector('.icon');
    iconFourth = blockFourth.querySelector('.icon');

iconFirst.classList.add('icon-vk');
iconSecond.classList.add('icon-ig');
iconThird.classList.add('icon-ph');
iconFourth.classList.add('icon-ml');

