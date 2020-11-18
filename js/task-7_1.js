// Напиши скрипт, который выполнит следующие операции.
// Посчитает и выведет в консоль количество категорий в ul#categories, то есть элементов li.item. Получится 'В списке 3 категории.'.
// Для каждого элемента li.item в списке ul#categories, найдет и выведет в консоль текст заголовка элемента (тега h2) и количество элементов в категории (всех вложенных в него элементов li).
// Например для первой категории получится:
// Категория: Животные
// Количество элементов: 4
// const selectedById = document.querySelector('#categories');
// const quantityСategories1 = selectedById.children.length;
// console.log(`В списке ${quantityСategories1} категории.`);

const selectedByClass = document.querySelectorAll('#categories .item');
const quantityСategories = selectedByClass.length;
console.log(`В списке ${quantityСategories} категории.`);

selectedByClass.forEach(el => {
  const category = el.firstElementChild.textContent;
  const quantityElements = el.lastElementChild.children.length;
  console.log(
    `Категория: ${category}\nКоличество элементов: ${quantityElements}`,
  );
});