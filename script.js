//your JS code here. If required.
function microtask(name) {
	console.log(`Processing microtask: ${name}`);
}

function macrotask(name) {
	console.log(`Processing macrotask: ${name}`);
}

setTimeout(() => macrotask('First Macrotask'), 0);

Promise.resolve().then(() => microtask('First Microtask'));
Promise.resolve().then(() => microtask('Second Microtask'));

setTimeout(() => macrotask('First Macrotask'), 0);

microtask('Third Microtask');

console.log('End of the main script');