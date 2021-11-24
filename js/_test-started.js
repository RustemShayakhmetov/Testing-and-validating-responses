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
    navbarHead.classList.toggle('hide')
    document.querySelector('.content-window__header').classList.toggle('change-display')
    document.querySelector('.content-window__form-test').classList.toggle('change-display')

})

// переменные для секундомера
const timerTest = document.querySelector('#timer');
let sec = 0;
let timer;

timerStart()

// переменная для завeршения теста
const btnTestEnd = document.querySelector('.test-end')

// переменная для выхода из теста и модального окна 
const btnExit = document.querySelector('.exit')
const showModal = document.querySelector('.content-window__out-test')
const btnChancelShowModal = document.querySelector('.return-to-test')

// переменная для сброса ответов 
const resetAnswers = document.querySelector('.reset-answers');
resetAnswers.addEventListener('click', () => {
    document.querySelector('.test').reset();
    localStorage.clear()
})


// при клике на кнопку выход в окне прохождения теста, открывается модально окно
btnExit.addEventListener('click', () => {
    showModal.classList.add('is-open');
})
// при клике на отмена закрывается модально окно и возвращаемся к тесту
btnChancelShowModal.addEventListener('click', (event) => {
    event.preventDefault()
    showModal.classList.remove('is-open');
})

btnTestEnd.addEventListener('click', checkingAnswers)

// получаем ответы пользователя в два массива (ответы и вариант ответов)
function checkingAnswers() {
    localStorage.clear()
    localStorage.setItem('Время теста', timerTest.textContent)

    let arrayAnswers = document.forms;
    let idUserAnswers=[];
    let haveAnswer = [];
    console.log(arrayAnswers)
    for (let i = 0; i < arrayAnswers.length; i++) {
        for (let k = 0; k < arrayAnswers[i].length; k++) {
            if (arrayAnswers[i][k].checked === true) {
                console.log(arrayAnswers[i][k].labels[i].textContent)
                idUserAnswers.push(arrayAnswers[i][k].labels[i].textContent)
                haveAnswer.push(arrayAnswers[i][k].dataset.quession)
            }
        }
    }
    sendAnswerToStorage(idUserAnswers, haveAnswer)
}

// отправляем каждый ответ на вопрос в localStorage
function sendAnswerToStorage(arr, quessions) {
    // let questionsNumbers = ['Первый вопрос', 'Второй вопрос', 'Третий вопрос', 'Четвертый вопрос', 'Пятый вопрос']
    // let userAnswers = {};
    for (let i = 0; i < arr.length; i++) {
        let answer = arr[i];
        let quession = quessions[i]
        // let questionNumber = questionsNumbers[i];
        // userAnswers[questionNumber] = answer;
        localStorage.setItem(`${quession}. Вопрос`, answer)
    }
}


// секундомер на странице теста
function timerStart() {
    timer = setInterval(()=>{
		sec += 1000;
		let dateTimer = new Date(sec);
		timerTest.innerHTML =
			('0'+dateTimer.getUTCHours()).slice(-2) + ':' +
			('0'+dateTimer.getUTCMinutes()).slice(-2) + ':' +
			('0'+dateTimer.getUTCSeconds()).slice(-2);
        },1000);
}





// function checkingAnswers() {
//     localStorage.clear()
//     localStorage.setItem('время теста', timerTest.textContent)

//     let arrayAnswers = document.forms;
//     let idUserAnswers=[];
//     let haveAnswer = [];
//     console.log(arrayAnswers)
//     for (let i = 0; i < arrayAnswers.length; i++) {
//         for (let k = 0; k < arrayAnswers[i].length; k++) {
//             console.log(arrayAnswers)

//             if (arrayAnswers[i][k].checked === true) {
//                 idUserAnswers.push(arrayAnswers[i][k].value)
//                 haveAnswer.push(arrayAnswers[i][k].dataset.quession)
//             }
//         }
//     }
//     sendAnswerToStorage(idUserAnswers, haveAnswer)
// }
