# emoji-suggestions

> Emoji suggestions for words.

[![npm version](https://img.shields.io/npm/v/emoji-suggestions.svg)](https://www.npmjs.com/package/emoji-suggestions)

## Install

```console
$ npm install emoji-suggestions -S
```

## Usage

```js
const emojiSuggestions = require('emoji-suggestions');

emojiSuggestions('hello');
// => [{ hello: [ '👋' ] }]

```

## CLI

```console
$ npm install emoji-suggestions --global
```

```console
$ emoji-suggestions --help

  Usage:
    $ emoji-suggestions <word>

  Options:
    --help      Show information
    --version   Show current version

  Example:
    $ emoji-suggestions hello
```

## Related

powered by [emojilib](https://github.com/muan/emojilib).

## License

MIT © [André Ruffert](http://andreruffert.com)
