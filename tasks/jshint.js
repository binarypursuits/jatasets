'use strict';

module.exports = function (grunt) {

    grunt.config('jshint', {
        all: ['src/*.js'],
        options: {
            esversion: 6,
            curly: true,
            eqeqeq: false,
            immed: true,
            latedef: true,
            newcap: true,
            nonew: true,
            noarg: true,
            sub: true,
            undef: true,
            unused: false,
            eqnull: true,
            node: true,
            strict: true,
            boss: false,
            globals: {
                module: true,
                exports: true
            }
        }
    });

};


