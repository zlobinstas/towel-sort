
// You should implement your task here.

module.exports = function towelSort (matrix) {
    let arr = [];
    let i = 0;
    if (matrix == undefined) return [];
  for (let obj of matrix) {
      if (i % 2 != 0) {
        matrix[i].reverse();
      }
      i++;
      for (let obj_2 of obj){
        arr.push(obj_2);
      }
  } return (!arr || arr.length == 0) ? [] : arr;
}
