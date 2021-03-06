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
    instance = new BeezUpApi.OrderIndexLovLinks();
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

  describe('OrderIndexLovLinks', function() {
    it('should create an instance of OrderIndexLovLinks', function() {
      // uncomment below and update the code to test OrderIndexLovLinks
      //var instane = new BeezUpApi.OrderIndexLovLinks();
      //expect(instance).to.be.a(BeezUpApi.OrderIndexLovLinks);
    });

    it('should have the property orderChangeBusinessOperationType (base name: "orderChangeBusinessOperationType")', function() {
      // uncomment below and update the code to test the property orderChangeBusinessOperationType
      //var instane = new BeezUpApi.OrderIndexLovLinks();
      //expect(instance).to.be();
    });

    it('should have the property orderState (base name: "orderState")', function() {
      // uncomment below and update the code to test the property orderState
      //var instane = new BeezUpApi.OrderIndexLovLinks();
      //expect(instance).to.be();
    });

    it('should have the property orderProperty (base name: "orderProperty")', function() {
      // uncomment below and update the code to test the property orderProperty
      //var instane = new BeezUpApi.OrderIndexLovLinks();
      //expect(instance).to.be();
    });

    it('should have the property orderPropertyPosted (base name: "orderPropertyPosted")', function() {
      // uncomment below and update the code to test the property orderPropertyPosted
      //var instane = new BeezUpApi.OrderIndexLovLinks();
      //expect(instance).to.be();
    });

  });

}));
