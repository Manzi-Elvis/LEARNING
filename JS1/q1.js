function flattenArray(arr) {
  let result = [];
  for (let element of arr) {
    if (Array.isArray(element)) {
      result.push(...flattenArray(element));
    } else {
      result.push(element);
    }
  }
  return result;
}