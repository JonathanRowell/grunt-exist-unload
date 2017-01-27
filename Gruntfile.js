/*
 * grunt-exist-unload
 * https://github.com/Jonathan Rowell/grunt-exist-unload
 *
 * Copyright (c) 2017 Jonathan Rowell
 * Licensed under the MIT license.
 */

'use strict';

module.exports = function(grunt) {

  // Project configuration.
  grunt.initConfig({
     

   jshint: {
      all: [
      'Gruntfile.js',
      'tasks/*.js',
      '<%= nodeunit.tests %>'
      ],
     options: {
      jshintrc: '.jshintrc'
     }
   },

   jsvalidate: {
      options: {
         globals: {},
         esprimaOptions: {},
         verbose: false
      },
      targetName:{
         files:{
            src:['<%=jshint.all%>']
         }
      }
   },
   
    // Before generating any new files, remove any previously-created files.
    clean: {
      tests: ['tmp']
    },

    // Configuration to be run (and then tested).
    exist_unload: {
      default_options: {
        options: {
            loginPassword: 'bibdia',
            packages: ['http://www.programationinformatique.fr/JonathanTest'],
				clean: false
        }
      }
    },

    // Unit tests.
    nodeunit: {
      tests: ['test/*_test.js']
    }

  });

  // Actually load this plugin's task(s).
  grunt.loadTasks('tasks');

  // These plugins provide necessary tasks.
  grunt.loadNpmTasks('grunt-contrib-jshint');
  grunt.loadNpmTasks('grunt-jsvalidate');
  grunt.loadNpmTasks('grunt-contrib-clean');
  grunt.loadNpmTasks('grunt-contrib-nodeunit');

  // Whenever the "test" task is run, first clean the "tmp" dir, then run this
  // plugin's task(s), then test the result.
//  grunt.registerTask('test', ['clean', 'exist_unload', 'nodeunit']);
  grunt.registerTask('test', ['clean', 'exist_unload']);

  // By default, lint and run all tests.
  grunt.registerTask('default', ['jshint', 'jsvalidate', 'test']);

};
