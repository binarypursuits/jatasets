'use strict';

/* global module */
var exec = require('child_process').exec;
var pkgData = require('./package.json');

module.exports = function(grunt) {

	grunt.initConfig({
		pkg : '<json:package.json>',

		clean : ['./reports/**/*', './build/**/*', './docs/**/*'],

		jshint : {
			all : ['./jatasets/**/*.js'],
			options : {
				curly : true,
				eqeqeq : false,
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
                // browserify -r ./index.js:jatasets > bundle.js
		browserify: {
			build: {
				src: ['./index.js'],
				dest: 'build/jatasets.js',
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
					reporter: 'spec',
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
			b: {
				options: {
					contentsEnabled: true,
					contentsTitle: 'JataSets',
					contentsFile: 'README.md'
				},
				src: ['./jatasets/**/*.js'],
				dest: './build/jdox'
			}
		},

		yuidoc: {
			build: {
				name: '<%= pkg.name %>',
				description: '<%= pkg.description %>',
				version: '<%= pkg.version %>',
				url: '<%= pkg.url %>',
				options: {
					paths: 'jatasets/',
					//themedir: 'path/to/custom/theme/',
					outdir: 'docs/',
					markdown: {
						"README.md" : {
							linkify: true
						}
					}
				}
			}
		}
	});
        
        grunt.registerTask('browserifyme', 'Custom task to run Browserify properly', function() {
                var done = this.async();
                exec('browserify -r ./index.js:jatasets > ./build/jatasets.js', { cwd: "./" }, function (error, stdout, stderr) {
			if (error)
			{
				throw error;
			}
			else
			{
                            done();
                        }
                });
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


	grunt.registerTask('test', ['jshint']);
	grunt.registerTask('bundle', ['browserify', 'uglify']);
	grunt.registerTask('default', ['jshint', 'browserifyme', 'uglify']);
	grunt.registerTask('build', ['clean','jshint','yuidoc', 'browserifyme', 'uglify', 'mocha_istanbul', 'plato']);

};
