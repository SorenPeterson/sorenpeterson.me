var arr = [];
for(var i = 0; i < 1000; i++) {
	for(var j = 0; j < 1000; j++) {
		if(String(i*j).split('').reverse().join('') === String(i*j)) {
			arr.push(i*j);
		}
	}
}
console.log(arr.sort(function(a, b) {
	return a - b;
}));
