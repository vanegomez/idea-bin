describe ('our awesome test suite', function () {

  it('should work, right?', function () {
    assert(true);
  });

});

describe ('addTwo', function () {

  it('should add two', function () {
    assert.equal(addTwo(2), "4");
  });

});

describe ('addTwo', function () {

  it('should add two', function () {
    assert.strictEqual(addTwo(2), 4);
  });

});

describe ('add', function () {

  it('should add two arguments', function () {
    assert.strictEqual(add(1,2), 3);
  });

});

describe ('arrays', function () {

  it('should not regular equal another array', function () {
    assert.notEqual([],[])
  });

  it('should not regular equal another array', function () {
    assert.deepEqual([1],[1])
  });

});

describe ('sum', function () {

  it('should return an-umm—sum of all the numbers', function () {
    assert.strictEqual(sum([1,2,3]), 6);
  });

});

// exercise 3

describe ('truncateText', function () {

  it('should return back a word shorter than the length', function () {
    assert.strictEqual(truncateText("wow", 3), "wow");
  });

  it('should truncate text longer than the length', function () {
    assert.strictEqual(truncateText("wowow", 4), "wowo…");
  });

});
