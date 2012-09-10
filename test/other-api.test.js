/*
 * Copyright (c) 2012 Trent Mick. All rights reserved.
 *
 * Test other parts of the exported API.
 */

var bunyan = require('../lib/bunyan');

// node-tap API
//var test = require('tap').test;
if (require.cache[__dirname + '/helper.js'])
    delete require.cache[__dirname + '/helper.js'];
var helper = require('./helper.js');
var after = helper.after;
var before = helper.before;
var test = helper.test;


test('bunyan.<LEVEL>s', function (t) {
  t.ok(bunyan.TRACE, 'TRACE');
  t.ok(bunyan.DEBUG, 'DEBUG');
  t.ok(bunyan.INFO, 'INFO');
  t.ok(bunyan.WARN, 'WARN');
  t.ok(bunyan.ERROR, 'ERROR');
  t.ok(bunyan.FATAL, 'FATAL');
  t.end();
});

test('bunyan.resolveLevel()', function (t) {
  t.equal(bunyan.resolveLevel('trace'), bunyan.TRACE, 'TRACE');
  t.equal(bunyan.resolveLevel('TRACE'), bunyan.TRACE, 'TRACE');
  t.equal(bunyan.resolveLevel('debug'), bunyan.DEBUG, 'DEBUG');
  t.equal(bunyan.resolveLevel('DEBUG'), bunyan.DEBUG, 'DEBUG');
  t.equal(bunyan.resolveLevel('info'), bunyan.INFO, 'INFO');
  t.equal(bunyan.resolveLevel('INFO'), bunyan.INFO, 'INFO');
  t.equal(bunyan.resolveLevel('warn'), bunyan.WARN, 'WARN');
  t.equal(bunyan.resolveLevel('WARN'), bunyan.WARN, 'WARN');
  t.equal(bunyan.resolveLevel('error'), bunyan.ERROR, 'ERROR');
  t.equal(bunyan.resolveLevel('ERROR'), bunyan.ERROR, 'ERROR');
  t.equal(bunyan.resolveLevel('fatal'), bunyan.FATAL, 'FATAL');
  t.equal(bunyan.resolveLevel('FATAL'), bunyan.FATAL, 'FATAL');
  t.end();
});
