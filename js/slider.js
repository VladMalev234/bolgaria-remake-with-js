//!slider_____________________
const urlEL ='https://api.mocki.io/v1/25981de2';
const nullElement = {
    name: 'Диана Aпасова',
    url: 'img/reviews/diana.png',
    username: 'vk.com/apasova',
    from: 'Moskov',
    to: 'Sofia',
    coment: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in'
}

//в будущем наш массив в который передаютсься данные с запросса
let clients;
const arrowPrew = document.querySelector('.arrow-prev');
const arrowNext = document.querySelector('.arrow-next');
const sName = document.querySelector('.reviews-slider__name');
const sLink = document.querySelector('.reviews-slider__link');
const sCity = document.querySelector('.reviews-slider__city');
const sImage = document.querySelector('.reviews-slider__image');
const sText = document.querySelector('.reviews-slider__text');
let curentIndex = 0;
arrowPrew.disabled = true;
arrowPrew.classList.add('disabled-color');

function getEl(data) {
    //for(let i = 0; i < data.length; i++) {
    sName.innerHTML = `${data.name}`;
    sImage.src = `${data.url}`;
    sLink.innerHTML = `${data.username}`;
    sCity.innerHTML = `${data.from} &#8594 ${data.to}`;
    sText.innerHTML = `${data.coment}`;
    //};
}

function requestData (url, method) {

    return fetch(url, {
        method: method,
    })
    .then(response => {
    if(response.ok){
       return response.json(); 
    }
    return response.json().
//для отлавливания ошибок
       catch(error => {
        const e = new Error('Что-то пошло не так');
        e.data = error;
        throw e;
    })
    //получаем обьект с ключем data который содержит в себе массив
    }).then((reciveData) => {
        //записываем в переменную clients данные обьекта, тоесть получаем именно массив
        clients = reciveData.data;
        //для добавления в начало массива первого - нулевого элемета
        clients.unshift(nullElement);
        //пердаем в функцию для формирования данных добавленный 1 элемент
        getEl(clients[0]);
    })
}
requestData(urlEL, 'GET');

arrowNext.addEventListener('click', () => {
    // при нажатии на кнопку в право убираем disable с левой стрелки
    arrowPrew.disabled = false;
    arrowPrew.classList.remove('disabled-color');
    //если текущий индекс = 0 или текущий индекс меньше длины всего массива, увеличиваем текущее значение индекса на 1
     if(curentIndex === 0||curentIndex < (clients.length)) {
        curentIndex ++;
        // передаем в функцию значения масива с текущем индексом
        getEl(clients[curentIndex]);
    } 
    // проверяем если текущий индекс = дляны массива -1,это значит, что мы дошли до конца массива и нужно повесить disabe на кнопку
    if(curentIndex === (clients.length -1)){
        arrowNext.disabled = true;
        arrowNext.classList.add('disabled-color');
    }
});

arrowPrew.addEventListener('click', () => {
    //for(let i = 0; i < clients.length; i--) {
    //       getEl(clients[i]);
    //}
    // при нажатии на кнопку в право убираем disable с левой стрелки
    arrowNext.disabled = false;
    arrowNext.classList.remove('disabled-color');
     if(curentIndex > 0) {
        curentIndex --;
        getEl(clients[curentIndex]);
    } if(curentIndex === 0 ) {
        arrowPrew.disabled = true;
        arrowPrew.classList.add('disabled-color');
    }
});
