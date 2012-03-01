
/**
 * Module dependencies.
 */

var raven = require('raven')
  , should = require('should');

module.exports = {
  'test .version': function(){
    raven.version.should.match(/^\d+\.\d+\.\d+$/);
  }
};