/**
 * BeezUP API
 * This API will allow you to create your account and to get your tokens. \\ If you lost your password, you have an operation to get it back. 
 *
 * OpenAPI spec version: 2.0
 * Contact: support@beezup.com
 *
 * NOTE: This class is auto generated by the swagger code generator program.
 * https://github.com/swagger-api/swagger-codegen.git
 * Do not edit the class manually.
 *
 */

(function(root, factory) {
  if (typeof define === 'function' && define.amd) {
    // AMD.
    define(['expect.js', '../../src/index'], factory);
  } else if (typeof module === 'object' && module.exports) {
    // CommonJS-like environments that support module.exports, like Node.
    factory(require('expect.js'), require('../../src/index'));
  } else {
    // Browser globals (root is window)
    factory(root.expect, root.BeezUpApi);
  }
}(this, function(expect, BeezUpApi) {
  'use strict';

  var instance;

  beforeEach(function() {
    instance = new BeezUpApi.ChannelInfo();
  });

  var getProperty = function(object, getter, property) {
    // Use getter method if present; otherwise, get the property directly.
    if (typeof object[getter] === 'function')
      return object[getter]();
    else
      return object[property];
  }

  var setProperty = function(object, setter, property, value) {
    // Use setter method if present; otherwise, set the property directly.
    if (typeof object[setter] === 'function')
      object[setter](value);
    else
      object[property] = value;
  }

  describe('ChannelInfo', function() {
    it('should create an instance of ChannelInfo', function() {
      // uncomment below and update the code to test ChannelInfo
      //var instane = new BeezUpApi.ChannelInfo();
      //expect(instance).to.be.a(BeezUpApi.ChannelInfo);
    });

    it('should have the property name (base name: "name")', function() {
      // uncomment below and update the code to test the property name
      //var instane = new BeezUpApi.ChannelInfo();
      //expect(instance).to.be();
    });

    it('should have the property homeUrl (base name: "homeUrl")', function() {
      // uncomment below and update the code to test the property homeUrl
      //var instane = new BeezUpApi.ChannelInfo();
      //expect(instance).to.be();
    });

    it('should have the property logoUrl (base name: "logoUrl")', function() {
      // uncomment below and update the code to test the property logoUrl
      //var instane = new BeezUpApi.ChannelInfo();
      //expect(instance).to.be();
    });

    it('should have the property types (base name: "types")', function() {
      // uncomment below and update the code to test the property types
      //var instane = new BeezUpApi.ChannelInfo();
      //expect(instance).to.be();
    });

  });

}));