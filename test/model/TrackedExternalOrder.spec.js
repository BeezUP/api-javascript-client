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
    instance = new BeezUpApi.TrackedExternalOrder();
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

  describe('TrackedExternalOrder', function() {
    it('should create an instance of TrackedExternalOrder', function() {
      // uncomment below and update the code to test TrackedExternalOrder
      //var instane = new BeezUpApi.TrackedExternalOrder();
      //expect(instance).to.be.a(BeezUpApi.TrackedExternalOrder);
    });

    it('should have the property utcDate (base name: "utcDate")', function() {
      // uncomment below and update the code to test the property utcDate
      //var instane = new BeezUpApi.TrackedExternalOrder();
      //expect(instance).to.be();
    });

    it('should have the property merchantOrderId (base name: "merchantOrderId")', function() {
      // uncomment below and update the code to test the property merchantOrderId
      //var instane = new BeezUpApi.TrackedExternalOrder();
      //expect(instance).to.be();
    });

    it('should have the property visitorId (base name: "visitorId")', function() {
      // uncomment below and update the code to test the property visitorId
      //var instane = new BeezUpApi.TrackedExternalOrder();
      //expect(instance).to.be();
    });

    it('should have the property totalAmount (base name: "totalAmount")', function() {
      // uncomment below and update the code to test the property totalAmount
      //var instane = new BeezUpApi.TrackedExternalOrder();
      //expect(instance).to.be();
    });

    it('should have the property currencyCode (base name: "currencyCode")', function() {
      // uncomment below and update the code to test the property currencyCode
      //var instane = new BeezUpApi.TrackedExternalOrder();
      //expect(instance).to.be();
    });

    it('should have the property paymentValidated (base name: "paymentValidated")', function() {
      // uncomment below and update the code to test the property paymentValidated
      //var instane = new BeezUpApi.TrackedExternalOrder();
      //expect(instance).to.be();
    });

    it('should have the property products (base name: "products")', function() {
      // uncomment below and update the code to test the property products
      //var instane = new BeezUpApi.TrackedExternalOrder();
      //expect(instance).to.be();
    });

  });

}));