

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