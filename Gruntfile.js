'use strict';
module.exports = function (grunt) {
	require('matchdep').filterDev('grunt-*').forEach(grunt.loadNpmTasks);

	grunt.initConfig({
		jshint: {
			options: {
				jshintrc: '.jshintrc'
			},
			all: [
				'Gruntfile.js',
				'tasks/*.js',
				'<%= nodeunit.tests %>'
			]
		},
		clean: {
			test: [
				'tmp',
				'components',
				'bower_components'
			]
		},
		copy: {
			test: {
				expand: true,
				cwd: 'test/fixtures',
				src: ['*.js', '!*-expected.js'],
				dest: 'tmp/'
			}
		},
		nodeunit: {
			tasks: ['test/test.js']
		},
		bower: {
			options: {
				exclude: ['underscore']
			},
			standard: {
				rjsConfig: 'tmp/config.js'
			},
			global: {
				rjsConfig: 'tmp/global-config.js'
			},
			baseurl: {
				options: {
					baseUrl: './'
				},
				rjsConfig: 'tmp/baseurl.js'
			},
			prefix: {
				prefix: 'lib/',
				rjsConfig: 'tmp/prefix.js'
			},
			aliases: {
				rjsConfig: 'tmp/aliases.js',
				aliases: {
					'json2': 'json2-alias',
					'jquery': 'jquery-alias'
				}
			}
		}
	});

	grunt.loadTasks('tasks');

	grunt.registerTask('mkdir', function (dir) {
		require('fs').mkdirSync(dir);
	});

	grunt.registerTask('bower-install', function () {
		require('bower').commands
			.install([
				'jquery',
				'underscore',
				'requirejs',
				'respond',
				'anima',
				'typeahead.js',
				'highstock',
				'jquery-ui-touch-punch-amd#0.1.0',
				'json2'
			]).on('end', this.async());
	});

	grunt.registerTask('test', [
		'clean',
		'mkdir:tmp',
		'copy',
		'bower-install',
		'bower',
		'nodeunit',
		'clean'
	]);

	grunt.registerTask('default', ['test']);
};
