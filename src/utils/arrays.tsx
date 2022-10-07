/** Функция перемещения элемента массива на новое место по заданному индексу */
export const moveArrayItem = <T,>(arr: Array<T>, old_index: number, new_index: number): Array<T> => {
  if (new_index >= arr.length) {
    let k = new_index - arr.length + 1;
    while (k--) {
      arr.push();
    }
  }
  arr.splice(new_index, 0, arr.splice(old_index, 1)[0]);
  return arr;
};

export const replaceByIndex = <T,>(items: T[], item: T, index: number) => {
  if (index > items.length - 1 || index < 0) return items;

  return items.slice(0, index).concat(item, items.slice(index + 1));
};

export const deleteByIndex = <T,>(items: T[], index: number) => {
  if (index > items.length - 1 || index < 0) return items;

  return items.slice(0, index).concat(items.slice(index + 1));
};

export const shuffle = (array: any[]) => {
  const newArray = array.slice();
  for (let i = newArray.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));
    [newArray[i], newArray[j]] = [newArray[j], newArray[i]];
  }
  return newArray;
};
