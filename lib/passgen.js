(function() {
	/*
	 * Generate a random token.
	 */

	var crypto = require("crypto");

	function create(len, alphabet) {
		var token = '';

		// Use default alphabet, if needed.
		if (!alphabet) alphabet = 'abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789';

		// Use default token length, if needed.
		if ((len === undefined) || isNaN(len)) len = 64;

		// Generate cryptographically strong random bytes, if possible.
		var randomBytes = len > 0 ? crypto.randomBytes(len) : null;

		// Generate token.
		for (var i = 0; i < len; i++) {
			var rnd = Math.floor(randomBytes[i] * 0.00390625 /* / 256.0 */ * alphabet.length);
			token += alphabet[rnd];
		}

		return token;
	}

	var passgen = {};
	passgen.create = create;

	module.exports = passgen;
})();
