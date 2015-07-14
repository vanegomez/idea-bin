describe('idea spec', function () {

  it('should find all .idea elements', function () {
    MagicLamp.load('ideas/index');
    assert.equal($('.ideas').length, 1);
  });

  it('should work', function (done) {
    MagicLamp.load('ideas/index');
    $.getJSON('/ideas').then(function (ideas) {
      assert.equal(ideas.idea.length, 2);
      done();
    });
  });

});

