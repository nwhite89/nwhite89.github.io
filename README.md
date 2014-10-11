[![Built with Grunt](https://cdn.gruntjs.com/builtwith.png)](http://gruntjs.com/)
[![Build Status](https://travis-ci.org/nwhite89/nwhite89.github.io.svg?branch=develop)](https://travis-ci.org/nwhite89/nwhite89.github.io)
[![devDependency Status](https://david-dm.org/nwhite89/nwhite89.github.io/dev-status.svg)](https://david-dm.org/nwhite89/nwhite89.github.io#info=devDependencies)

Portfolio
=========

My portfolio using GitHub pages.

- Lint the project using ``grunt lint``
- Build for dev using ``grunt dev``
- Serve for development using ``grunt serve``
- Build for dist (ready for serving using GitHub pages in branch ``master``) using ``grunt dist``

Style Guide for JS uses [Rockabox JS Linter](https://github.com/rockabox/rb-js-linter).
- 120 length instead of 80
- JSHint config
- JSCS config
- Editor config

Uses:

- Lint
    - JSHint on JS files
    - JSHint on JSON files
    - JSCS on JS files
- Build
    - Copies (using ``grunt-contrib-copy``)
        - HTML files
        - API JSON files
    - Packages Angular template files (using ``grunt-angular-templates``)
    - Concatenation (using ``grunt-contrib-concat``)
    - Clean (using ``grunt-contrib-clean``)
        - Removes ``tmp/`` folder
    - Ready JS for minification (using ``grunt-ng-annotate``)
    - SASS build (using ``grunt-sass``)
- Dist
    - Runs ``build``
    - Minifies images (using ``grunt-contrib-imagemin``)
    - Minifies JS (using ``grunt-contrib-uglify``)
    - SASS build (minifies css files)
- Serve
    - Runs ``build``
    - Setup server (using ``grunt-contrib-connect``)
- Dev
    - Runs ``serve``
    - Watch dev files (using ``grunt-contrib-watch``)
- Test
    - Runs ``lint``
- Default
    - Runs ``lint``
    - Runs ``dev``
