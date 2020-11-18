// Напиши скрипт который, при наборе текста в инпуте input#name-input (событие input), 
// подставляет его текущее значение в span#name - output.Если инпут пустой,
// в спане должна отображаться строка 'незнакомец'.



const inputText = document.querySelector('#name-input');
const outputTextContent = document.querySelector('#name-output');
inputText.addEventListener('input', takeInputText);
function takeInputText(event) {
  if (event.currentTarget.value !== '') {
    outputTextContent.textContent = event.currentTarget.value;
  } else outputTextContent.textContent = 'незнакомец';
}