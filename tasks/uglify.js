'use strict';

module.exports = function (grunt) {

    grunt.config('uglify', {
        dist: {
            files: {
                'dist/jatasets.min.js': ['dist/jatasets.js']
            }
        }
    });

};


