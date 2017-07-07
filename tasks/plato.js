'use strict';

module.exports = function (grunt) {

    grunt.config('plato', {
        tests: {
            options: {
                complexity: {
                    logicalor: true,
                    switchcase: true,
                    forin: true,
                    trycatch: true
                }
            },
            files: {
                'reports/plato': ['src/*.js']
              }
        }
    });

};


