const { sort_insert } = require("./module");

// let arr = [1,2,3,4,5,6,6,6,-3,-5,2,2,2,6,7];



let arr = Array(10000).fill(0).map((_) => Math.floor(Math.random()*10000));

console.clear();

console.time('time');

console.table(sort_insert(arr))

console.timeEnd('time')


