import test from 'ava';
import emojiSuggestions from './';

test('Empty string should return false', t => {
  t.false(emojiSuggestions(''));
});

test('"hello" should return array', t => {
  t.true(Array.isArray(emojiSuggestions('hello')));
});
