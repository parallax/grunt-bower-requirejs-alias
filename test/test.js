'use strict';
var grunt = require('grunt');

exports.bowerRJS = {
	wireupComponent: function (test) {
		test.expect(1);

		var actual = grunt.file.read('tmp/config.js');
		var expected = grunt.file.read('test/fixtures/config-expected.js');
		test.equal(actual, expected, 'should wireup Bower components in RequireJS config');

		test.done();
	},
	wireupComponentGlobalConfig: function (test) {
		test.expect(1);

		var actual = grunt.file.read('tmp/global-config.js');
		var expected = grunt.file.read('test/fixtures/global-config-expected.js');
		test.equal(actual, expected, 'should wireup Bower components in RequireJS config');

		test.done();
	},
	wireupComponentBaseUrlConfig: function (test) {
		test.expect(1);

		var actual = grunt.file.read('tmp/baseurl.js');
		var expected = grunt.file.read('test/fixtures/baseurl-expected.js');
		test.equal(actual, expected, 'should wireup Bower components relative to baseUrl');

		test.done();
	},
	wireupComponentPrefixConfig: function (test) {
		test.expect(1);

		var actual = grunt.file.read('tmp/prefix.js');
		var expected = grunt.file.read('test/fixtures/prefix-expected.js');
		test.equal(actual, expected, 'should wireup Bower components using prefixes for names');

		test.done();
	},
	wireupComponentAliasesConfig: function (test) {
		test.expect(1);

		var actual = grunt.file.read('tmp/aliases.js');
		var expected = grunt.file.read('test/fixtures/aliases-expected.js');
		test.equal(actual, expected, 'should wireup Bower components using aliases');

		test.done();
	}
};
