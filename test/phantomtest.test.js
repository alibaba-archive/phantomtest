/**!
 * phantomtest - test/phantomtest.test.js
 *
 * Copyright(c) 2014 fengmk2 and other contributors.
 * MIT Licensed
 *
 * Authors:
 *   fengmk2 <fengmk2@gmail.com> (http://fengmk2.github.com)
 */

"use strict";

/**
 * Module dependencies.
 */

var should = require('should');
var express = require('express');
var request = require('../');

describe('phantomtest.test.js', function () {
  it('should work with express', function (done) {
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
  });
});
