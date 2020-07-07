window.onload = function(e){

  //меняем картинку по клику stage-1
  const navItem = document.querySelectorAll('.nav-item'),
  featuredImage = document.querySelector('.featured__image img');

  //сворачиваемые табы stage-2
  const coll = document.querySelectorAll('.collaps'),
  collCont = document.querySelectorAll('.collaps__content');



//********************   STAGE-1    *******************************

document.body.addEventListener('click', function (e){

  // e.preventDefault();
  const target = e.target;

  //в Make забиваем элемент по которому произошел клик (li)
  const make = target.closest('.nav-item'); //make = this.li
  if (make) {
    //в img записываем класс ссылки которая внутри этого li
    img = make.querySelector('.nav-link'); // img = li a
    //В changeImg записываем dataset этой ссылки
    const changeImg = img.dataset.src; //changeImg = data a
    //подсталвем изображение 
    if (changeImg) {
      featuredImage.src = changeImg


        //добавляем класс тени
        navItem.forEach(btn => btn.classList.remove('active'))
        make.classList.add('active')
      }
    }
  });




//********************   STAGE-2    *******************************

for (var i = 0; i < coll.length; i++) {

  coll[i].addEventListener('click', function(){

   collCont.forEach(function(item){

    item.classList.remove('collaps__content-active');

  });

   this.classList.toggle('collaps__active');
      let content = this.nextElementSibling;
      content.classList.toggle('collaps__content-active')
    }
    )}

} //./window.onload


