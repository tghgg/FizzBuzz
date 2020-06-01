/* This took all my brain juices, and is probably just a show-off contest in the end */
/* This would not have been possible without the first few chapters of Eloquent Javascript. Go give it a read and add some rigor to your knowledge. Thanks my man the author. */

for (let i = 1; i <= 100; i++) {
	
	console.log((((i % 3 === 0 && "Fizz") || "") + ((i % 5 === 0 && "Buzz") || "")) || i );

}

