'use strict';

/* global module */

var pkgData = require('./package.json');

module.exports = function(grunt) {

	var dateFormat = require('dateformat');
	var reportDir = 'build/reports/'
			+ dateFormat(new Date(), 'yyyymmdd-HHMMss');

	grunt.initConfig({
		pkg : '<json:package.json>',

		clean : ['./reports/**/*', './build/**/*', './docs/**/*'],

		jshint : {
			all : ['./jatasets/**/*.js'],
			options : {
				curly : true,
				eqeqeq : true,
				immed : true,
				latedef : true,
				newcap : true,
				nonew : true,
				noarg : true,
				sub : true,
				undef : true,
				unused : false,
				eqnull : true,
				node : true,
				strict : true,
				boss : false,
				globals: {
					"module": true,
					"exports": true
				}
			}
		},

		jsdoc : {
			dist : {
				src : ['./jatasets/**/*.js'],
				options : {
					destination : 'docs'
				}
			}
		},
		meta: {
			package: grunt.file.readJSON('package.json'),
			src: {
				main: './jatasets',
				test: './specs'
			},
			bin: {
				coverage: 'bin/coverage'
			}
		},

		jasmine : {
			src : 'jatasets/**/*.js',
			options : {
				specs : ['spec/**/*_spec.js']
			}//,
			//coverage : {
				//src : 'src/**/*.js',
				//options : {
					//template : require('grunt-template-jasmine-istanbul'),
					//templateOptions : {
						//coverage : 'reports/coverage.json',
						//report : 'reports/coverage'
					//}
				//}
			//}
		},

		plato : {
			build : {
				files : {
<<<<<<< HEAD
					'reports' : ['test/**/*_test.js']
=======
					'reports' : ['jatasets/**/*.js']
>>>>>>> branch 'master' of https://github.com/brian-bolli/jatasets.git
				}
			}
		},

		browserify: {
			build: {
				src: ['jatasets'],
				dest: './build/jatasets.js'
			}
		},

		uglify: {
			build: {
				files: {
					'./build/jatasets.min.js': ['./build/jatasets.js']
				}
			}
		},
		
		mochaTest: {
			build: {
				options: {
					reporter: 'spec',
					clearRequireCache: false // Optionally clear the require cache before running tests (defaults to false) 
				},
				src: ['test/**/*_test.js']
			},
			coverage: {
				options: {
					reporter: 'html-cov',
					quiet: true,
					captureFile: 'coverage.html'
				},
				src: ['test/**/*_test.js']
			}
		}

	});

	grunt.loadNpmTasks('grunt-contrib-clean');
	grunt.loadNpmTasks('grunt-contrib-concat');
	grunt.loadNpmTasks('grunt-contrib-copy');
	grunt.loadNpmTasks('grunt-contrib-jshint');
	grunt.loadNpmTasks('grunt-contrib-jasmine');
	grunt.loadNpmTasks('grunt-contrib-uglify');
	grunt.loadNpmTasks('grunt-mocha-test');
	grunt.loadNpmTasks('grunt-browserify');
	grunt.loadNpmTasks('grunt-jsdoc');
	grunt.loadNpmTasks('grunt-plato');
<<<<<<< HEAD
	
	grunt.registerTask('test', ['jshint', 'mochaTest', 'plato']);
=======
	grunt.loadNpmTasks('grunt-template-jasmine-istanbul');

	grunt.registerTask('test', ['jshint', 'jasmine', 'plato']);
>>>>>>> branch 'master' of https://github.com/brian-bolli/jatasets.git
	//grunt.registerTask('prep', ['clean', 'concat']);
	grunt.registerTask('mocha', ['mochaTest']);
	grunt.registerTask('prep', ['clean']);
	grunt.registerTask('bundle', ['browserify']);
	grunt.registerTask('default', ['prep', 'test', 'jsdoc']);
	grunt.registerTask('build', ['default', 'browserify', 'uglify']);

};
