function groupBy(arr, property) {
  return arr.reduce((groups, obj) => {
    const key = obj[property];
    if (!groups[key]) {
      groups[key] = [];
    }
    groups[key].push(obj);
    return groups;
  }, {});
}