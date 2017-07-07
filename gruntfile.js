'use strict';

/* global module */
var exec = require('child_process').exec;
var pkgData = require('./package.json');

module.exports = function (grunt) {

    require('time-grunt')(grunt);
    require('load-grunt-tasks')(grunt);

    grunt.initConfig({
        pkg: '<json:package.json>',

        clean: ['./reports/**/*', './build/**/*', './docs/**/*'],

        /*

         meta: {
         package: grunt.file.readJSON('package.json'),
         src: {
         main: 'jatasets',
         test: 'specs'
         },
         bin: {
         coverage: 'bin/coverage'
         }
         },
         
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
         
         }
         }*/
    });

    grunt.registerTask('browserifyme', 'Custom task to run Browserify properly', function () {
        var done = this.async();
        exec('browserify -r ./app.js:jatasets > dist/jatasets.js', {cwd: "./"}, function (error, stdout, stderr) {
            if (error)
            {
                throw error;
            } else
            {
                done();
            }
        });
    });


    grunt.event.on('coverage', function (lcovFileContents, done) {
        // Check below on the section "The coverage event" 
        done();
    });

    grunt.loadTasks('tasks');

    grunt.registerTask('test', ['clean', 'jshint', 'mocha_istanbul', 'plato']);
    grunt.registerTask('package', ['yuidoc', 'browserify', 'uglify']);
    grunt.registerTask('default', ['test', 'package']);

};
