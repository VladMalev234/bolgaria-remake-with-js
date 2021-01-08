// !Form
const regexEm = /\w+@gmail\.com$/;
const regexTe = /\w{3}/;
const regexTel = /^\d{10}$/;
const inputMail = document.querySelector('.email');
const inputTel = document.querySelector('.telephone');
const inputName = document.querySelector('.name');
const submit = document.querySelector('.question-form__submit');
//const inputGroup = document.querySelectorAll('.question-form__group');
const inputGroup = document.querySelectorAll('.question-form__group input');
const inputAll = document.querySelectorAll('.question-form__input');
// переменные для записи значений true
let teTl;
let emTr;
let teTx;
// переменная для записи body для POST запроса 
let bodyM;

const urlForm = 'https://jsonplaceholder.typicode.com/users';
// ставим по умолчанию disabled для кноаки
submit.disabled = true;
submit.classList.add('disabled-color');

//запускаем цикл по элементно при вводе для каждого инпута
inputGroup.forEach((elem) => {
        elem.addEventListener('input', disabled);
});
//записываем е для того чтобі оперделять єлемент на которій нажали при input
function disabled(e) {
    // создаем переменную в которую записуем значение ближайшего родителя в который обернут инпут
    let a = this.closest('.question-form__group');
  //проверяем какой этот тип  input
    if(e.target.type == 'email') {
        // находим ближайшего родителя для выбаного input
        //проверяем  input на соответствие регулярному выражению
        if(regexEm.test(e.target.value)) {
          
            //if(this.querySelector('.alert'))
            // если у ближайшего родителя есть класс alert
            if(a.querySelector('.alert')) {
                //this.querySelector('.alert').remove();
                //находим указанный класс и удаляем его
                a.querySelector('.alert').remove();
                // удаляем класс красной обводки
                e.target.classList.remove('red-line');
            }
              //если подтвердилось то записуем true в переменную
           emTr = true;
            //если input не соответствие регулярному выражению
        } else {
            // проверяем есть ли элемент с классом alert
            if(a.querySelector('.alert') == null) {
                submit.disabled = true;
                submit.classList.add('disabled-color');
            // если нет присваеваем значению обводку
                e.target.classList.add('red-line');
                //создаем элемент
                let divE = document.createElement("DIV");
                //вставляем его в конец после input 
                e.target.insertAdjacentElement('afterEnd', divE);
                //записываем Html внутрь div
                divE.innerHTML = `Поле ${e.target.type} должно содержать не мение 1 буквы до @ и
                заканчиваться на gmail.com`;
                //доюавляем класс со стилями
                divE.classList.add('alert');
                emTr = true;
                console.log('false');
                //чтоб не срабатывал input встроенная проверка
                //return false;
            }
        }
    } else if(e.target.type == 'text') {
        if(regexTe.test(e.target.value)) {
           
            if(a.querySelector('.alert')) {
                a.querySelector('.alert').remove();
                e.target.classList.remove('red-line');
            }
           teTx = true;
        } else {
                if(a.querySelector('.alert') == null) {
                    submit.disabled = true;
                    submit.classList.add('disabled-color');
                    e.target.classList.add('red-line');
                    let divE = document.createElement("DIV");
                    e.target.insertAdjacentElement('afterEnd', divE);
                    divE.innerHTML = `Поле ${e.target.type} должно содержать не меньше 3 букв`;
                    divE.classList.add('alert');
                    teTx = false;
                    console.log('false');
                    //return false;
                }
            }
        } else if(e.target.type == 'tel') {
            if(regexTel.test(e.target.value)) {
                
                if(a.querySelector('.alert')) {
                    a.querySelector('.alert').remove();
                    e.target.classList.remove('red-line');
                }
                teTl = true;
            } else {
                    if(a.querySelector('.alert') == null) {
                        submit.disabled = true;
                        submit.classList.add('disabled-color');
                        e.target.classList.add('red-line');
                        let divE = document.createElement("DIV");
                        e.target.insertAdjacentElement('afterEnd', divE);
                        divE.innerHTML = `Поле ${e.target.type} должно содержать не меньше 10 цифр`;
                        divE.classList.add('alert');
                        console.log('false');
                        teTl = false;
                        //return false; 
                    } 
                }
            } 
            // если все значения перменных true то снимаем disabled  с кнопки
            if(emTr && teTl && teTx) {
                submit.disabled = false;
                submit.classList.remove('disabled-color');
            }else if(!emTr || !teTl || !teTx){
                submit.disabled = true;
                submit.classList.add('disabled-color');
            }
    }


// при нажатии на кнопку
submit.addEventListener('click', (el) => {
    // убираем автоматические настройки браузера
    el.preventDefault(); 
    // записываем текущие значения в переменные
    bodyM = {
        name: inputName.value,
        mail: inputMail.value,
        phone: inputTel.value
    };
    // вызываем метод post делаем fetch запрос
    submitReqest('POST', urlForm,  bodyM);  
    
    inputAll.forEach((e) => {
        e.value = '';
    })
})

// функци в которй происходит  запрос
function submitReqest (method, urlL,  bodyL = null) {
    //console.log(bodyL);
    //залаем headers для распознавания данных
    const headers = {
        'Content-Type': 'application/json' 
    }

    return fetch (urlL, {
        method: method,
        // приводим значения body к строке
        body: JSON.stringify(bodyL),
        headers: headers
        
    })// после выполнения fetch возвращаем обьект Promise
    .then ( response => {
        if(response.ok){
            return response.json(); 
         }
         return response.json().
            catch(error => {
             const e = new Error('Что-то пошло не так');
             e.data = error;
             throw e;
         })
       })// и возвращаем уже обьект с нашими данными
       .then(res => {     
        console.log(res);
        alert(' Вы успешно зарегистрировались!')
        submit.disabled = true;
        submit.classList.add('disabled-color');
        teTl = false;
        emTr = false;
        teTx = false;
    })
}


