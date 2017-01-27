"use strict";

// Module to remove packages from an eXist database
// Written by Jonathan January 2016
// Modified by Jonathan on 25 January 2017

var
   async    = require('async'),
   qs       = require('qs'),  
   request  = require('request');


module.exports = function (options, packName, grunt, done) {

   var host = options.host;
   var port = options.port;
      
   // construct a remove request
   var formData = qs.stringify({ 
      action: 'remove',
      'package-url': packName
   });
   grunt.log.writeln('deinstalling ',packName);
   grunt.verbose.writeln('formData='+formData);
   // send the request
   request({
         method: 'POST',
         uri: 'http://'+host+':'+port+'/exist/apps/dashboard/modules/install.xql',
         headers: {
            "Content-Type": "application/x-www-form-urlencoded",
            "Content-Length": formData.length
         },
         body: formData,
         auth: {
            user: options.loginUser,
            pass: options.loginPassword
         }        
      },
      function(err,httpResponse,body) {
         if(err) {
            if(httpResponse) {grunt.log.writeln('statusCode='+httpResponse.statusCode);}
            if(body) {grunt.log.writeln('body='+body);}  
            grunt.fail.fatal('Error deinstalling '+packName+' error.code='+err);
         } else {
            var contentType = httpResponse.headers['content-type'];
            if(contentType.indexOf(';')!==-1) {
               contentType=contentType.substr(0,contentType.indexOf(';'));
            }
            if(contentType!=='application/json') {
               grunt.fail.fatal('unexpected content-type returned',contentType);
            } else {
               var reply = JSON.parse(body);
               grunt.verbose.writeln('httpResponse',httpResponse);
               grunt.verbose.writeln('reply',reply);
               if(reply.hasOwnProperty('ok')) {
                  grunt.log.writeln('Package: '+packName+' deinstalled');
               } else {
                  if(options.clean) {
                     grunt.log.writeln(reply['error']);
                  } else {
                     grunt.fail.fatal(reply['error']);
                  }
               }
            }
         }
         done();
      });
};
   