const assert = require('assert');

const types = {
	get Undefined() {
		return 'Undefined';
	},
	get String() {
		return 'String';
	},
	get Array() {
		return 'Array';
	},
	get Function() {
		return 'Function';
	},
	get RegExp() {
		return 'RegExp';
	},
	get Boolean() {
		return 'Boolean';
	},
	get Number() {
		return 'Number';
	},
	get Symbol() {
		return 'Symbol';
	}
}
const getFunctionNameReg = /^(function|class)\s+([^({\s]*)\s*[({].+$/ig;
const getObjectTypeNameReg = /^\[\w+\s(.+)]$/ig;
const getType = value => {
	if (typeof value === 'undefined') {
		return types.Undefined;
	} else {
		let type = value[Symbol.toStringTag] || Object.prototype.toString.call(value).replace(getObjectTypeNameReg, '$1');
		if (type === 'Object') {
			return Function.prototype.toString.call(value.constructor).replace(getFunctionNameReg, '$2');
		} else {
			let typeName = typeof value;
			if (typeName !== 'object') {
				return typeName.substring(0, 1).toUpperCase() + typeName.substring(1);
			} else {
				return type;
			}
		}
	}
};
const getName = type => {
	if (typeof type === 'undefined') {
		return types.Undefined;
	} else {
		if (getType(type) === types.Function) {
			return Function.prototype.toString.call(type).replace(getFunctionNameReg, '$2');
		} else {
			return type.toString();
		}
	}
};
const isInstanceOfBoolean = element => element instanceof Boolean || element === true || element === false;
const isInstanceOfString = element => element instanceof String || getType(element) === types.String;
const isInstanceOfArray = element => element instanceof Array || getType(element) === types.Array || Array.isArray && Array.isArray(element);
const isInstanceOfObject = element => element instanceof Object && !(element instanceof RegExp || isInstanceOfArray(element) || isInstanceOfFunction(element));
const isInstanceOfNumber = element => element instanceof Number || getType(element) === types.Number;
const isInstanceOfFunction = element => element instanceof Function || getType(element) === types.Function;
const isInstanceOf = type => element => element instanceof type;
const isInstanceOfByTypeName = type => element => getType(element).toUpperCase() === type.toUpperCase();

const instanceOf = (value, type) => (type === Boolean ? isInstanceOfBoolean : type === String ? isInstanceOfString : type === Array ? isInstanceOfArray : type === Number ? isInstanceOfNumber : type === Function ? isInstanceOfFunction : type === Object ? isInstanceOfObject : getType(type) === types.String ? isInstanceOfByTypeName(type) : isInstanceOf(type))(value);

const must = 'must be';
const mustNot = 'must not be';
const is = 'is';
const isNot = 'is not';

if (!assert.isTrue) {
	assert.isTrue = (actual, message) => {
		if (!actual) assert.fail(actual, true, message, is, assert.isTrue);
	};
}
if (!assert.isStrictTrue) {
	assert.isStrictTrue = (actual, message) => {
		if (actual !== true) assert.fail(actual, true, message, must, assert.isStrictTrue);
	};
}
if (!assert.isFalse) {
	assert.isFalse = (actual, message) => {
		if (actual) assert.fail(actual, false, message, isNot, assert.isFalse);
	};
}
if (!assert.isStrictFalse) {
	assert.isStrictFalse = (actual, message) => {
		if (actual !== false) assert.fail(actual, false, message, mustNot, assert.isStrictFalse);
	};
}
if (!assert.isNaN) {
	assert.isNaN = (actual, message) => {
		if (!isNaN(actual)) assert.fail(actual, NaN, message, is, assert.isNaN);
	};
}
if (!assert.isNotNaN) {
	assert.isNotNaN = (actual, message) => {
		if (isNaN(actual)) assert.fail(actual, NaN, message, isNot, assert.isNotNaN);
	};
}
if (!assert.isStrictNaN) {
	assert.isStrictNaN = (actual, message) => {
		if (!(isNaN(actual) && getType(actual) === types.Number)) assert.fail(actual, NaN, message, must, assert.isStrictNaN);
	};
}
if (!assert.isNotStrictNaN) {
	assert.isNotStrictNaN = (actual, message) => {
        if (isNaN(actual) && getType(actual) === types.Number) assert.fail(actual, NaN, message, mustNot, assert.isNotStrictNaN);
	};
}
if (!assert.isStrictString) {
	assert.isStrictString = (actual, message) => {
		if (getType(actual) !== types.String) assert.fail(actual, types.String, message, must, assert.isStrictString);
	};
}
if (!assert.isNotStrictString) {
	assert.isNotStrictString = (actual, message) => {
		if (getType(actual) === types.String) assert.fail(actual, types.String, message, mustNot, assert.isNotStrictString);
	};
}
if (!assert.isStrictBoolean) {
	assert.isStrictBoolean = (actual, message) => {
		if (getType(actual) !== types.Boolean) assert.fail(actual, types.Boolean, message, must, assert.isStrictBoolean);
	};
}
if (!assert.isNotStrictBoolean) {
	assert.isNotStrictBoolean = (actual, message) => {
		if (getType(actual) === types.Boolean) assert.fail(actual, types.Boolean, message, mustNot, assert.isNotStrictBoolean);
	};
}
if (!assert.isStrictArray) {
	assert.isStrictArray = (actual, message) => {
		if (getType(actual) !== types.Array) assert.fail(actual, types.Array, message, must, assert.isStrictArray);
	};
}
if (!assert.isNotStrictArray) {
	assert.isNotStrictArray = (actual, message) => {
		if (getType(actual) === types.Array) assert.fail(actual, types.Array, message, mustNot, assert.isNotStrictArray);
	};
}
if (!assert.isStrictFunction) {
	assert.isStrictFunction = (actual, message) => {
		if (getType(actual) !== types.Function) assert.fail(actual, types.Function, message, must, assert.isStrictFunction);
	};
}
if (!assert.isNotStrictFunction) {
	assert.isNotStrictFunction = (actual, message) => {
		if (getType(actual) === types.Function) assert.fail(actual, types.Function, message, mustNot, assert.isNotStrictFunction);
	};
}
if (!assert.isStrictRegExp) {
	assert.isStrictRegExp = (actual, message) => {
		if (getType(actual) !== types.RegExp) assert.fail(actual, types.RegExp, message, must, assert.isStrictRegExp);
	};
}
if (!assert.isNotStrictRegExp) {
	assert.isNotStrictRegExp = (actual, message) => {
		if (getType(actual) === types.RegExp) assert.fail(actual, types.RegExp, message, mustNot, assert.isNotStrictRegExp);
	};
}
if (!assert.isStrictNumber) {
	assert.isStrictNumber = (actual, message) => {
		if (getType(actual) !== types.Number) assert.fail(actual, types.Number, message, must, assert.isStrictNumber);
	};
}
if (!assert.isNotStrictNumber) {
	assert.isNotStrictNumber = (actual, message) => {
		if (getType(actual) === types.Number) assert.fail(actual, types.Number, message, mustNot, assert.isNotStrictNumber);
	};
}
if (!assert.is) {
    assert.is = (actual, expectedType, message) => {
        if (!instanceOf(actual, expectedType)) assert.fail(actual, getName(expectedType), message, is, assert.is);
    };
}
if (!assert.isNot) {
    assert.isNot = (actual, expectedType, message) => {
        if (instanceOf(actual, expectedType)) assert.fail(actual, getName(expectedType), message, isNot, assert.isNot);
    };
}

module.exports = assert;