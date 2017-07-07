'use strict';

module.exports = function (grunt) {

    grunt.config('mocha_istanbul', {
        coverage: {
            src: 'tests/*_test.js',
            options: {
                coverage: true,
                mask: '*_test.js',
                coverageFolder: './reports/coverage',
                //mochaOptions: ['-R tap "test/*_test.js" > test.tap'],
                root: 'src',
                reportFormats: ['cobertura', 'lcovonly']
            }
        }
    });

};


