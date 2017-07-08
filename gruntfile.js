'use strict';

/* global module */
var pkgData = require('./package.json');

module.exports = function (grunt) {

    require('time-grunt')(grunt);
    require('load-grunt-tasks')(grunt);

    grunt.initConfig({
        pkg: '<json:package.json>'
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
