# boring

<a href="http://apostrophecms.org/"><img src="https://raw.github.com/apostrophecms/boring/master/logos/logo-box-madefor.png" align="right" /></a>

A command line argument parser without pirates

## what you get

When someone types:

```
node app jump sideways --foo --bar=whee --super-cool=totally
```

You get:

```javascript
{
  _: [ "jump", "sideways"],
  foo: true,
  bar: "whee",
  "super-cool": "totally"
}
```

Notice that parameters without `--`, if any, go into the `_` array. Parameters with `--` become properties in their own right.

## How you get it

```javascript
const argv = require('boring')();
```

## What you don't get

### Single hyphens: nope

There is no support for old-fashioned "single-hyphen" options, like:

```
-x 50
```

Or:

```
-h
```

You can't tell which are boolean and which take arguments unless a specification is passed in. And that's not boring enough for us.

### Usage messages, strictness, etc.: nope

These are very simple to implement, and if you're like us, you'd rather do it yourself.

## Philosophy

We have nothing against full-featured, pirate-themed option parsers, which are very nice if you're into that sort of thing. We just find ourselves walking the plank when our options don't follow the pattern of what's easy to validate with piracy.

This simple module is too dumb to break.

## About ApostropheCMS

`boring` was created for use in ApostropheCMS, an open-source content management system built on node.js. If you like `boring` you should definitely [check out apostrophecms.org](http://apostrophecms.org).

## Support

Feel free to open issues on [github](http://github.com/apostrophecms/boring).

<a href="http://apostrophecms.com/"><img src="https://raw.github.com/apostrophecms/boring/master/logos/logo-box-builtby.png" /></a>
