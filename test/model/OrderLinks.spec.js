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
    instance = new BeezUpApi.OrderLinks();
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

  describe('OrderLinks', function() {
    it('should create an instance of OrderLinks', function() {
      // uncomment below and update the code to test OrderLinks
      //var instane = new BeezUpApi.OrderLinks();
      //expect(instance).to.be.a(BeezUpApi.OrderLinks);
    });

    it('should have the property history (base name: "history")', function() {
      // uncomment below and update the code to test the property history
      //var instane = new BeezUpApi.OrderLinks();
      //expect(instance).to.be();
    });

    it('should have the property harvest (base name: "harvest")', function() {
      // uncomment below and update the code to test the property harvest
      //var instane = new BeezUpApi.OrderLinks();
      //expect(instance).to.be();
    });

    it('should have the property setMerchantInfo (base name: "setMerchantInfo")', function() {
      // uncomment below and update the code to test the property setMerchantInfo
      //var instane = new BeezUpApi.OrderLinks();
      //expect(instance).to.be();
    });

    it('should have the property clearMerchantInfo (base name: "clearMerchantInfo")', function() {
      // uncomment below and update the code to test the property clearMerchantInfo
      //var instane = new BeezUpApi.OrderLinks();
      //expect(instance).to.be();
    });

  });

}));
