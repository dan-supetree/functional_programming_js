const _filter = (list, predicate) => {
  const newList = [];
  for (let i = 0, len = list.length; i < len; i++) {
    if (predicate(list[i])) newList.push(list[i]);
  }
  return newList;
};

const _map = (list, iteratee) => {
  const newList = [];

  for (let i = 0, len = list.length; i < len; i++) {
    newList.push(iteratee(list[i]));
  }
  return newList;
};
