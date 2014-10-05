module.exports = function (grunt) {
    'use strict';

    grunt.initConfig({
        concat: {
            dev: {
                src: [
                    'src/js/*.js',
                    'src/js/**/*-setup.js',
                    'src/**/*.js'
                ],
                dest: 'www/app.js'
            },
            vendor: {
                src: [
                    'vendor/angular/angular.js',
                    'vendor/angular-resource/angular-resource.js',
                    'vendor/angular-sanitize/angular-sanitize.js',
                    'vendor/ng-lodash/build/ng-lodash.js',
                    'www/app.js'
                ],
                dest: 'www/app.js'

            }
        },
        connect: {
            server: {
                options: {
                    port: 8080,
                    base: 'www'
                }
            }
        },
        copy: {
            html: {
                src: 'src/html/index.html',
                dest: 'www/index.html'
            },
            api: {
                expand: true,
                flatten: true,
                dest: 'www/api/',
                src: 'src/**/*.json'
            },
            templates: {
                src: 'src/templates/**/*.tmpl.html',
                dest: 'www/tmpl/',
                flatten: true,
                expand: true
            }
        },
        imagemin: {
            dynamic: {
                files: [{
                    expand: true,
                    cwd: 'src/',
                    src: ['img/projects/**/*.{png,jpg,gif}'],
                    dest: 'www/'
                }]
            }
        },
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
                '**/*.js',
                '!vendor/**',
                '!node_modules/**',
                '!www/**'
            ],
            json: [
                '**/*.json',
                '!vendor/**',
                '!node_modules/**'
            ]
        },
        ngAnnotate: {
            options: {
                singleQuotes: true
            },
            dist: {
                files: {
                    'www/app.js': [
                        'www/app.js'
                    ]
                }
            }
        },
        sass: {
            options: {
                includePaths: [
                    'vendor/bootstrap-sass-official/assets/stylesheets'
                ].concat(require('node-bourbon').includePaths)
            },
            dev: {
                files: {
                    'www/main.css': 'src/sass/template.scss'
                }
            },
            dist: {
                options: {
                    outputStyle: 'compressed'
                },
                files: {
                    'www/main.min.css': 'www/main.css'
                }
            }
        },
        uglify: {
            dist: {
                options: {
                    compress: {
                        unused: false
                    },
                    banner: '/** Nick White - ' +
                        '<%= grunt.template.today(\'yyyy-mm-dd\') %> **/\n'
                },
                files: {
                    'www/app.min.js': [
                        'www/app.js'
                    ]
                }
            }
        },
        watch: {
            dev: {
                files: [
                    'src/**/*.js',
                    'src/**/*.scss',
                    'src/**/*.html'
                ],
                tasks: [
                    'build'
                ],
                options: {
                    livereload: true
                }
            }
        }
    });

    require('load-grunt-tasks')(grunt);

    // Set's up linting task
    grunt.registerTask('lint', [
        'jshint:src',
        'jshint:json',
        'jscs:src'
    ]);

    grunt.registerTask('build', [
        'copy:html',
        'copy:api',
        'copy:templates',
        'concat:dev',
        'ngAnnotate:dist',
        'concat:vendor',
        'sass:dev'
    ]);

    grunt.registerTask('dist', [
        'build',
        'uglify:dist',
        'sass:dist'
    ]);

    grunt.registerTask('serve', [
        'build',
        'connect:server'
    ]);

    grunt.registerTask('dev', [
        'serve',
        'watch'
    ]);

    // Test task, to run tests for the project
    grunt.registerTask('test', ['lint']);

    // Grunt default taske (run linting first then set up serve)
    grunt.registerTask('default', [
        'lint',
        'dev'
    ]);
};
