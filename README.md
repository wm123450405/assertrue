# Asserture

[![GitHub release](https://img.shields.io/github/release/wm123450405/asserture.svg)](https://github.com/wm123450405/asserture)
[![Github Releases (by Release)](https://img.shields.io/github/downloads/wm123450405/asserture/total.svg)](https://github.com/wm123450405/asserture)
[![npm](https://img.shields.io/npm/v/asserture.svg)](https://www.npmjs.com/package/asserture)
[![npm](https://img.shields.io/npm/dm/asserture.svg)](https://www.npmjs.com/package/asserture)
[![Travis branch](https://img.shields.io/travis/wm123450405/asserture.svg)](https://travis-ci.org/wm123450405/asserture)

extends assert of node
扩展node原生的Assert功能

## Usage 用法

Usage for English is Coming soon...

### Start 开始使用

#### 1. 引入
>使用nodejs
```
$ npm install --save assert
```
```javascript
const assert = require('asserture');
```
> * 说明:asserture中已经包含原生assert的全部功能,不需要再额外引入assert

### 扩展功能

#### 1. `isTure(actual, [message])`
```javascript
assert.isTure(true); //ok
```

#### 2. `isStrictTrue(actual, [message])`

#### 3. `isFalse(actual, [message])`

#### 4. `isStrictFalse(actual, [message])`

#### 5. `isNaN(actual, [message])`

#### 6. `isStrictNaN(actual, [message])`

#### 7. `isNotNaN(actual, [message])`

#### 8. `isNotStrictNaN(actual, [message])`


#### 9. `isStrictString(actual, [message])`

#### 10. `isNotStrictString(actual, [message])`

#### 11. `isStrictArray(actual, [message])`

#### 12. `isNotStrictArray(actual, [message])`

#### 13. `isStrictFunction(actual, [message])`

#### 14. `isNotStrictFunction(actual, [message])`

#### 15. `isStrictRegExp(actual, [message])`

#### 16. `isNotStrictRegExp(actual, [message])`

#### 17. `isStrictBoolean(actual, [message])`

#### 18. `isNotStrictBoolean(actual, [message])`

#### 19. `isStrictNumber(actual, [message])`

#### 20. `isNotStrictNumber(actual, [message])`

## Change list 更新日志

### v1.0.3

	增加 Travis CI 支持
	新增对各种类型的断言

### v1.0.2

	正式启动项目

More docs and examples, to be continue...
更多接口文档的案例,未完待补充...  
