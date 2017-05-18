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
    instance = new BeezUpApi.ContractDiscountInfo();
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

  describe('ContractDiscountInfo', function() {
    it('should create an instance of ContractDiscountInfo', function() {
      // uncomment below and update the code to test ContractDiscountInfo
      //var instane = new BeezUpApi.ContractDiscountInfo();
      //expect(instance).to.be.a(BeezUpApi.ContractDiscountInfo);
    });

    it('should have the property amountCodePromoDiscountPerMonth (base name: "amountCodePromoDiscountPerMonth")', function() {
      // uncomment below and update the code to test the property amountCodePromoDiscountPerMonth
      //var instane = new BeezUpApi.ContractDiscountInfo();
      //expect(instance).to.be();
    });

    it('should have the property discountDurationInMonth (base name: "discountDurationInMonth")', function() {
      // uncomment below and update the code to test the property discountDurationInMonth
      //var instane = new BeezUpApi.ContractDiscountInfo();
      //expect(instance).to.be();
    });

    it('should have the property percentDiscount (base name: "percentDiscount")', function() {
      // uncomment below and update the code to test the property percentDiscount
      //var instane = new BeezUpApi.ContractDiscountInfo();
      //expect(instance).to.be();
    });

    it('should have the property promotionalCodeValidity (base name: "promotionalCodeValidity")', function() {
      // uncomment below and update the code to test the property promotionalCodeValidity
      //var instane = new BeezUpApi.ContractDiscountInfo();
      //expect(instance).to.be();
    });

    it('should have the property amountCodePromoDiscount (base name: "amountCodePromoDiscount")', function() {
      // uncomment below and update the code to test the property amountCodePromoDiscount
      //var instane = new BeezUpApi.ContractDiscountInfo();
      //expect(instance).to.be();
    });

    it('should have the property couponDiscountCode (base name: "couponDiscountCode")', function() {
      // uncomment below and update the code to test the property couponDiscountCode
      //var instane = new BeezUpApi.ContractDiscountInfo();
      //expect(instance).to.be();
    });

    it('should have the property couponDiscountId (base name: "couponDiscountId")', function() {
      // uncomment below and update the code to test the property couponDiscountId
      //var instane = new BeezUpApi.ContractDiscountInfo();
      //expect(instance).to.be();
    });

    it('should have the property isCouponDiscountLinkedToCouponOffer (base name: "isCouponDiscountLinkedToCouponOffer")', function() {
      // uncomment below and update the code to test the property isCouponDiscountLinkedToCouponOffer
      //var instane = new BeezUpApi.ContractDiscountInfo();
      //expect(instance).to.be();
    });

    it('should have the property customerHasActualDiscount (base name: "customerHasActualDiscount")', function() {
      // uncomment below and update the code to test the property customerHasActualDiscount
      //var instane = new BeezUpApi.ContractDiscountInfo();
      //expect(instance).to.be();
    });

  });

}));
