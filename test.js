const assert = require('./index');

//isTrue ok
assert.isTrue(true);
assert.isTrue(1);
assert.isTrue({});
assert.isTrue('a');
//isTrue error
assert.throws(() => assert.isTrue(false), assert.AssertionError);
assert.throws(() => assert.isTrue(0), assert.AssertionError);
assert.throws(() => assert.isTrue(''), assert.AssertionError);
assert.throws(() => assert.isTrue(undefined), assert.AssertionError);
assert.throws(() => assert.isTrue(NaN), assert.AssertionError);

//isStrictTrue ok
assert.isStrictTrue(true);
//isStrictTrue error
assert.throws(() => assert.isStrictTrue(1), assert.AssertionError);
assert.throws(() => assert.isStrictTrue({}), assert.AssertionError);
assert.throws(() => assert.isStrictTrue('a'), assert.AssertionError);
assert.throws(() => assert.isStrictTrue(false), assert.AssertionError);
assert.throws(() => assert.isStrictTrue(0), assert.AssertionError);
assert.throws(() => assert.isStrictTrue(''), assert.AssertionError);
assert.throws(() => assert.isStrictTrue(undefined), assert.AssertionError);
assert.throws(() => assert.isStrictTrue(NaN), assert.AssertionError);

//isFalse ok
assert.isFalse(false);
assert.isFalse(0);
assert.isFalse('');
assert.isFalse(undefined);
assert.isFalse(NaN);
//isFalse error
assert.throws(() => assert.isFalse(true), assert.AssertionError);
assert.throws(() => assert.isFalse(1), assert.AssertionError);
assert.throws(() => assert.isFalse({}), assert.AssertionError);
assert.throws(() => assert.isFalse('a'), assert.AssertionError);

//isStrictFalse ok
assert.isStrictFalse(false);
//isStrictFalse error
assert.throws(() => assert.isStrictFalse(1), assert.AssertionError);
assert.throws(() => assert.isStrictFalse({}), assert.AssertionError);
assert.throws(() => assert.isStrictFalse('a'), assert.AssertionError);
assert.throws(() => assert.isStrictFalse(true), assert.AssertionError);
assert.throws(() => assert.isStrictFalse(0), assert.AssertionError);
assert.throws(() => assert.isStrictFalse(''), assert.AssertionError);
assert.throws(() => assert.isStrictFalse(undefined), assert.AssertionError);
assert.throws(() => assert.isStrictFalse(NaN), assert.AssertionError);

//isNaN ok
assert.isNaN(NaN);
assert.isNaN('a');
assert.isNaN({});
assert.isNaN(undefined);
//isNaN error
assert.throws(() => assert.isNaN(0), assert.AssertionError);
assert.throws(() => assert.isNaN(1), assert.AssertionError);
assert.throws(() => assert.isNaN(1/0), assert.AssertionError);
assert.throws(() => assert.isNaN(-1/0), assert.AssertionError);
assert.throws(() => assert.isNaN('1'), assert.AssertionError);
assert.throws(() => assert.isNaN(''), assert.AssertionError);

//isNotNaN ok
assert.isNotNaN(0);
assert.isNotNaN(1);
assert.isNotNaN(1/0);
assert.isNotNaN(-1/0);
assert.isNotNaN('1');
assert.isNotNaN('');
//isNotNaN error
assert.throws(() => assert.isNotNaN(NaN), assert.AssertionError);
assert.throws(() => assert.isNotNaN('a'), assert.AssertionError);
assert.throws(() => assert.isNotNaN({}), assert.AssertionError);
assert.throws(() => assert.isNotNaN(undefined), assert.AssertionError);

//isStrictNaN ok
assert.isStrictNaN(NaN);
//isStrictNaN error
assert.throws(() => assert.isStrictNaN('a'), assert.AssertionError);
assert.throws(() => assert.isStrictNaN({}), assert.AssertionError);
assert.throws(() => assert.isStrictNaN(undefined), assert.AssertionError);
assert.throws(() => assert.isStrictNaN(0), assert.AssertionError);
assert.throws(() => assert.isStrictNaN(1), assert.AssertionError);
assert.throws(() => assert.isStrictNaN(1/0), assert.AssertionError);
assert.throws(() => assert.isStrictNaN(-1/0), assert.AssertionError);
assert.throws(() => assert.isStrictNaN('1'), assert.AssertionError);
assert.throws(() => assert.isStrictNaN(''), assert.AssertionError);

//isNotStrictNaN ok
assert.isNotStrictNaN('a');
assert.isNotStrictNaN({});
assert.isNotStrictNaN(undefined);
assert.isNotStrictNaN(0);
assert.isNotStrictNaN(1);
assert.isNotStrictNaN(1/0);
assert.isNotStrictNaN(-1/0);
assert.isNotStrictNaN('1');
assert.isNotStrictNaN('');
//isNotStrictNaN error
assert.throws(() => assert.isNotStrictNaN(NaN), assert.AssertionError);

//isStrictString ok
assert.isStrictString('');
assert.isStrictString('a');
assert.isStrictString(new String('abc'));
//isStrictString error
assert.throws(() => assert.isStrictString(1), assert.AssertionError);
assert.throws(() => assert.isStrictString([]), assert.AssertionError);
assert.throws(() => assert.isStrictString({}), assert.AssertionError);
assert.throws(() => assert.isStrictString(undefined), assert.AssertionError);
assert.throws(() => assert.isStrictString(()=>{}), assert.AssertionError);
assert.throws(() => assert.isStrictString(true), assert.AssertionError);
assert.throws(() => assert.isStrictString(/\w+/ig), assert.AssertionError);

//isStrictNumber ok
assert.isStrictNumber(0);
assert.isStrictNumber(1);
assert.isStrictNumber(NaN);
assert.isStrictNumber(1/0);
assert.isStrictNumber(-1/0);
//isStrictNumber error
assert.throws(() => assert.isStrictNumber('1'), assert.AssertionError);
assert.throws(() => assert.isStrictNumber('a'), assert.AssertionError);
assert.throws(() => assert.isStrictNumber([]), assert.AssertionError);
assert.throws(() => assert.isStrictNumber({}), assert.AssertionError);
assert.throws(() => assert.isStrictNumber(undefined), assert.AssertionError);
assert.throws(() => assert.isStrictNumber(()=>{}), assert.AssertionError);
assert.throws(() => assert.isStrictNumber(true), assert.AssertionError);
assert.throws(() => assert.isStrictNumber(/\w+/ig), assert.AssertionError);

//isStrictBoolean ok
assert.isStrictBoolean(true);
assert.isStrictBoolean(false);
//isStrictBoolean error
assert.throws(() => assert.isStrictBoolean('true'), assert.AssertionError);
assert.throws(() => assert.isStrictBoolean('a'), assert.AssertionError);
assert.throws(() => assert.isStrictBoolean([]), assert.AssertionError);
assert.throws(() => assert.isStrictBoolean({}), assert.AssertionError);
assert.throws(() => assert.isStrictBoolean(undefined), assert.AssertionError);
assert.throws(() => assert.isStrictBoolean(()=>{}), assert.AssertionError);
assert.throws(() => assert.isStrictBoolean(1), assert.AssertionError);
assert.throws(() => assert.isStrictBoolean(/\w+/ig), assert.AssertionError);

//isStrictArray ok
assert.isStrictArray([]);
assert.isStrictArray([1,2]);
assert.isStrictArray(['a','b']);
//isStrictArray error
assert.throws(() => assert.isStrictArray('a'), assert.AssertionError);
assert.throws(() => assert.isStrictArray(true), assert.AssertionError);
assert.throws(() => assert.isStrictArray({}), assert.AssertionError);
assert.throws(() => assert.isStrictArray(undefined), assert.AssertionError);
assert.throws(() => assert.isStrictArray(()=>{}), assert.AssertionError);
assert.throws(() => assert.isStrictArray(1), assert.AssertionError);
assert.throws(() => assert.isStrictArray(/\w+/ig), assert.AssertionError);

//isStrictFunction ok
assert.isStrictFunction(()=>{});
assert.isStrictFunction(function(){});
assert.isStrictFunction(class C{});
//isStrictFunction error
assert.throws(() => assert.isStrictFunction('a'), assert.AssertionError);
assert.throws(() => assert.isStrictFunction(true), assert.AssertionError);
assert.throws(() => assert.isStrictFunction({}), assert.AssertionError);
assert.throws(() => assert.isStrictFunction(undefined), assert.AssertionError);
assert.throws(() => assert.isStrictFunction([]), assert.AssertionError);
assert.throws(() => assert.isStrictFunction(1), assert.AssertionError);
assert.throws(() => assert.isStrictFunction(/\w+/ig), assert.AssertionError);

//isStrictRegExp ok
assert.isStrictRegExp(/\w+/ig);
assert.isStrictRegExp(new RegExp('\\w+', 'ig'));
//isStrictRegExp error
assert.throws(() => assert.isStrictRegExp('a'), assert.AssertionError);
assert.throws(() => assert.isStrictRegExp(true), assert.AssertionError);
assert.throws(() => assert.isStrictRegExp({}), assert.AssertionError);
assert.throws(() => assert.isStrictRegExp(undefined), assert.AssertionError);
assert.throws(() => assert.isStrictRegExp([]), assert.AssertionError);
assert.throws(() => assert.isStrictRegExp(1), assert.AssertionError);
assert.throws(() => assert.isStrictRegExp(()=>{}), assert.AssertionError);

//is ok
assert.is(1, Number);
assert.is(true, Boolean);
assert.is(()=>{}, Function);
assert.is(/\w+/ig, RegExp);
assert.is('', String);
assert.is('', 'String');
assert.is([], Array);
assert.is([], 'Array');
assert.is({}, Object);
assert.is({}, 'Object');
//is error
assert.throws(() => assert.is(1, String), assert.AssertionError);
assert.throws(() => assert.is('', Number), assert.AssertionError);
assert.throws(() => assert.is([], Object), assert.AssertionError);
//is other
class Super {}
class Sub extends Super {}
assert.is(new Sub(), Sub);
assert.is(new Sub(), Super);
assert.is(new Super(), Super);
assert.throws(() => assert.is(new Super(), Sub), assert.AssertionError);
assert.throws(() => assert.is(new Sub(), 'Super'), assert.AssertionError);

//isNot ok
assert.isNot(true, Number);

//assignable
assert.isAssignableFrom(Super, Sub);
assert.isAssignableFrom(Super, Super);
assert.isAssignableFrom(Sub, Sub);
assert.throws(() => assert.isAssignableFrom(Sub, Super), assert.AssertionError);
assert.throws(() => assert.isNotAssignableFrom(Super, Sub), assert.AssertionError);
assert.throws(() => assert.isNotAssignableFrom(Super, Super), assert.AssertionError);
assert.throws(() => assert.isNotAssignableFrom(Sub, Sub), assert.AssertionError);
assert.isNotAssignableFrom(Sub, Super);
assert.isAssignableTo(Sub, Super);
assert.isAssignableTo(Super, Super);
assert.isAssignableTo(Sub, Sub);
assert.throws(() => assert.isAssignableTo(Super, Sub), assert.AssertionError);
assert.throws(() => assert.isNotAssignableTo(Sub, Super), assert.AssertionError);
assert.throws(() => assert.isNotAssignableTo(Super, Super), assert.AssertionError);
assert.throws(() => assert.isNotAssignableTo(Sub, Sub), assert.AssertionError);
assert.isNotAssignableTo(Super, Sub);

console.log('test successful');
