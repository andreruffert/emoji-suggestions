const emoji = require('emojilib');
const pluralize = require('pluralize');

/**
 * emojiSuggestions
 * @param  {String|Array} word
 * @return {Array}
 */
function emojiSuggestions(word) {
  const suggestions = (Array.isArray(word) ? word : [word])
    .map(word => ({[word]: suggestEmoji(word)}))
    .filter(suggestion => suggestion[word]);
  return suggestions.length > 0 ? suggestions : false;
}

/**
 * Returns emoji suggestions for a specified `word`.
 * @param  {String} word
 * @return {Array}
 */
function suggestEmoji(word) {
  const wordMutations = getWordMutations(word);
  const suggestions = Object.keys(emoji.lib).reduce((matches, emojiName) => {
    const keywords = getEmojiKeywords(emojiName);
    if (hasKeywordMatch(keywords, wordMutations)) {
      matches.push(emoji.lib[emojiName].char);
    }
    return matches;
  }, []);
  return suggestions.length > 0 ? suggestions : false;
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
