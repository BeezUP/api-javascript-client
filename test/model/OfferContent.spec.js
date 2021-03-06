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
    instance = new BeezUpApi.OfferContent();
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

  describe('OfferContent', function() {
    it('should create an instance of OfferContent', function() {
      // uncomment below and update the code to test OfferContent
      //var instane = new BeezUpApi.OfferContent();
      //expect(instance).to.be.a(BeezUpApi.OfferContent);
    });

    it('should have the property previousFixPeriodInvoiceProrataInfo (base name: "previousFixPeriodInvoiceProrataInfo")', function() {
      // uncomment below and update the code to test the property previousFixPeriodInvoiceProrataInfo
      //var instane = new BeezUpApi.OfferContent();
      //expect(instance).to.be();
    });

    it('should have the property contractBillingPeriodInfo (base name: "contractBillingPeriodInfo")', function() {
      // uncomment below and update the code to test the property contractBillingPeriodInfo
      //var instane = new BeezUpApi.OfferContent();
      //expect(instance).to.be();
    });

    it('should have the property contractClickInfo (base name: "contractClickInfo")', function() {
      // uncomment below and update the code to test the property contractClickInfo
      //var instane = new BeezUpApi.OfferContent();
      //expect(instance).to.be();
    });

    it('should have the property contractCommitmentInfo (base name: "contractCommitmentInfo")', function() {
      // uncomment below and update the code to test the property contractCommitmentInfo
      //var instane = new BeezUpApi.OfferContent();
      //expect(instance).to.be();
    });

    it('should have the property contractDiscountInfo (base name: "contractDiscountInfo")', function() {
      // uncomment below and update the code to test the property contractDiscountInfo
      //var instane = new BeezUpApi.OfferContent();
      //expect(instance).to.be();
    });

    it('should have the property contractMoneyInfo (base name: "contractMoneyInfo")', function() {
      // uncomment below and update the code to test the property contractMoneyInfo
      //var instane = new BeezUpApi.OfferContent();
      //expect(instance).to.be();
    });

    it('should have the property contractStoreInfo (base name: "contractStoreInfo")', function() {
      // uncomment below and update the code to test the property contractStoreInfo
      //var instane = new BeezUpApi.OfferContent();
      //expect(instance).to.be();
    });

    it('should have the property contractBonusInfo (base name: "contractBonusInfo")', function() {
      // uncomment below and update the code to test the property contractBonusInfo
      //var instane = new BeezUpApi.OfferContent();
      //expect(instance).to.be();
    });

    it('should have the property contractTerminationReasonType (base name: "contractTerminationReasonType")', function() {
      // uncomment below and update the code to test the property contractTerminationReasonType
      //var instane = new BeezUpApi.OfferContent();
      //expect(instance).to.be();
    });

    it('should have the property contractTerminationReason (base name: "contractTerminationReason")', function() {
      // uncomment below and update the code to test the property contractTerminationReason
      //var instane = new BeezUpApi.OfferContent();
      //expect(instance).to.be();
    });

    it('should have the property notifyVatExemption (base name: "notifyVatExemption")', function() {
      // uncomment below and update the code to test the property notifyVatExemption
      //var instane = new BeezUpApi.OfferContent();
      //expect(instance).to.be();
    });

  });

}));
