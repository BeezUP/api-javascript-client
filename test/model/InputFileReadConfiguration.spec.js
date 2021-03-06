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
    instance = new BeezUpApi.InputFileReadConfiguration();
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

  describe('InputFileReadConfiguration', function() {
    it('should create an instance of InputFileReadConfiguration', function() {
      // uncomment below and update the code to test InputFileReadConfiguration
      //var instane = new BeezUpApi.InputFileReadConfiguration();
      //expect(instance).to.be.a(BeezUpApi.InputFileReadConfiguration);
    });

    it('should have the property format (base name: "format")', function() {
      // uncomment below and update the code to test the property format
      //var instane = new BeezUpApi.InputFileReadConfiguration();
      //expect(instance).to.be();
    });

    it('should have the property encodingTypeName (base name: "encodingTypeName")', function() {
      // uncomment below and update the code to test the property encodingTypeName
      //var instane = new BeezUpApi.InputFileReadConfiguration();
      //expect(instance).to.be();
    });

    it('should have the property cultureName (base name: "cultureName")', function() {
      // uncomment below and update the code to test the property cultureName
      //var instane = new BeezUpApi.InputFileReadConfiguration();
      //expect(instance).to.be();
    });

    it('should have the property csvFileReadProperties (base name: "csvFileReadProperties")', function() {
      // uncomment below and update the code to test the property csvFileReadProperties
      //var instane = new BeezUpApi.InputFileReadConfiguration();
      //expect(instance).to.be();
    });

    it('should have the property xmlFileReadProperties (base name: "xmlFileReadProperties")', function() {
      // uncomment below and update the code to test the property xmlFileReadProperties
      //var instane = new BeezUpApi.InputFileReadConfiguration();
      //expect(instance).to.be();
    });

  });

}));
