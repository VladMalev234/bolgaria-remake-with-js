//navbar burger
const burgerBt = document.querySelector('.navbar-burger');
const contentAct = document.querySelector('.menu');

function menuActivate() {
    contentAct.classList.toggle('active-burdger');
}

burgerBt.addEventListener('click', () => {
    menuActivate();
})
// Закрытие при нажатие на любую область кроме самого меню
document.addEventListener('click', (e) => {
        let target = e.target;
        // ?Если цель при нажатии не содержит меню, или внутри меню нету цели возвращает false 
        let menu = target == contentAct || contentAct.contains(target);
        // ?Если цель при нажатии не содержит кнопку, или внутри кнопки не содержится цель возвращает false 
        let its_hamburger = target == burgerBt || burgerBt.contains(target);
        // ?Если при нажатии меню присвоен class active-burdger возвращает true
        let menu_activetor = contentAct.classList.contains('active-burdger');
        //! Если все это true деактивирует меню (!menu инвертирует false в true, !its_hamburger инвертирует false в true)
        if(!menu  && !its_hamburger &&  menu_activetor) {
            menuActivate();
        }
})







//.catch(err => console.log(err))

//inputMail.addEventListener('change', disabled);
//inputTel.addEventListener('change', disabled);
//inputName.addEventListener('change', disabled);

//addEventListener('input', replacer);

//function replacer (e) {
//    //console.log(e.target.value);
//    let str = e.target.value;
//    console.log(str);
//    return str.replace(/[1-9]{3}\.[1-9]{3}\.[1-9]{3}/);
//    //return e.target.value.replace(/\w{3}-w{3}-w{3}/);
//}
//?задаем disable пo умолчанию
//submit.disabled = true;
//submit.classList.add('disabled-color');

//input.forEach((elem)=> {
//    elem.addEventListener('change', disabled)
//})
////inputMail.value.match(regexEm)
//function disabled(e) {
//    if(inputMail.value && regexEm.test(inputMail.value) && inputTel.value && inputName.value) {
//            console.log('sosiruy');
//            submit.disabled = false;
//            submit.classList.remove('disabled-color');
//    } else {
//        let div = document.createElement("DIV");
//        div.innerHTML = `Поле ${e.target.name} должно содержать не меньше 3 букв`;
//        div.style
//        //.position = 'absolute'
//        .width = '100px'
//        .border ='1px solid red'
//        e.target.appendChild(div);
       
//    }
//}


//function testInfo (result) {
//    let c = result.match(regexEm);
//    console.log(c);
//    if(c == null || inputTel.value == " "||inputName.value == ' ') {

//        submit.disabled = true;
//        submit.classList.add('disabled-color');
//    } else {
//        submit.disabled = false;
//        submit.classList.remove('disabled-color');
//    }
//}

//submit.addEventListener('click', (el) => {
//    el.preventDefault();
//    a = inputMail.value;
//    console.log(a);
//    testInfo(a);
   
//})


 //if(a.match(regexEm)!= null) {
    //    console.log('U a sre sig up');
    //    console.log(a.match(regexEm));
    //}
//   console.log(regexEm.test(inputMail));  
//console.log(inputMail.match(regexEm));
//console.log(inputMail.value);