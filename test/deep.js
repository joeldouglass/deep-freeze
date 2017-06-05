var test = require('tap').test;
var deepFreeze = require('../');

test('deep freeze', function (t) {
    t.plan(2);
    
    deepFreeze(Buffer);
    Buffer.x = 5;
    t.equal(Buffer.x, undefined);
    
    Buffer.prototype.z = 3;
    t.equal(Buffer.prototype.z, undefined);
});

test('assume no Object.prototype', function(t){
    
    t.plan(1);
    const map = Object.create(null);

    map.x = 5;

    deepFreeze(map);
    map.y = 6;

    t.equal(Buffer.y, undefined);
});
