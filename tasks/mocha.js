'use strict';

module.exports = function (grunt) {

    grunt.config('mocha', {
        test: {
            src: ['tests/**/*.html'],
            dest: 'reports/xunit.out',
            options: {
                reporter: 'tap'
                
            }
        }
    });

};


