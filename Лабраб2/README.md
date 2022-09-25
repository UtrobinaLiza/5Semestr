
```js
let studsort = (arr) => {
    
	let result = arr
    .sort((a,b) => b[3] - a[3]);
	
    result = result
	.sort((a, b) => {
		return b[1].toLowerCase() < a[1].toLowerCase() ? -1:1
	})
    return result;
}


module.exports = {
    studsort
    
}
```

```js
const { studsort } = require('./module')

let students = [
	[0, 'ПИб', 'Сидоров', 2.4],
	[1, 'ПИб', 'Камикадзе', 3.3],
	[2, 'ПИНб', 'Кашина', 2.4],
	[3, 'Иcб', 'Аитов', 1.9],
	[4, 'Иcб', 'Абрамович', 2.1],
	[5, 'ПИб', 'Ямбург', 2.2],
	[6, 'ПИНб', 'Шарова', 2.5],
]

console.log(studsort(students)
    .forEach(item => console.log(item)));
```