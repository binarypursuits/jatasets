'use strict';

module.exports = function (grunt) {

    grunt.config('yuidoc', {
        dist: {
            name: '<%= pkg.name %>',
            description: '<%= pkg.description %>',
            version: '<%= pkg.version %>',
            url: '<%= pkg.url %>',
            options: {
                paths: 'src/',
                //themedir: 'path/to/custom/theme/',
                outdir: 'docs/',
                markdown: {
                    "README.md": {
                        linkify: true
                    }
                }
            }
        }
    });

};


