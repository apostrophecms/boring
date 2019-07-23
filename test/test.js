const assert = require('assert');

describe('boring', function() {
  it('has the expected behavior with no arguments', function() {
    process.argv = [ 'ignore', 'ignore' ];
    const argv = require('../boring.js')();
    assert(argv);
    assert(argv._);
    assert(Array.isArray(argv._));
    assert(argv._.length === 0);
    for (const key in argv) {
      if (key !== '_') {
        assert(false);
      }
    }
  });
  it('has the expected behavior with double-hyphen arguments', function() {
    process.argv = [ 'ignore', 'ignore', '--foo', '--bar=whee', '--uri=mongodb://foo@baz/wozzle?something=something' ];
    const argv = require('../boring.js')();
    assert(argv);
    assert(argv._);
    assert(Array.isArray(argv._));
    assert(argv._.length === 0);
    assert(argv.foo === true);
    assert(argv.bar === 'whee');
    assert(argv.uri === 'mongodb://foo@baz/wozzle?something=something');
    const valid = {
      foo: 1,
      bar: 1,
      _: 1,
      uri: 1
    };
    for (const key in argv) {
      if (!valid[key]) {
        assert(false);
      }
    }
  });
  it('has the expected behavior with positional arguments in addition', function() {
    process.argv = [ 'ignore', 'ignore', 'jump', 'sideways', '--foo', '--bar=whee', '--super-cool=totally' ];
    const argv = require('../boring.js')();
    assert(argv);
    assert(argv._);
    assert(Array.isArray(argv._));
    assert(argv._.length === 2);
    assert(argv._[0] === 'jump');
    assert(argv._[1] === 'sideways');
    assert(argv.foo === true);
    assert(argv.bar === 'whee');
    assert(argv["super-cool"] === 'totally');
    const valid = {
      foo: 1,
      bar: 1,
      _: 1,
      "super-cool": 1
    };
    for (const key in argv) {
      if (!valid[key]) {
        assert(false);
      }
    }
  });
});
