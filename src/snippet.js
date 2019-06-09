/* istanbul ignore next */
function myFunc() {
	console.log(
		'Not covered but won\'t appear on coverage reports as such'
	);
}

function myOtherUncoveredFunc(something) {
	/* istanbul ignore else */
	if (something) {
		console.log('This ain\'t covered');
	} else {
		console.log('Neither is this but it won\'t get flagged');
	}
}
