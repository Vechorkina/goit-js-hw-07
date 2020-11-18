// Напиши скрипт, который бы при потере фокуса на инпуте,
// проверял его содержимое на правильное количество символов.
// Сколько символов должно быть в инпуте, указывается в его атрибуте data-length.
// Если введено подходящее количество, то border инпута становится зеленым, если неправильное - красным.
// Для добавления стилей, используй CSS-классы valid и invalid.


const inputText = document.querySelector('#validation-input');
inputText.addEventListener('blur', checkValidInputLength);
function checkValidInputLength(event) {
  if (
    event.currentTarget.value.length ===
    Number(inputText.getAttribute('data-length'))
  ) {
    inputText.classList.remove('invalid');
    inputText.classList.add('valid');
  } else {
    inputText.classList.remove('valid');
    inputText.classList.add('invalid');
  }
}


// const validInputRef = document.querySelector('#validation-input');

// validInputRef.addEventListener('blur', handleValidInput);

// function handleValidInput() {
//     if (validInputRef.value.length < validInputRef.dataset.length ||
//         validInputRef.value.length > validInputRef.dataset.length
//     ) {
//         validInputRef.classList.add('invalid');
//         validInputRef.classList.remove('valid');
//     } else {
//         validInputRef.classList.add('valid');
//         validInputRef.classList.remove('invalid');
//     }
// }