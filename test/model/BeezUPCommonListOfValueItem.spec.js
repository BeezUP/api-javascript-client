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
    instance = new BeezUpApi.BeezUPCommonListOfValueItem();
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

  describe('BeezUPCommonListOfValueItem', function() {
    it('should create an instance of BeezUPCommonListOfValueItem', function() {
      // uncomment below and update the code to test BeezUPCommonListOfValueItem
      //var instane = new BeezUpApi.BeezUPCommonListOfValueItem();
      //expect(instance).to.be.a(BeezUpApi.BeezUPCommonListOfValueItem);
    });

    it('should have the property position (base name: "position")', function() {
      // uncomment below and update the code to test the property position
      //var instane = new BeezUpApi.BeezUPCommonListOfValueItem();
      //expect(instance).to.be();
    });

    it('should have the property codeIdentifier (base name: "codeIdentifier")', function() {
      // uncomment below and update the code to test the property codeIdentifier
      //var instane = new BeezUpApi.BeezUPCommonListOfValueItem();
      //expect(instance).to.be();
    });

    it('should have the property translationText (base name: "translationText")', function() {
      // uncomment below and update the code to test the property translationText
      //var instane = new BeezUpApi.BeezUPCommonListOfValueItem();
      //expect(instance).to.be();
    });

    it('should have the property intIdentifier (base name: "intIdentifier")', function() {
      // uncomment below and update the code to test the property intIdentifier
      //var instane = new BeezUpApi.BeezUPCommonListOfValueItem();
      //expect(instance).to.be();
    });

  });

}));
