var isprime = function(number, primes) {
	for(i in primes) {
	}
	for(var i = 2; i < number; i++) {
		if(number % i === 0) {
			return false;
		} else if(i % 1000 === 0) {
			//console.log(i/number);
		}
	}
	return true;
}

var largest = function(obj) {
	var factors = [];
	for(i in obj) {
		factors.push(Number(i));
	}
	console.log(factors);
	factors.sort(function(a, b) {
		return a - b;
	});
	console.log(factors);
	factors.reverse();
	console.log(factors);
	return factors[0];
}

var HPF = function(number, index, skip, primes, factors) {
	console.log(Date(), factors);
	for(i in primes) {
		if(number % i === 0) {
			factors[i] = true;
			if(number / i === 1) {
				return largest(factors);
			} else {
				return HPF(number / i, index, false, primes, factors);
			}
		}
	}

	var possible = index * 6 + 1;
	if(isprime(possible, primes)) {
		primes[possible] = true;
		if(number % possible === 0) {
			factors[possible] = true;
			if(number / possible === 1) {
				return largest(factors);
			} else {
				return HPF(number / possible, index, false, primes, factors);
			}
		}
	}
	possible -= 2;
	if(isprime(possible, primes)) {
		primes[possible] = true;
		if(number % possible === 0) {
			factors[possible] = true;
			if(number / possible === 1) {
				return largest(factors);
			} else {
				return HPF(number / possible, index+1, false, primes, factors);
			}
		}
	}
	return HPF(number, index+1, true, primes, factors);
}
console.log(HPF(600851475143, 1, false, {'2': true, '3': true}, {}));
console.log(HPF(71, 1, false, {'2': true, '3': true}, {}));
//console.log(isprime(175892))

