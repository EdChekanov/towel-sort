
// You should implement your task here.

module.exports = function towelSort (matrix) {
  if (matrix == undefined || matrix[0] == undefined) {
    return [];
  };
let i = 0;
  let result = '';
  while (i < matrix.length) {
    if (i % 2 === 0) {
      result = result + ' ' + matrix[i].join(' ');
      i++;
    } else {
      result = result + ' ' + matrix[i].reverse().join(' ');
      i++;
    }
  }
  result = result.slice(1);
  return result.split(' ');
}
