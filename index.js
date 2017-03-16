const assert = require('assert');

if (!assert.isTrue) {
	assert.isTrue = (actual, message) => {
		if (!actual) assert.fail(actual, true, message, '==', assert.isTrue);
	};
}
if (!assert.isStrictTrue) {
	assert.isStrictTrue = (actual, message) => {
		if (actual !== true) assert.fail(actual, true, message, '==', assert.isStrictTrue);
	};
}
if (!assert.isFalse) {
	assert.isFalse = (actual, message) => {
		if (actual) assert.fail(actual, false, message, '!=', assert.isFalse);
	};
}
if (!assert.isStrictFalse) {
	assert.isStrictFalse = (actual, message) => {
		if (actual !== false) assert.fail(actual, false, message, '!==', assert.isStrictFalse);
	};
}
if (!assert.isNaN) {
	assert.isNaN = (actual, message) => {
		if (!isNaN(actual)) assert.fail(actual, NaN, message, 'is', assert.isNaN);
	};
}
if (!assert.isStrictNaN) {
	assert.isStrictNaN = (actual, message) => {
		if (!(isNaN(actual) && typeof actual === 'number')) assert.fail(actual, NaN, message, 'must be', assert.isStrictNaN);
	};
}
if (!assert.isNotNaN) {
	assert.isNotNaN = (actual, message) => {
		if (isNaN(actual)) assert.fail(actual, 'NaN', message, 'is not', assert.isNotNaN);
	};
}
if (!assert.isNotStrictNaN) {
	assert.isNotStrictNaN = (actual, message) => {
		if (isNaN(actual) && typeof actual === 'number') assert.fail(actual, NaN, message, 'must not be', assert.isNotStrictNaN);
	};
}

module.exports = assert;