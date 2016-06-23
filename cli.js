#!/usr/bin/env node
'use strict';

const meow = require('meow');
const chalk = require('chalk');
const pkg = require('./package.json');
const emojiSuggestions = require('./');

const flag = {
  error: msg => chalk.red(`🆘 : ${msg}`)
};

const cli = meow(`
  Usage:
    $ ${pkg.name} <word>

  Options:
    --help      Show information
    --version   Show current version

  Example:
    $ ${pkg.name} hello
`);

const args = cli.input.reduce((parsedArgs, arg) => {
  parsedArgs.word = arg;
  return parsedArgs;
}, {});

if (!Object.keys(args).length) {
  console.error(`
    ${flag.error(`Missing <word> argument.`)}
    ${flag.error(`Try \`${pkg.name} --help\` for more information.`)}
  `);
  process.exit(1);
}

if (!args.word) {
  console.error(`
    ${flag.error(`You need to specify a word`)}
  `);
  process.exit(1);
}

const suggestions = emojiSuggestions(args.word);

if (!suggestions) {
  console.log(`
    🙁 : No suggestions
  `);
  process.exit(0);
}

suggestions.forEach(suggestion => {
  console.log(`
    ${args.word} ${suggestion[args.word].join(' ')}
  `);
});
