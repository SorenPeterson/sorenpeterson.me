var multiples = [3, 5, -15];
var calculateTotal = function(place, sum) {
	var num = multiples[place];
	num = num > 0 ? num : num * -1;
	for(var i = 0; i*num < 1000; i++) {
		sum += i*multiples[place];
	}
	if(place < multiples.length) {
		return calculateTotal(place+1, sum);
	} else {
		return sum;
	}
}
console.log(calculateTotal(0, 0));
