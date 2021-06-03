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

// const imageEl = document.createElement('img');
// imageEl.src = images.url;
// imageEl.alt = images.alt;
// imageEl.width = 500;
// imageEl.width = 400;
// console.log('imageEl', imageEl);


// const galleryEl = document.querySelector('#gallery');
// galleryEl.classList.add('gallery');

// const makeGalleryContainer = () => {
//   return `<li class="gallery-item">
//     <img src="${imageEl.src}" alt="${imageEl.alt}" >
//   </li>`;
// };

// ul.append(imageEl);

// for (let image of images)
//   document.querySelector('#gallery')
//     .insertAdjacentHTML('beforeEnd', `<li><img src="${image.url}" width = 400, higth= 400 alt="${image.alt}"></li>`);



// const createGalleryItem = ({ url, alt }) =>
//   <li><img src="${url}" alt="${alt}" width = 200 height = 150></li>;
// const galleryMarkup = images.reduce(
//   (acc, item) => acc + createGalleryItem(item),
//   ""
// );
// const galleryList = document.querySelector("#gallery");
// galleryList.insertAdjacentHTML("afterbegin", galleryMarkup);
// galleryList.setAttribute("style", "list-style-type:none; display: flex;");

const galerysEl = ({ url, alt }) => {
  return `
    <li>
        <img src="${url}" alt="${alt}" width=480 >
    </li>`;
};

const makeImagesGalery = images.map(galerysEl).join('');

const idGalery = document.querySelector('#gallery');
idGalery.insertAdjacentHTML('beforeend', makeImagesGalery);




