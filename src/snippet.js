/* istanbul ignore next */
function myFunc() {
	console.log(
		'Not covered but won\'t appear on coverage reports as such'
	);
}

// this function will appear as uncovered
function ignoreLine() {
  /* istanbul ignore next */
  console.log(
		'This line won\'t appear as uncovered'
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
