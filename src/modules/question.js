
const questions = [{
    question: 'Какой сейчас гoд?',
    answers: [1992, 2020, 1853, 2022],
    rightVariant: 4,

},
{
    question: 'Какой сейчас месяц?',
    answers: ['май', 'август', 'июль', 'июнь'],
    rightVariant: 2,

},
{
    question: 'Какой сейчас день',
    answers: ['срsеда', 'четверг', 'пяница', 'понеельник'],
    rightVariant: 1,

},

];

let knop = document.querySelectorAll('btn');
let first = document.getElementById('first');
let second = document.getElementById('second');
let third = document.getElementById('third');
let fourth = document.getElementById('fourth');
let score = document.getElementById('scores');
let nextButton = document.getElementById('next');
let firstBlock = document.getElementById('questions1');
let secondBlock = document.getElementById('questions2');
let may = document.getElementById('may');
let august = document.getElementById('august');
let july = document.getElementById('july');
let june = document.getElementById('june');

let openVik = document.getElementById('openvik');
openVik.onclick = function () {
    document.getElementById('viktorina').style.display = 'block';
}
first.onclick = function () {
    if(first.value == 2022) {
        console.log('yes')
    } else {
        first.style.backgroundColor = 'red'
        score.innerHTML = 'Ваш результат 0 очков';
    }
};

second.onclick = function () {
    if(second.value == 2022) {
        console.log('yes')
    } else {
        second.style.backgroundColor = 'red'
        score.innerHTML = 'Ваш результат 0 очков';
    }
};

third.onclick = function () {
    if(third.value == 2022) {
        console.log('Yes')
    } else {
        third.style.backgroundColor = 'red'
        score.innerHTML = 'Ваш результат 0 очков';
    }
};    


fourth.onclick = function () {
    if(fourth.value == 2022) {
        fourth.style.backgroundColor = 'green'
        score.innerHTML = 'Ваш результат 1 очко';
    }
};
    



nextButton.onclick = function () {
    firstBlock.style.display = 'none';
    secondBlock.style.display = 'block';
    
};

may.onclick = function () {
    if(may.value == 'август') {
        console.log('yes')
    } else {
        may.style.backgroundColor = 'red'
        score.innerHTML = 'Ваш результат 1 очков';
    }
};

august.onclick = function () {
    if(august.value == 'август') {
        august.style.backgroundColor = 'green'
        score.innerHTML = 'Ваш результат 2 очков';
    }
};

july.onclick = function () {
    if(july.value == 'август') {
        console.log('Yes')
    } else {
        july.style.backgroundColor = 'red'
        score.innerHTML = 'Ваш результат 1 очков';
    }
   
};    


june.onclick = function () {
    if(june.value == 'август') {
        console.log('yes')
    } else{
        june.style.backgroundColor = 'red'
        score.innerHTML = 'Ваш результат 1 очко';
    }
};

