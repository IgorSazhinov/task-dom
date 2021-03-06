/*
  В функцию appendToBody передаются 3 параметра:
  tag - имя тега, content - содержимое тега и count - количество вставок.
  Необходимо, чтобы функция осуществила вставку на страницу указанный тег с указанным содержимым указанное число раз.
  Считаем, что всегда передается тег, допускающий вставку текста в качестве своего содержимого (P, DIV, I и пр.).
*/
// export function appendToBody(tag, content, count) {
//   for (let i = 0; i < count; i++) {
//     let dom = document.querySelector('body');
//     let newBox = document.createElement(`${tag}`);
//     newBox.innerHTML = `${content}`;
//     dom.appendChild(newBox);
//   }
// }

/*
  Создайте дерево вложенных тегов DIV.
  Каждый узел дерева должен содержать childrenCount узлов.
  Глубина дерева задается параметром level.
  Каждый элемент должен иметь класс вида item_n, где n - глубина вложенности элемента. (Нумерацию ведем с единицы).
  Сформированное дерево верните в качестве результата работы функции.
*/
/* export */ function generateTree(childrenCount, level) {
    let dom = document.querySelector('body');
    for (let i = 0; i < childrenCount; i++) {
        let count = 0;
        dom = document.querySelector('body');
        for (let n = 0; n < level; n++) {
            let newBox = document.createElement('div');
            newBox.className = `item_${count + 1}`;
            dom.appendChild(newBox);
            dom = document.querySelector(`.item_${count + 1}`);
            count++;
        }
    }
}
generateTree(3, 2);
/*
  Используйте функцию для создания дерева тегов DIV из предыдущего задания.
  Создайте дерево с вложенностью 3 и числом элементов в каждом узле 2.
  Далее замените все узлы второго уровня (т.е. имеющие класс item_2) на теги SECTION.
  Остальную структуру дерева сохраните неизменной, включая классы и те элементы,
  которые находились внутри переписанных тегов.
  Сформированное дерево верните в качестве результата работы функции.
*/
// export function replaceNodes() {
// }
