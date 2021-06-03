// //Счетчик состоит из спана и кнопок, которые должны увеличивать и уменьшать значение счетчика на 1.

// //Создай переменную counterValue в которой будет хранится текущее значение счетчика.
// //Создай функции increment и decrement для увеличения и уменьшения значения счетчика
// //Добавь слушатели кликов на кнопки, вызовы функций и обновление интерфейса


// const counter = {
//     value: 0,
//     increment() {
//         console.log('increment -> this', this)
//         this.value += 1;
//     },
//     decrement() {
//           console.log('decrement -> this', this)
//         this.value -= 1;
//     }

// };
// const decrementBtn = document.querySelector('.decrement');
// const incrementBtn = document.querySelector('.increment');
// const valurEl = document.querySelector('.value');

// decrementBtn.addEventListener('click', function () {
//    console.log('click in')
//     counter.decrement();
//     console.log(counter);
//     valueEl.textContent = counter.value;
// })

// incrementBtn.addEventListener('click', function () {
//      console.log('click dec')
//     counter.increment();
//     console.log(counter);
//     valueEl.textContent = counter.value;
// })

// // const updateCounter = function (value, operation) {
// //     operation(value);
// //  }
    


// const counter = {
//     value: 0,
//     increment() {
//         console.log('increment -> this', this);
//         this.value += 1;
//     },
//     decrement() {
//         console.log('decrement -> this', this);
//         this.value -= 1;
//     },
// };

// const decrementBtn = document.querySelector('.js-decrement');
// const incrementBtn = document.querySelector('.js-increment');
// const valueEl = document.querySelector('.js-value');

// decrementBtn.addEventListener('click', function () {
//     console.log('Кликнули на декремент');

//     counter.decrement();
//     console.log(counter);
//     valueEl.textContent = counter.value;
// });

// incrementBtn.addEventListener('click', function () {
//     console.log('Кликнули на инкремент');

//     counter.increment();
//     console.log(counter);
//     valueEl.textContent = counter.value;
// });

// console.log(window);






const button = {
  sub: document.querySelector("[data-action='increment']"),
  add: document.querySelector("[data-action='decrement']"),
  span: document.querySelector("#value"),
};

let counterValue = 0;
const increment = () => {
  counterValue += 1;

 button.span.textContent = counterValue;
};

const decrement = () => {
  counterValue -= 1;

  button.span.textContent = counterValue;
};

button.sub.addEventListener("click", increment);
button.add.addEventListener("click", decrement);