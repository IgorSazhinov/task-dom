/*
  В функцию appendToBody передаются 3 параметра:
  tag - имя тега, content - содержимое тега и count - количество вставок.
  Необходимо, чтобы функция осуществила вставку на страницу указанный тег с указанным содержимым указанное число раз.
  Считаем, что всегда передается тег, допускающий вставку текста в качестве своего содержимого (P, DIV, I и пр.).
*/
export function appendToBody(tag, content, count) {
    for (let i = 0; i < count; i++) {
        let dom = document.querySelector('body');
        let newBox = document.createElement(`${tag}`);
        newBox.innerHTML = `${content}`;
        dom.appendChild(newBox);
    }
}

/*
  Создайте дерево вложенных тегов DIV.
  Каждый узел дерева должен содержать childrenCount узлов.
  Глубина дерева задается параметром level.
  Каждый элемент должен иметь класс вида item_n, где n - глубина вложенности элемента. (Нумерацию ведем с единицы).
  Сформированное дерево верните в качестве результата работы функции.
*/
export function generateTree(childrenCount, level) {
    let div = document.createElement('div');
    div.classList.add('item_1');
    document.body.append(div);

    for (let i = 1; i < level; i++) {
        let current_lvl = document.getElementsByClassName(`item_${i}`);
        for (let k of current_lvl) {
            for (let j = 0; j < childrenCount; j++) {
                const newDiv = document.createElement('div');
                newDiv.classList.add(`item_${i + 1}`);
                k.append(newDiv);
            }
        }
    }
    return div;
}

/*
  Используйте функцию для создания дерева тегов DIV из предыдущего задания.
  Создайте дерево с вложенностью 3 и числом элементов в каждом узле 2.
  Далее замените все узлы второго уровня (т.е. имеющие класс item_2) на теги SECTION.
  Остальную структуру дерева сохраните неизменной, включая классы и те элементы,
  которые находились внутри переписанных тегов.
  Сформированное дерево верните в качестве результата работы функции.
*/
export function replaceNodes() {
    generateTree(2, 3);
    let item_2 = document.querySelector('.item_2');
    console.log(item_2);
    for (let i = 0; i < 2; i++) {
        let item = document.querySelector('div.item_2');
        let newTag = document.createElement('SECTION');
        newTag.classList.add('item_2');
        item.before(newTag);
        let childNodes = item.childNodes;
        for (true; childNodes.length > 0; true) {
            newTag.prepend(childNodes[0]);
        }
        item.parentElement.removeChild(item);
    }
    let item_1 = document.querySelector('.item_1');
    return item_1;
}
