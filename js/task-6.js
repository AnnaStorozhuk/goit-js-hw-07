//Напиши скрипт, который бы при потере фокуса на инпуте, 
// проверял его содержимое на правильное количество символов.

//Сколько символов должно быть в инпуте, указывается в его атрибуте data-length.
//Если введено подходящее количество, то border инпута становится зеленым, 
// если неправильное - красным.
//Для добавления стилей, используй CSS-классы valid и invalid.

// #validation-input { grey
//   border: 3px solid #bdbdbd;
// }

// #validation-input.valid { green
//   border-color: #4caf50;
// }

// #validation-input.invalid { red
//   border-color: #f44336;
// }
//  type="text"
//     id="validation-input"
//     data-length="6" 
//     placeholder="Введи 6 символов"

const input = document.getElementById("validation-input");
const totlenght = input.getAttribute("data-length");
const inTotLenght = parseInt(totlenght, 7);


input.oninput = function () {
    if (input.value.length === inTotLenght) {
        input.classList.remove("invalid");
        input.classList.add("valid");
    }
   if (input.value.length === 0) {
        input.classList.remove("valid");
        input.classList.remove("invalid");
    }
    if (input.value.length !== inTotLenght && input.value.length !== 0) {
        input.classList.add("invalid");
    }
}

