/* opgave 1 */

console.group("opgave 1");
const todoApp = {
  shopping: {
    name: "Indkøb",
    items: [
      { text: "Ost", done: false },
      { text: "Mælk", done: true },
      { text: "Æg", done: false },
    ],
  },
  Priseliste: {
    name: "Priser",
    items: [
      { text: "102 kroner", done: false },
      { text: "17 kroner", done: false },
      { text: "23 kroner", done: false },
    ],
  },
};

console.groupEnd();
/* opgave 2 */
console.group("opgave 2");
function addItem(listKey, itemText) {
  const list = todoApp[listKey];
  if (list) {
    const newItem = { text: itemText, done: false };
    list.items.push(newItem);
  }
  console.log(todoApp);
}

addItem("shopping", "Køb Mælk");

console.groupEnd();
/* opgave 3 */
console.group("opgave 3");

function toggleItemDone(listKey, itemNr) {
  const list = todoApp[listKey];
  if (list) {
    const item = list.items[itemNr];
    if (item) {
      item.done = !item.done;
    }
  }
  console.log(todoApp);
}

toggleItemDone("Priser", 1);
console.groupEnd();
