const req = require('./request');

module.exports = function textgears({text, key}) {
  if (!key) {
    return Promise.reject(new Error('You have to provide an API key!'));
  }

  const body = `key=${key}&text=${encodeURIComponent(text)}`;

  return req('https://api.textgears.com/check.php', body)
    .then(res => JSON.parse(res));
}
