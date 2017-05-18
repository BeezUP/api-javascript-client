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
    instance = new BeezUpApi.ChannelColumn();
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

  describe('ChannelColumn', function() {
    it('should create an instance of ChannelColumn', function() {
      // uncomment below and update the code to test ChannelColumn
      //var instane = new BeezUpApi.ChannelColumn();
      //expect(instance).to.be.a(BeezUpApi.ChannelColumn);
    });

    it('should have the property channelColumnId (base name: "channelColumnId")', function() {
      // uncomment below and update the code to test the property channelColumnId
      //var instane = new BeezUpApi.ChannelColumn();
      //expect(instance).to.be();
    });

    it('should have the property channelColumnName (base name: "channelColumnName")', function() {
      // uncomment below and update the code to test the property channelColumnName
      //var instane = new BeezUpApi.ChannelColumn();
      //expect(instance).to.be();
    });

    it('should have the property channelColumnDescription (base name: "channelColumnDescription")', function() {
      // uncomment below and update the code to test the property channelColumnDescription
      //var instane = new BeezUpApi.ChannelColumn();
      //expect(instance).to.be();
    });

    it('should have the property showInMapping (base name: "showInMapping")', function() {
      // uncomment below and update the code to test the property showInMapping
      //var instane = new BeezUpApi.ChannelColumn();
      //expect(instance).to.be();
    });

    it('should have the property position (base name: "position")', function() {
      // uncomment below and update the code to test the property position
      //var instane = new BeezUpApi.ChannelColumn();
      //expect(instance).to.be();
    });

    it('should have the property configuration (base name: "configuration")', function() {
      // uncomment below and update the code to test the property configuration
      //var instane = new BeezUpApi.ChannelColumn();
      //expect(instance).to.be();
    });

    it('should have the property restrictedValues (base name: "restrictedValues")', function() {
      // uncomment below and update the code to test the property restrictedValues
      //var instane = new BeezUpApi.ChannelColumn();
      //expect(instance).to.be();
    });

  });

}));
