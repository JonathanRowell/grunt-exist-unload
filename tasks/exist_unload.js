/*
 * grunt-exist-unload
 * https://github.com/Jonathan Rowell/grunt-exist-unload
 *
 * Copyright (c) 2017 Jonathan Rowell
 * Licensed under the MIT license.
 */

'use strict';

module.exports = function(grunt) {

  // Please see the Grunt documentation for more information regarding task
  // creation: http://gruntjs.com/creating-tasks

   grunt.registerMultiTask('exist_unload', 'Grunt task to unload an eXist package', function() {
      // Merge task-specific and/or target-specific options with these defaults.
      var me = this;
      var options = this.options({
         host: 'localhost',
         port: 8080,
         loginUser: 'admin',
         loginPassword: ''
      });

      var cleaner = require('../lib/cleaner.js');

      // Iterate over all specified packages
      options.packages.forEach(function (name) {
         grunt.verbose.writeln('unloading',name);
         var done = me.async();
         cleaner(options,name,grunt,done);
      });
   });
};
