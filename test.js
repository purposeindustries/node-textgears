const proxyquire = require('proxyquire');
const assert = require('assert');

const stub = fn => {
  fn['@noCallThru'] = true;
  return fn;
};

describe('textgears', function () {
  it('should reject when the API key is missing', function () {
    const textgears = proxyquire('./', {
      './request': stub(() => Promise.resolve()),
    });

    return textgears({
      text: 'I is an enginer',
    }).then(() => Promise.reject(new Error('Rejection was expected')), () => {});
  });

  it('should reject when response is junk', function () {
    const textgears = proxyquire('./', {
      './request': stub(() => Promise.resolve('totally not a json')),
    });

    return textgears({
      text: 'I is an enginer',
      key: 'some key',
    }).then(() => Promise.reject(new Error('Rejection was expected')), () => {});
  });

  it('should parse the result', function () {
    const fixture = {
      foo: 'bar',
    };

    const textgears = proxyquire('./', {
      './request': stub(() => Promise.resolve(JSON.stringify(fixture))),
    });

    return textgears({
      text: 'I is an enginer',
      key: 'some key',
    }).then(res => {
      assert.equal(res.foo, fixture.foo);
    });
  });
});
