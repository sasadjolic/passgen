# passgen

Password generator

As of v1.1.0, passgen will generate cryptographically secure tokens that can be used as automatically-generated passwords or as session tokens. You can probably find other uses, too.

Relies on the Node.js built-in crypto library to generate cryptographically secure tokens. If you are wanting to use passgen in the browser, you can use the "randombytes" browserify stand-alone: https://github.com/crypto-browserify/randombytes

## Installation

	$ npm install passgen

## Usage

	var passgen = require('passgen');

By default, you'll get 64 alphanumeric characters in mixed case:

	var password = passgen.create();
	// l6HonY3FSD4O3HYWU6d05DDD2uCY5aaSZIxFNwj7KOw9dic6Pr31S2TkqV8rdeSl

Choose a different password length:

	var password = passgen.create(12);
	// 6KLOjSlx6Nfk

Choose a different alphabet from which to pick characters for the password:

	var password = passgen.create(12, 'abc');
	// caccabccbacb

## Running tests

	npm run-script test

passgen relies on Vows test framework.

## License

(The MIT License)

Copyright (c) 2011-2017 Sasa Djolic

Permission is hereby granted, free of charge, to any person obtaining a copy of this software and associated documentation files (the "Software"), to deal in the Software without restriction, including without limitation the rights to use, copy, modify, merge, publish, distribute, sublicense, and/or sell copies of the Software, and to permit persons to whom the Software is furnished to do so, subject to the following conditions:

The above copyright notice and this permission notice shall be included in all copies or substantial portions of the Software.

THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY, FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM, OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE SOFTWARE.

