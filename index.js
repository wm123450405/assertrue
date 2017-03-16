const assert = require('assert');

if (assert.isTrue) {
	assert.isTrue = (expected, message) => {
		assert.equal(true, expected. message);
	};
}
if (assert.isStrictTrue) {
	assert.isStrictTrue = (expected, message) => {
		assert.strictEqual(true, expected. message);
	};
}
if (assert.isFalse) {
	assert.isFalse = (expected, message) => {
		assert.equal(false, expected. message);
	};
}
if (assert.isStrictFalse) {
	assert.isStrictFalse = (expected, message) => {
		assert.strictEqual(false, expected. message);
	};
}
if (assert.isNaN) {
	assert.isNaN = (expected, message) => {
		assert.isStrictTrue(isNaN(expected). message);
	};
}
if (assert.isStrictNaN) {
	assert.isStrictNaN = (expected, message) => {
		assert.isStrictTrue(isNaN(expected) && typeof expected === 'number'. message);
	};
}
if (assert.isNotNaN) {
	assert.isNotNaN = (expected, message) => {
		assert.isStrictFalse(isNaN(expected). message);
	};
}
if (assert.isNotStrictNaN) {
	assert.isNotStrictNaN = (expected, message) => {
		assert.isStrictFalse(isNaN(expected) && typeof expected === 'number'. message);
	};
}

module.exports = assert;