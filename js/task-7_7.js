// Напиши скрипт, который реагирует на изменение значения input#font -
//     size - control(событие input) и изменяет инлайн - стиль span#text обновляя свойство font - size.
// В результате при перетаскивании ползунка будет меняться размер текста.

const rangeControl = document.querySelector('#font-size-control');
const spanInputText = document.querySelector('#text');
rangeControl.addEventListener('input', checkRangePosition);
function checkRangePosition(event) {
  spanInputText.style.fontSize = `${event.currentTarget.value}px`;
}