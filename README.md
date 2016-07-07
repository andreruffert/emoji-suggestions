# emoji-suggestions

[![Build Status](https://travis-ci.org/andreruffert/emoji-suggestions.svg?branch=master)](https://travis-ci.org/andreruffert/emoji-suggestions) [![npm version](https://img.shields.io/npm/v/emoji-suggestions.svg)](https://www.npmjs.com/package/emoji-suggestions)

> Emoji suggestions for words.

## Install

```console
$ npm i emoji-suggestions -S
```

## Usage

```js
const emojiSuggestions = require('emoji-suggestions');

emojiSuggestions('hello');
// => [{ hello: [ '👋' ] }]

```

## CLI

```console
$ npm i emoji-suggestions -g
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
