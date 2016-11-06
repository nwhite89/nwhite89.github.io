module.exports = function (grunt) {
    'use strict';

    grunt.initConfig({
        jscs: {
            options: {
                config: '.jscsrc'
            },
            src: '<%= jshint.src %>'
        },
        jshint: {
            options: {
                jshintrc: '.jshintrc'
            },
            src: [
                'src/**/*.js',
                '*.js'
            ],
            json: [
                'src/**/*.json',
                '*.json'
            ]
        }
    });

    require('load-grunt-tasks')(grunt);

    // Set's up linting task
    grunt.registerTask('lint', [
        'jshint:src',
        'jshint:json',
        'jscs:src'
    ]);

    // Test task, to run tests for the project
    grunt.registerTask('test', ['lint']);
    grunt.registerTask('default', ['test']);
};
