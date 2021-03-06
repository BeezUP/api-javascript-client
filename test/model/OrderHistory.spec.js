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
    instance = new BeezUpApi.OrderHistory();
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

  describe('OrderHistory', function() {
    it('should create an instance of OrderHistory', function() {
      // uncomment below and update the code to test OrderHistory
      //var instane = new BeezUpApi.OrderHistory();
      //expect(instance).to.be.a(BeezUpApi.OrderHistory);
    });

    it('should have the property changeOrderReportings (base name: "changeOrderReportings")', function() {
      // uncomment below and update the code to test the property changeOrderReportings
      //var instane = new BeezUpApi.OrderHistory();
      //expect(instance).to.be();
    });

    it('should have the property harvestOrderReportings (base name: "harvestOrderReportings")', function() {
      // uncomment below and update the code to test the property harvestOrderReportings
      //var instane = new BeezUpApi.OrderHistory();
      //expect(instance).to.be();
    });

    it('should have the property lastModificationUtcDate (base name: "lastModificationUtcDate")', function() {
      // uncomment below and update the code to test the property lastModificationUtcDate
      //var instane = new BeezUpApi.OrderHistory();
      //expect(instance).to.be();
    });

  });

}));
