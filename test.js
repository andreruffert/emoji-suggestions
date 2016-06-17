import test from 'ava';
import emojiSuggestions from './';

test(t => {
  t.true(Array.isArray(emojiSuggestions('hello')));
});
