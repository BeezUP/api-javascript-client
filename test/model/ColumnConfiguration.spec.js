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
    instance = new BeezUpApi.ColumnConfiguration();
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

  describe('ColumnConfiguration', function() {
    it('should create an instance of ColumnConfiguration', function() {
      // uncomment below and update the code to test ColumnConfiguration
      //var instane = new BeezUpApi.ColumnConfiguration();
      //expect(instance).to.be.a(BeezUpApi.ColumnConfiguration);
    });

    it('should have the property beezUPColumnName (base name: "beezUPColumnName")', function() {
      // uncomment below and update the code to test the property beezUPColumnName
      //var instane = new BeezUpApi.ColumnConfiguration();
      //expect(instance).to.be();
    });

    it('should have the property columnImportance (base name: "columnImportance")', function() {
      // uncomment below and update the code to test the property columnImportance
      //var instane = new BeezUpApi.ColumnConfiguration();
      //expect(instance).to.be();
    });

    it('should have the property columnDataType (base name: "columnDataType")', function() {
      // uncomment below and update the code to test the property columnDataType
      //var instane = new BeezUpApi.ColumnConfiguration();
      //expect(instance).to.be();
    });

    it('should have the property columnCultureName (base name: "columnCultureName")', function() {
      // uncomment below and update the code to test the property columnCultureName
      //var instane = new BeezUpApi.ColumnConfiguration();
      //expect(instance).to.be();
    });

    it('should have the property columnFormat (base name: "columnFormat")', function() {
      // uncomment below and update the code to test the property columnFormat
      //var instane = new BeezUpApi.ColumnConfiguration();
      //expect(instance).to.be();
    });

    it('should have the property canBeTruncated (base name: "canBeTruncated")', function() {
      // uncomment below and update the code to test the property canBeTruncated
      //var instane = new BeezUpApi.ColumnConfiguration();
      //expect(instance).to.be();
    });

    it('should have the property displayGroupName (base name: "displayGroupName")', function() {
      // uncomment below and update the code to test the property displayGroupName
      //var instane = new BeezUpApi.ColumnConfiguration();
      //expect(instance).to.be();
    });

  });

}));