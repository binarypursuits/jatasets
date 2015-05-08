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

		plato : {
			build : {
				options : {
					complexity : {
						logicalor : true,
						switchcase : true,
						forin : true,
						trycatch : true
					}
				},
				files : {
					'./reports/plato' : ['test/**/*_test.js']
				}
			}
		},

		browserify: {
			build: {
				src: ['jatasets'],
				dest: './build/jatasets.js',
				options: {
					standalone: 'jatasets'
				}
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
			"default": {
				options: {
					reporter: 'spec',
					clearRequireCache: false // Optionally clear the require
												// cache before running tests
												// (defaults to false)
				},
				src: ['test/**/*_test.js']
			},
			build: {
				options: {
<<<<<<< HEAD
					reporter: 'spec',
=======
					reporter: 'mocha-istanbul',
					quiet: true,
					captureFile: 'reports/coverage.html'
>>>>>>> branch 'master' of https://binarypursuits@github.com/binarypursuits/jatasets.git
				},
				src: ['test/**/*_test.js']
			}
		},

		mocha: {
			options: {
				//reporter: 'tap'
			},
			src: ['test/**/*_test.js'],
			dest: 'reports/test.tap',
		},

		mocha_istanbul: {
			coverage: {
				src: './test/**/*_test.js',
				options: {
					coverage: true,
					mask: '*_test.js',
					coverageFolder: './reports/coverage',
					//mochaOptions: ['-R tap "test/**/*_test.js" > test.tap'],
					root: './jatasets',
					reportFormats: ['cobertura','lcovonly']
				}
			}
		},

		jsdox: {
			generate: {
				options: {
					contentsEnabled: true,
					contentsTitle: 'JataSets',
					contentsFile: 'README.md'
				},
				src: ['./jatasets/**/*.js'],
				dest: './build/jdox'
			}
		},

<<<<<<< HEAD
		  yuidoc: {
			    compile: {
			      name: '<%= pkg.name %>',
			      description: '<%= pkg.description %>',
			      version: '<%= pkg.version %>',
			      url: '<%= pkg.homepage %>',
			      options: {
			        paths: 'jatasets/',
			        //themedir: 'path/to/custom/theme/',
			        outdir: 'docs/'
			      }
			    }
			  }
=======
		yuidoc: {
			compile: {
				name: '<%= pkg.name %>',
				description: '<%= pkg.description %>',
				version: '<%= pkg.version %>',
				url: '<%= pkg.homepage %>',
				options: {
					paths: 'jatasets/',
					//themedir: 'path/to/custom/theme/',
					outdir: 'docs/'
				}
			}
		}
>>>>>>> branch 'master' of https://binarypursuits@github.com/binarypursuits/jatasets.git

	});

	grunt.loadNpmTasks('grunt-contrib-clean');
	grunt.loadNpmTasks('grunt-contrib-concat');
	grunt.loadNpmTasks('grunt-contrib-copy');
	grunt.loadNpmTasks('grunt-contrib-jshint');
	grunt.loadNpmTasks('grunt-contrib-jasmine');
	grunt.loadNpmTasks('grunt-contrib-uglify');
	grunt.loadNpmTasks('grunt-contrib-yuidoc');
	grunt.loadNpmTasks('grunt-mocha');
	grunt.loadNpmTasks('grunt-mocha-test');
	grunt.loadNpmTasks('grunt-mocha-istanbul')
	grunt.loadNpmTasks('grunt-browserify');
	grunt.loadNpmTasks('grunt-jsdoc');
	grunt.loadNpmTasks('grunt-jsdox');
	grunt.loadNpmTasks('grunt-plato');

	grunt.registerTask('prep', ['clean']);
	grunt.registerTask('validate', ['jshint']); // csslint, html
<<<<<<< HEAD
	grunt.registerTask('test', ['mocha_istanbul', 'plato']);
=======
	grunt.registerTask('test', ['mochaTest', 'mocha_istanbul', 'plato']);
	//grunt.registerTask('test', ['mocha', 'mocha_istanbul', 'plato']);
>>>>>>> branch 'master' of https://binarypursuits@github.com/binarypursuits/jatasets.git
	grunt.registerTask('bundle', ['browserify', 'uglify']);

	grunt.registerTask('documentation', ['yuidoc', 'jsdox']);

	grunt.registerTask('default', ['prep', 'validate', 'test']);
	grunt.registerTask('build', ['default', 'bundle', 'yuidoc']);

};
