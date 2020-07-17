function fizzBuzz(num) {
	const result = [];

	for (let i = 1; i <= num; i++) {
		if (i % 15 === 0) result.push(`${i}: FizzBuzz`);
		else if (i % 3 === 0) result.push(`${i}: Fizz`);
		else if (i % 5 === 0) result.push(`${i}: Buzz`);
		else result.push(`${i}: ${i}`);
	}

	console.log(result.join(", "));
}

fizzBuzz(36);
