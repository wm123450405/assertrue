const assert = require('./index');

assert.throws(() => assert.isTrue(false), assert.AssertError);

console.log('test successful');