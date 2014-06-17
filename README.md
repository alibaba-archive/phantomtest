phantomtest
=======

[![Build Status](https://secure.travis-ci.org/node-modules/phantomtest.png)](http://travis-ci.org/node-modules/phantomtest)

[![Dependency Status](https://gemnasium.com/node-modules/phantomtest.png)](https://gemnasium.com/node-modules/phantomtest)

[![NPM](https://nodei.co/npm/phantomtest.png?downloads=true&stars=true)](https://nodei.co/npm/phantomtest/)

![logo](https://raw.github.com/node-modules/phantomtest/master/logo.png)

HTTP assertions made easy via [phantomjs](http://phantomjs.org/), just like [supertest](https://github.com/visionmedia/supertest)

## Install

```bash
$ npm install phantomtest
```

## Usage

```js
var request = require('phantomtest');
var express = require('express');

var app = express();

app.get('/user', function (req, res) {
  res.send(200, { name: 'tobi' });
});

request(app)
  .get('/user')
  .expect('Content-Type', /json/)
  .expect('Content-Length', '20')
  .expect(200)
  .end(function (err, res) {
    if (err) {
      throw err;
    }
  });
```

Here's an example with `mocha`, note how you can pass `done` straight to any of the `.expect()` calls:

```js
describe('GET /users', function () {
  it('respond with json', function (done) {
    request(app)
      .get('/user')
      .set('Accept', 'application/json')
      .expect('Content-Type', /json/)
      .expect(200, done);
  });
});
```

## API

@see [supertest API](https://github.com/visionmedia/supertest#api)

### .wait(url)

```js
request(app)
  .get('/user.html')
  .wait('some.json') // wait for *some.json* url response
  .expect(200, done);
```

### .evaluate(fn)

```js
request(app)
  .get('/form')
  .evaluate(function () {
    $('#submitBtn').click();
  })
  .expect(200, done);
```

## License

(The MIT License)

Copyright (c) 2014 fengmk2 &lt;fengmk2@gmail.com&gt; and other contributors

Permission is hereby granted, free of charge, to any person obtaining
a copy of this software and associated documentation files (the
'Software'), to deal in the Software without restriction, including
without limitation the rights to use, copy, modify, merge, publish,
distribute, sublicense, and/or sell copies of the Software, and to
permit persons to whom the Software is furnished to do so, subject to
the following conditions:

The above copyright notice and this permission notice shall be
included in all copies or substantial portions of the Software.

THE SOFTWARE IS PROVIDED 'AS IS', WITHOUT WARRANTY OF ANY KIND,
EXPRESS OR IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF
MERCHANTABILITY, FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT.
IN NO EVENT SHALL THE AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY
CLAIM, DAMAGES OR OTHER LIABILITY, WHETHER IN AN ACTION OF CONTRACT,
TORT OR OTHERWISE, ARISING FROM, OUT OF OR IN CONNECTION WITH THE
SOFTWARE OR THE USE OR OTHER DEALINGS IN THE SOFTWARE.
