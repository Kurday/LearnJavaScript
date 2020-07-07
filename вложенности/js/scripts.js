window.onload = function(e){

  //блок .one
  // document.onclick = function (event) {
  //   console.log(event.target.class)
  //   if (event.target.id == 'one'){
  //     console.log('Клик')
  //   }
  // }


  document.querySelector('.two').onclick = function(){
    event.stopPropagation();
    console.log('click-two')
  }

  document.querySelector('.three').onclick = function(){
    console.log('click-three')
  }

//архитектура js предполагает что событие всплывает, останавливайте всплытие событий там 
//где оно вам мешает, там где есть вложенные элементы и одинаковые типы событий на этих жлементах 
//которые не должны соотноситься 
//событие Onclick отлавливается на всем документе, а потом в зависимости от того элемента
//на котором оно произошло выполняются разные функции


const  modal = document.querySelector('.modal'),
      btnOpenModal = document.querySelector('.btn-open');



//********************   STAGE 2  **********************************************
//по модалке: проверка содержит ли нажатие крестик или содержит ли класс modal, если да то вернем прокрутку и спрячем модалку

modal.addEventListener('click', event => {
  if (event.target.closest('.cross') || 
    event.target.classList.contains('modal__body')){
    document.body.style.overflow = '';
  modal.classList.add('hide');
}
});  

btnOpenModal.addEventListener('click', function(){
  modal.classList.remove('hide');
});





} //./window.onload


