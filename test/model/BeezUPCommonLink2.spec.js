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
    instance = new BeezUpApi.BeezUPCommonLink2();
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

  describe('BeezUPCommonLink2', function() {
    it('should create an instance of BeezUPCommonLink2', function() {
      // uncomment below and update the code to test BeezUPCommonLink2
      //var instane = new BeezUpApi.BeezUPCommonLink2();
      //expect(instance).to.be.a(BeezUpApi.BeezUPCommonLink2);
    });

    it('should have the property rel (base name: "rel")', function() {
      // uncomment below and update the code to test the property rel
      //var instane = new BeezUpApi.BeezUPCommonLink2();
      //expect(instance).to.be();
    });

    it('should have the property href (base name: "href")', function() {
      // uncomment below and update the code to test the property href
      //var instane = new BeezUpApi.BeezUPCommonLink2();
      //expect(instance).to.be();
    });

    it('should have the property operationId (base name: "operationId")', function() {
      // uncomment below and update the code to test the property operationId
      //var instane = new BeezUpApi.BeezUPCommonLink2();
      //expect(instance).to.be();
    });

    it('should have the property method (base name: "method")', function() {
      // uncomment below and update the code to test the property method
      //var instane = new BeezUpApi.BeezUPCommonLink2();
      //expect(instance).to.be();
    });

    it('should have the property parameters (base name: "parameters")', function() {
      // uncomment below and update the code to test the property parameters
      //var instane = new BeezUpApi.BeezUPCommonLink2();
      //expect(instance).to.be();
    });

    it('should have the property info (base name: "info")', function() {
      // uncomment below and update the code to test the property info
      //var instane = new BeezUpApi.BeezUPCommonLink2();
      //expect(instance).to.be();
    });

  });

}));
