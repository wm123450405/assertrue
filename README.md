# Assertrue

[![GitHub release](https://img.shields.io/github/release/wm123450405/assertrue.svg)](https://github.com/wm123450405/assertrue)
[![Github Releases (by Release)](https://img.shields.io/github/downloads/wm123450405/assertrue/total.svg)](https://github.com/wm123450405/assertrue)
[![npm](https://img.shields.io/npm/v/assertrue.svg)](https://www.npmjs.com/package/assertrue)
[![npm](https://img.shields.io/npm/dm/assertrue.svg)](https://www.npmjs.com/package/assertrue)
[![Travis branch](https://img.shields.io/travis/wm123450405/assertrue.svg)](https://travis-ci.org/wm123450405/assertrue)

extends assert of node
扩展node原生的Assert功能

## Usage 用法

Usage for English is Coming soon...

### Start 开始使用

#### 1. 引入
>使用nodejs
```
$ npm install --save assertrue
```
```javascript
const assert = require('assertrue');
```
> * 说明:assertrue中已经包含原生assert的全部功能,不需要再额外引入assert

### 扩展功能

#### 1. `isTrue(actual, [message])`
```javascript
assert.isTrue(true); //ok
assert.isTrue(1); //ok
assert.isTrue('a'); //ok
assert.isTrue(false); //AssertError
assert.isTrue(0); //AssertError
assert.isTrue(''); //AssertError
```

#### 2. `isStrictTrue(actual, [message])`
```javascript
assert.isStrictTrue(true); //ok
assert.isStrictTrue(1); //AssertError
assert.isStrictTrue('a'); //AssertError
assert.isStrictTrue(false); //AssertError
assert.isStrictTrue(0); //AssertError
assert.isStrictTrue(''); //AssertError
```

#### 3. `isFalse(actual, [message])`

#### 4. `isStrictFalse(actual, [message])`

#### 5. `isNaN(actual, [message])`
```javascript
assert.isNaN(NaN); //ok
assert.isNaN('a'); //ok
assert.isNaN({}); //ok
assert.isNaN(1); //AssertError
assert.isNaN('1'); //AssertError
assert.isNaN(true); //AssertError
```

#### 6. `isStrictNaN(actual, [message])`
```javascript
assert.isStrictNaN(NaN); //ok
assert.isStrictNaN('a'); //AssertError
assert.isStrictNaN({}); //AssertError
assert.isStrictNaN(1); //AssertError
assert.isStrictNaN('1'); //AssertError
assert.isStrictNaN(true); //AssertError
```

#### 7. `isNotNaN(actual, [message])`

#### 8. `isNotStrictNaN(actual, [message])`

#### 9. `isStrictString(actual, [message])`
```javascript
assert.isStrictString('a'); //ok
```

#### 10. `isNotStrictString(actual, [message])`

#### 11. `isStrictArray(actual, [message])`
```javascript
assert.isStrictString(['a']); //ok
```

#### 12. `isNotStrictArray(actual, [message])`

#### 13. `isStrictFunction(actual, [message])`
```javascript
assert.isStrictFunction(()=>{}); //ok
```

#### 14. `isNotStrictFunction(actual, [message])`

#### 15. `isStrictRegExp(actual, [message])`
```javascript
assert.isStrictRegExp(/\w+/ig); //ok
```

#### 16. `isNotStrictRegExp(actual, [message])`

#### 17. `isStrictBoolean(actual, [message])`
```javascript
assert.isStrictBoolean(true); //ok
```

#### 18. `isNotStrictBoolean(actual, [message])`

#### 19. `isStrictNumber(actual, [message])`
```javascript
assert.isStrictNumber(1); //ok
```

#### 20. `isNotStrictNumber(actual, [message])`

#### 21. `is(actual, expectedType, [message])`
```javascript
assert.is(1, Number); //ok
assert.is(1, 'Number'); //ok

class Super {}
class Sub extends Super {}

assert.is(new Sub(), Sub); //ok
assert.is(new Sub(), Super); //ok
assert.is(new Super(), Super); //ok
assert.is(new Super(), Sub); //AssertError
assert.is(new Sub(), 'Super'); //AssertError
```

#### 22. `isNot(actual, expectedType, [message])`

## Change list 更新日志

### 2017-03-22 v1.0.4

	重命名为assertrue

### 2017-03-17 v1.0.3

	增加 Travis CI 支持
	新增对各种类型的断言

### v1.0.2

	正式启动项目

More docs and examples, to be continue...
更多接口文档的案例,未完待补充...  
