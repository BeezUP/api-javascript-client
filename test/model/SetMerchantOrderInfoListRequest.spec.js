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
    instance = new BeezUpApi.SetMerchantOrderInfoListRequest();
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

  describe('SetMerchantOrderInfoListRequest', function() {
    it('should create an instance of SetMerchantOrderInfoListRequest', function() {
      // uncomment below and update the code to test SetMerchantOrderInfoListRequest
      //var instane = new BeezUpApi.SetMerchantOrderInfoListRequest();
      //expect(instance).to.be.a(BeezUpApi.SetMerchantOrderInfoListRequest);
    });

    it('should have the property orderMerchantECommerceSoftwareName (base name: "order_MerchantECommerceSoftwareName")', function() {
      // uncomment below and update the code to test the property orderMerchantECommerceSoftwareName
      //var instane = new BeezUpApi.SetMerchantOrderInfoListRequest();
      //expect(instance).to.be();
    });

    it('should have the property orderMerchantECommerceSoftwareVersion (base name: "order_MerchantECommerceSoftwareVersion")', function() {
      // uncomment below and update the code to test the property orderMerchantECommerceSoftwareVersion
      //var instane = new BeezUpApi.SetMerchantOrderInfoListRequest();
      //expect(instance).to.be();
    });

    it('should have the property orders (base name: "orders")', function() {
      // uncomment below and update the code to test the property orders
      //var instane = new BeezUpApi.SetMerchantOrderInfoListRequest();
      //expect(instance).to.be();
    });

  });

}));
