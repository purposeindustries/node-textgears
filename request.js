const https = require('https');
const parse = require('url').parse;

module.exports = function request(url, body) {
  url = parse(url);
  return new Promise((resolve, reject) => {
    const req = https.request({
      method: 'POST',
      host: url.host,
      path: url.path,
      headers: {
        'Content-Type': 'application/x-www-form-urlencoded',
      },
    }, res => {
      let body = '';
      res
        .on('data', chunk => body += chunk)
        .once('error', reject)
        .once('end', () => resolve(body));
    });

    req
      .once('error', reject)
      .end(body);
  });
};
