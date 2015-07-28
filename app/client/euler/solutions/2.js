var fib = function(first, second, sum) {
	var next = first + second;
	if(next % 2 === 0) {
		sum += next;
	}
	if(next < 4000000) {
		return fib(second, next, sum);
	} else {
		return sum;
	}
}

console.log(fib(0, 1, 0));
