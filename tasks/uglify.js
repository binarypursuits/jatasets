'use strict';

module.exports = function (grunt) {

    grunt.registerTask('uglify', 'Custom task to run uglify-es package to properly handle ecma6', function () {

        var done = this.async();

        grunt.util.spawn({
            cmd: 'browserify',
            args: ['--compress', '--mangle', 'reserved=[require,jatasets]', '--ecma', '6', 'dist/jatasets.js', '--output', 'dist/jatasets.min.js']
        }, function (error, result, code) {
            if (error) {
                return done(error);
            }

            grunt.log.writeln('Done!');

            done();

        });

    });

};


