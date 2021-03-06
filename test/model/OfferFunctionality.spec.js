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
    instance = new BeezUpApi.OfferFunctionality();
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

  describe('OfferFunctionality', function() {
    it('should create an instance of OfferFunctionality', function() {
      // uncomment below and update the code to test OfferFunctionality
      //var instane = new BeezUpApi.OfferFunctionality();
      //expect(instance).to.be.a(BeezUpApi.OfferFunctionality);
    });

    it('should have the property functionalityCode (base name: "functionalityCode")', function() {
      // uncomment below and update the code to test the property functionalityCode
      //var instane = new BeezUpApi.OfferFunctionality();
      //expect(instance).to.be();
    });

    it('should have the property maxValueInteger (base name: "maxValueInteger")', function() {
      // uncomment below and update the code to test the property maxValueInteger
      //var instane = new BeezUpApi.OfferFunctionality();
      //expect(instance).to.be();
    });

    it('should have the property unlimited (base name: "unlimited")', function() {
      // uncomment below and update the code to test the property unlimited
      //var instane = new BeezUpApi.OfferFunctionality();
      //expect(instance).to.be();
    });

    it('should have the property text (base name: "text")', function() {
      // uncomment below and update the code to test the property text
      //var instane = new BeezUpApi.OfferFunctionality();
      //expect(instance).to.be();
    });

  });

}));
