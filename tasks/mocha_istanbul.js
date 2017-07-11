'use strict';

module.exports = function (grunt) {

    grunt.config('mocha_istanbul', {
        coverage: {
            src: 'tests/*_test.js',
            options: {
                coverage: true,
                mask: '*_test.js',
                coverageFolder: './reports/coverage',
                root: 'src',
                reportFormats: ['cobertura', 'lcovonly']
            }
        }
    });

};


