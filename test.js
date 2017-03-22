const assert = require('./index');

//isTrue ok
assert.isTrue(true);
assert.isTrue(1);
assert.isTrue({});
assert.isTrue('a');
//isTrue error
assert.throws(() => assert.isTrue(false), assert.AssertError);
assert.throws(() => assert.isTrue(0), assert.AssertError);
assert.throws(() => assert.isTrue(''), assert.AssertError);
assert.throws(() => assert.isTrue(undefined), assert.AssertError);
assert.throws(() => assert.isTrue(NaN), assert.AssertError);

//isStrictTrue ok
assert.isStrictTrue(true);
//isStrictTrue error
assert.throws(() => assert.isStrictTrue(1), assert.AssertError);
assert.throws(() => assert.isStrictTrue({}), assert.AssertError);
assert.throws(() => assert.isStrictTrue('a'), assert.AssertError);
assert.throws(() => assert.isStrictTrue(false), assert.AssertError);
assert.throws(() => assert.isStrictTrue(0), assert.AssertError);
assert.throws(() => assert.isStrictTrue(''), assert.AssertError);
assert.throws(() => assert.isStrictTrue(undefined), assert.AssertError);
assert.throws(() => assert.isStrictTrue(NaN), assert.AssertError);

//isFalse ok
assert.isFalse(false);
assert.isFalse(0);
assert.isFalse('');
assert.isFalse(undefined);
assert.isFalse(NaN);
//isFalse error
assert.throws(() => assert.isFalse(true), assert.AssertError);
assert.throws(() => assert.isFalse(1), assert.AssertError);
assert.throws(() => assert.isFalse({}), assert.AssertError);
assert.throws(() => assert.isFalse('a'), assert.AssertError);

//isStrictFalse ok
assert.isStrictFalse(false);
//isStrictFalse error
assert.throws(() => assert.isStrictFalse(1), assert.AssertError);
assert.throws(() => assert.isStrictFalse({}), assert.AssertError);
assert.throws(() => assert.isStrictFalse('a'), assert.AssertError);
assert.throws(() => assert.isStrictFalse(true), assert.AssertError);
assert.throws(() => assert.isStrictFalse(0), assert.AssertError);
assert.throws(() => assert.isStrictFalse(''), assert.AssertError);
assert.throws(() => assert.isStrictFalse(undefined), assert.AssertError);
assert.throws(() => assert.isStrictFalse(NaN), assert.AssertError);

//isNaN ok
assert.isNaN(NaN);
assert.isNaN('a');
assert.isNaN({});
assert.isNaN(undefined);
//isNaN error
assert.throws(() => assert.isNaN(0), assert.AssertError);
assert.throws(() => assert.isNaN(1), assert.AssertError);
assert.throws(() => assert.isNaN(1/0), assert.AssertError);
assert.throws(() => assert.isNaN(-1/0), assert.AssertError);
assert.throws(() => assert.isNaN('1'), assert.AssertError);
assert.throws(() => assert.isNaN(''), assert.AssertError);

//isNotNaN ok
assert.isNotNaN(0);
assert.isNotNaN(1);
assert.isNotNaN(1/0);
assert.isNotNaN(-1/0);
assert.isNotNaN('1');
assert.isNotNaN('');
//isNotNaN error
assert.throws(() => assert.isNotNaN(NaN), assert.AssertError);
assert.throws(() => assert.isNotNaN('a'), assert.AssertError);
assert.throws(() => assert.isNotNaN({}), assert.AssertError);
assert.throws(() => assert.isNotNaN(undefined), assert.AssertError);

//isStrictNaN ok
assert.isStrictNaN(NaN);
//isStrictNaN error
assert.throws(() => assert.isStrictNaN('a'), assert.AssertError);
assert.throws(() => assert.isStrictNaN({}), assert.AssertError);
assert.throws(() => assert.isStrictNaN(undefined), assert.AssertError);
assert.throws(() => assert.isStrictNaN(0), assert.AssertError);
assert.throws(() => assert.isStrictNaN(1), assert.AssertError);
assert.throws(() => assert.isStrictNaN(1/0), assert.AssertError);
assert.throws(() => assert.isStrictNaN(-1/0), assert.AssertError);
assert.throws(() => assert.isStrictNaN('1'), assert.AssertError);
assert.throws(() => assert.isStrictNaN(''), assert.AssertError);

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
assert.throws(() => assert.isNotStrictNaN(NaN), assert.AssertError);

//isStrictString ok
assert.isStrictString('');
assert.isStrictString('a');
assert.isStrictString(new String('abc'));
//isStrictString error
assert.throws(() => assert.isStrictString(1), assert.AssertError);
assert.throws(() => assert.isStrictString([]), assert.AssertError);
assert.throws(() => assert.isStrictString({}), assert.AssertError);
assert.throws(() => assert.isStrictString(undefined), assert.AssertError);
assert.throws(() => assert.isStrictString(()=>{}), assert.AssertError);
assert.throws(() => assert.isStrictString(true), assert.AssertError);
assert.throws(() => assert.isStrictString(/\w+/ig), assert.AssertError);

//isStrictNumber ok
assert.isStrictNumber(0);
assert.isStrictNumber(1);
assert.isStrictNumber(NaN);
assert.isStrictNumber(1/0);
assert.isStrictNumber(-1/0);
//isStrictNumber error
assert.throws(() => assert.isStrictNumber('1'), assert.AssertError);
assert.throws(() => assert.isStrictNumber('a'), assert.AssertError);
assert.throws(() => assert.isStrictNumber([]), assert.AssertError);
assert.throws(() => assert.isStrictNumber({}), assert.AssertError);
assert.throws(() => assert.isStrictNumber(undefined), assert.AssertError);
assert.throws(() => assert.isStrictNumber(()=>{}), assert.AssertError);
assert.throws(() => assert.isStrictNumber(true), assert.AssertError);
assert.throws(() => assert.isStrictNumber(/\w+/ig), assert.AssertError);

//isStrictBoolean ok
assert.isStrictBoolean(true);
assert.isStrictBoolean(false);
//isStrictBoolean error
assert.throws(() => assert.isStrictBoolean('true'), assert.AssertError);
assert.throws(() => assert.isStrictBoolean('a'), assert.AssertError);
assert.throws(() => assert.isStrictBoolean([]), assert.AssertError);
assert.throws(() => assert.isStrictBoolean({}), assert.AssertError);
assert.throws(() => assert.isStrictBoolean(undefined), assert.AssertError);
assert.throws(() => assert.isStrictBoolean(()=>{}), assert.AssertError);
assert.throws(() => assert.isStrictBoolean(1), assert.AssertError);
assert.throws(() => assert.isStrictBoolean(/\w+/ig), assert.AssertError);

//isStrictArray ok
assert.isStrictArray([]);
assert.isStrictArray([1,2]);
assert.isStrictArray(['a','b']);
//isStrictArray error
assert.throws(() => assert.isStrictArray('a'), assert.AssertError);
assert.throws(() => assert.isStrictArray(true), assert.AssertError);
assert.throws(() => assert.isStrictArray({}), assert.AssertError);
assert.throws(() => assert.isStrictArray(undefined), assert.AssertError);
assert.throws(() => assert.isStrictArray(()=>{}), assert.AssertError);
assert.throws(() => assert.isStrictArray(1), assert.AssertError);
assert.throws(() => assert.isStrictArray(/\w+/ig), assert.AssertError);

//isStrictFunction ok
assert.isStrictFunction(()=>{});
assert.isStrictFunction(function(){});
assert.isStrictFunction(class C{});
//isStrictFunction error
assert.throws(() => assert.isStrictFunction('a'), assert.AssertError);
assert.throws(() => assert.isStrictFunction(true), assert.AssertError);
assert.throws(() => assert.isStrictFunction({}), assert.AssertError);
assert.throws(() => assert.isStrictFunction(undefined), assert.AssertError);
assert.throws(() => assert.isStrictFunction([]), assert.AssertError);
assert.throws(() => assert.isStrictFunction(1), assert.AssertError);
assert.throws(() => assert.isStrictFunction(/\w+/ig), assert.AssertError);

//isStrictRegExp ok
assert.isStrictRegExp(/\w+/ig);
assert.isStrictRegExp(new RegExp('\\w+', 'ig'));
//isStrictRegExp error
assert.throws(() => assert.isStrictRegExp('a'), assert.AssertError);
assert.throws(() => assert.isStrictRegExp(true), assert.AssertError);
assert.throws(() => assert.isStrictRegExp({}), assert.AssertError);
assert.throws(() => assert.isStrictRegExp(undefined), assert.AssertError);
assert.throws(() => assert.isStrictRegExp([]), assert.AssertError);
assert.throws(() => assert.isStrictRegExp(1), assert.AssertError);
assert.throws(() => assert.isStrictRegExp(()=>{}), assert.AssertError);

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
assert.throws(() => assert.is(1, String), assert.AssertError);
assert.throws(() => assert.is('', Number), assert.AssertError);
assert.throws(() => assert.is([], Object), assert.AssertError);
//is other
class Super {}
class Sub extends Super {}
assert.is(new Sub(), Sub);
assert.is(new Sub(), Super);
assert.is(new Super(), Super);
assert.throws(() => assert.is(new Super(), Sub), assert.AssertError);
assert.throws(() => assert.is(new Sub(), 'Super'), assert.AssertError);

//isNot ok
assert.isNot(true, Number);
//other ignore
//+86-025-52334774

console.log('test successful');