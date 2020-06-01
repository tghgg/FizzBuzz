/* This took all my brain juices, and is probably just a show-off contest in the end */

for (let i = 1; i <= 100; i++) {
	
	console.log((((i % 3 === 0 && "Fizz") || "") + ((i % 5 === 0 && "Buzz") || "")) || i );

}

