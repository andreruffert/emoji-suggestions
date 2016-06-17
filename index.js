const emoji = require('emojilib');
const pluralize = require('pluralize');

function emojiSuggestions(word) {
  let suggestions;
  if (Array.isArray(word)) {
    suggestions = word.map(word => {
      return {
        [word]: suggestEmoji(word)
      };
    });
  } else {
    suggestions = {
      [word]: suggestEmoji(word)
    };
  }
  return suggestions;
}

/**
 * Returns emoji suggestions for a specified `word`.
 * @param  {String} word
 * @return {Array}
 */
function suggestEmoji(word) {
  const wordMutations = getWordMutations(word);
  return Object.keys(emoji.lib).reduce((suggestions, key) => {
    const keywords = getEmojiKeywords(key);
    if (hasKeywordMatch(keywords, wordMutations)) {
      suggestions.push(emoji.lib[key].char);
    }
    return suggestions;
  }, []);
}

/**
 * Determines whether an array of `keywords` includes certain mutations of a word.
 * @param  {Array}  keywords
 * @param  {Array}  wordMutations
 * @return {Boolean}
 */
function hasKeywordMatch(keywords, wordMutations) {
  return wordMutations
    .filter(word => keywords.includes(word))
    .length > 0;
}

/**
 * Returns keywords for a specified `emojiName`.
 * @param  {String} emojiName
 * @return {Array}
 */
function getEmojiKeywords(emojiName) {
  const keywords = emoji.lib[emojiName].keywords;
  // Also consider the `emojiName` as a keyword.
  keywords.push(emojiName);
  return keywords;
}

/**
 * Returns similar word mutations of a specified `word`.
 * @param  {String} word
 * @return {Array}
 */
function getWordMutations(word) {
  const normalizedWord = word.trim().toLowerCase();
  return [
    pluralize(normalizedWord, 1),
    pluralize(normalizedWord)
  ];
}

module.exports = emojiSuggestions;
