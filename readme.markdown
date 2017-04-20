# node-textgears [![travis-badge]][travis]

> [Textgears][textgears] API for node.js

## install

install the [package] with [`npm`][npm]:

```sh
$ npm install textgears
```

## usage

```js
import textgears from 'textgears';

textgears({
  key: YOUR_API_KEY,
  text: 'I am a enginer',
}).then(res => {
  for (const error of res.errors) {
    console.log('Bad: %s. Better: %s', error.bad, error.better.join(', '));
  }
});
```

## api

### `textgears({key, text}): Promise`

Checks `text` with the `key` API key for grammar errors.
Returns a `Promise` that's resolved with the [API response][api].

## license

MIT License

Copyright (c) 2017 Intellyo GmbH

Permission is hereby granted, free of charge, to any person obtaining a copy
of this software and associated documentation files (the "Software"), to deal
in the Software without restriction, including without limitation the rights
to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
copies of the Software, and to permit persons to whom the Software is
furnished to do so, subject to the following conditions:

The above copyright notice and this permission notice shall be included in all
copies or substantial portions of the Software.

THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE
SOFTWARE.

[textgears]: https://textgears.com/
[package]: https://www.npmjs.com/package/textgears
[npm]: https://www.npmjs.com/
[api]: https://textgears.com/api/
[travis]: https://travis-ci.org/purposeindustries/node-textgears
[travis-badge]: https://travis-ci.org/purposeindustries/node-textgears.svg?branch=master
