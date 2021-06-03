//Напиши скрипт для создания галлереи изображений по массиву данных.

//В HTML есть список ul#gallery.


//Используй массив объектов images для создания тегов img вложенных в li.
//Для создания разметки используй шаблонные строки и insertAdjacentHTML().

//Все элементы галереи должны добавляться в DOM за одну операцию вставки.
//Добавь минимальное оформление галереи флексбоксами или гридами через css-классы.


const images = [
  {
    url:
      'https://images.pexels.com/photos/140134/pexels-photo-140134.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260',
    alt: 'White and Black Long Fur Cat',
  },
  {
    url:
      'https://images.pexels.com/photos/213399/pexels-photo-213399.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260',
    alt: 'Orange and White Koi Fish Near Yellow Koi Fish',
  },
  {
    url:
      'https://images.pexels.com/photos/219943/pexels-photo-219943.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260',
    alt: 'Group of Horses Running',
  },
];




for (let image of images)
  document.querySelector('#gallery')
    .insertAdjacentHTML('beforeEnd', `<li><img src="${image.url}" width = 400, higth= 400 alt="${image.alt}"></li>`);
// el.classList.add(cls)

// const imagesLi = document.querySelector('#gallery')
// const elLi = [];
// for (let i = 0; i < images.length; i+=1) {
//   const image = images[i];
//   const newEl = document.createElement('li');
//   newEl.textContent = image;
//   elLi.push(newEl)
// }
// console.log(elLi);

// // imagesLi.append(...elLi)



// const imagesImg = document.querySelector('#gallery')
// const elImg = [];
// for (let i = 0; i < images.length; i+=1) {
//   const image = images[i];
//   const newEl = document.createElement('img');
//   newEl.textContent = image.url;
//   elImg.push(newEl)
// }
// console.log(elImg);

// // imagesImg.append(...elImg)

// imagesLi.appendChild(...imagesImg)
// const galleryUl = document.querySelector('#gallery');
// // galleryUl.append(elLi, elImg)


// // const ulEl = document.querySelector('#gallery');

