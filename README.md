# Asserture

[![Github Releases (by Release)](https://img.shields.io/github/downloads/wm123450405/asserture/total.svg)](https://github.com/wm123450405/asserture)
[![npm](https://img.shields.io/npm/v/asserture.svg)](https://www.npmjs.com/package/asserture)

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

#### 1. `isTure(expected, [message])`
```javascript
assert.isTure(true); //ok
```

#### 2. `isStrictTrue(expected, [message])`

#### 3. `isFalse(expected, [message])`

#### 4. `isStrictFalse(expected, [message])`

#### 5. `isNaN(expected, [message])`

#### 6. `isStrictNaN(expected, [message])`

## Change list 更新日志

### v1.0.0
	初始化项目

More docs and examples, to be continue...
更多接口文档的案例,未完待补充...  