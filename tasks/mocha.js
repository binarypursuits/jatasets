'use strict';

module.exports = function (grunt) {

    grunt.config('mocha', {
        test: {
            src: ['tests/**/*.html'],
            dest: 'reports/tests.tap',
            options: {
                reporter: 'tap'
                
            }
        }
    });

};


