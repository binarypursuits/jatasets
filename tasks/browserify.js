'use strict';

module.exports = function (grunt) {

    grunt.config('browserify', {
        dist: {
            files: {
                'dist/jatasets.js': ['app.js']
            }
        }
    });

};


