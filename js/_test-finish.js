// объявляем переменные для управления шириной экранов
const arrow = document.querySelector('.arrow')
const burger = document.querySelector('.burger')
const navIcon = document.querySelector('.navbar__head__icon')
const widthNavbar = document.querySelector('.navbar')
const contentWindow = document.querySelector('.content-window')
const listTests = document.querySelector('.list')
const navbarHead = document.querySelector('.navbar__head__headline')


// при клике на стрелку/бургер туглим классы у необходимых элементов
navIcon.addEventListener('click', () => {
    arrow.classList.toggle('hide')
    burger.classList.toggle('hide')
    widthNavbar.classList.toggle('navbar-close')
    listTests.classList.toggle('hide')
    contentWindow.classList.toggle('content-window-open')
    contentWindow.classList.toggle('content-window-close')
    document.querySelector('.content-window__header').classList.toggle('change-display')
    navbarHead.classList.toggle('hide')
    // document.querySelector('.content-window__form-test').classList.toggle('change-display')

})


// переменная для выхода из теста и модального окна 
const btnExit = document.querySelector('.exit')
const showModal = document.querySelector('.content-window__out-test')
const btnChancelShowModal = document.querySelector('.return-to-test')

// при клике на кнопку выход в окне прохождения теста, открывается модально окно
btnExit.addEventListener('click', (event) => {
    event.preventDefault()
    showModal.classList.add('is-open');
})
// при клике на отмена закрывается модально окно и возвращаемся к тесту
btnChancelShowModal.addEventListener('click', (event) => {
    event.preventDefault()
    showModal.classList.remove('is-open');
})

// получение времени прохождения теста
let timerEnd = document.querySelector('#time-counter');
timerEnd.textContent = localStorage.getItem('Время теста')

// счетчик правильных ответов
let countRightAnswers = document.querySelector('#count-right-answers')

// сброс ответов и времени
const resetAnswers = document.querySelector('.reset-answers');
resetAnswers.addEventListener('click', () => {
    localStorage.clear()
    checkTest()
    timerEnd.textContent = '00:00:00'
})


// получаем поля для ввода выбранных ответов в тесте
let cellAnswers = document.querySelectorAll('.answer');
let cellRightAnswer = document.querySelectorAll('#right-answer');
checkTest()

function checkTest() {
    let rightAnswers = ['Вариант A', 'Вариант A', 'Вариант A', 'Вариант A', 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aliquam sollicitudin odio sit amet']
    for (let i = 0; i < rightAnswers.length; i++) {
        cellRightAnswer[i].textContent = rightAnswers[i]
    }
    // let count = 0;
    let userAnswer;
        // debugger
    for (let i = 0; i < cellAnswers.length; i++) {
        userAnswer = localStorage.getItem(`${i+1}. Вопрос`);
            if (userAnswer !== null) {
                cellAnswers[i].textContent = userAnswer
                // console.log('Правильный ответ: ' + rightAnswers[i] + ', Тип: ' + typeof(rightAnswers[i]))
                // console.log('Ответ из хранилища: ' + userAnswer + ', Тип: ' + typeof(userAnswer))

                // if (rightAnswers[k] == userAnswer) {
                //     count++
                // }
                // else {
                //     console.log('есть неправильный ответ')
                // }
            }
            else {
                cellAnswers[i].textContent = 'Не ответили';
            }
    }
    // countRightAnswers.textContent = count
    // console.log(count)
    timer = localStorage.getItem('Время теста')
}

