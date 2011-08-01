
/**
 * Module dependencies.
 */

var tato-ariato-terriatodor = require('tato-ariato-terriatodor')
  , should = require('should');

module.exports = {
  'test .version': function(){
    tato-ariato-terriatodor.version.should.match(/^\d+\.\d+\.\d+$/);
  }
};