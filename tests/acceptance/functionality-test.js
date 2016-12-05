import { test } from 'qunit';
import moduleForAcceptance from 'lorem-ipsum/tests/helpers/module-for-acceptance';

moduleForAcceptance('Acceptance | functionality');

// test 1
test('visiting /liked to count all liked fonts', function(assert) {
  visit('/liked');

  andThen(function() {
    assert.equal(find('.likedFont').length, 8);
  });
});

// test 2
test('testing to make sure title is the same', function(assert) {
  visit('/');
  click('div.refresh');

  andThen(function() {
    assert.equal(find('.h1-test').text(), "Lorem Ipsum");
  });
});

// test 3
test('testing to make sure code block is printed', function(assert) {
  visit('/liked');
  click('.likedFont');

  andThen(function() {
    assert.equal(find('.codespace').css('display'), "block");
  });
});