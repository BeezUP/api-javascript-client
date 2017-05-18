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
    instance = new BeezUpApi.Order();
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

  describe('Order', function() {
    it('should create an instance of Order', function() {
      // uncomment below and update the code to test Order
      //var instane = new BeezUpApi.Order();
      //expect(instance).to.be.a(BeezUpApi.Order);
    });

    it('should have the property links (base name: "links")', function() {
      // uncomment below and update the code to test the property links
      //var instane = new BeezUpApi.Order();
      //expect(instance).to.be();
    });

    it('should have the property orderMarketPlaceChannel (base name: "order_MarketPlaceChannel")', function() {
      // uncomment below and update the code to test the property orderMarketPlaceChannel
      //var instane = new BeezUpApi.Order();
      //expect(instance).to.be();
    });

    it('should have the property orderTotalTax (base name: "order_TotalTax")', function() {
      // uncomment below and update the code to test the property orderTotalTax
      //var instane = new BeezUpApi.Order();
      //expect(instance).to.be();
    });

    it('should have the property orderTotalCommission (base name: "order_TotalCommission")', function() {
      // uncomment below and update the code to test the property orderTotalCommission
      //var instane = new BeezUpApi.Order();
      //expect(instance).to.be();
    });

    it('should have the property orderPaymentMethod (base name: "order_PaymentMethod")', function() {
      // uncomment below and update the code to test the property orderPaymentMethod
      //var instane = new BeezUpApi.Order();
      //expect(instance).to.be();
    });

    it('should have the property orderPayingUtcDate (base name: "order_PayingUtcDate")', function() {
      // uncomment below and update the code to test the property orderPayingUtcDate
      //var instane = new BeezUpApi.Order();
      //expect(instance).to.be();
    });

    it('should have the property orderComment (base name: "order_Comment")', function() {
      // uncomment below and update the code to test the property orderComment
      //var instane = new BeezUpApi.Order();
      //expect(instance).to.be();
    });

    it('should have the property orderShippingCivility (base name: "order_Shipping_Civility")', function() {
      // uncomment below and update the code to test the property orderShippingCivility
      //var instane = new BeezUpApi.Order();
      //expect(instance).to.be();
    });

    it('should have the property orderShippingCompanyName (base name: "order_Shipping_CompanyName")', function() {
      // uncomment below and update the code to test the property orderShippingCompanyName
      //var instane = new BeezUpApi.Order();
      //expect(instance).to.be();
    });

    it('should have the property orderShippingAddressName (base name: "order_Shipping_AddressName")', function() {
      // uncomment below and update the code to test the property orderShippingAddressName
      //var instane = new BeezUpApi.Order();
      //expect(instance).to.be();
    });

    it('should have the property orderShippingEmail (base name: "order_Shipping_Email")', function() {
      // uncomment below and update the code to test the property orderShippingEmail
      //var instane = new BeezUpApi.Order();
      //expect(instance).to.be();
    });

    it('should have the property orderShippingAddressLine1 (base name: "order_Shipping_AddressLine1")', function() {
      // uncomment below and update the code to test the property orderShippingAddressLine1
      //var instane = new BeezUpApi.Order();
      //expect(instance).to.be();
    });

    it('should have the property orderShippingAddressLine2 (base name: "order_Shipping_AddressLine2")', function() {
      // uncomment below and update the code to test the property orderShippingAddressLine2
      //var instane = new BeezUpApi.Order();
      //expect(instance).to.be();
    });

    it('should have the property orderShippingAddressLine3 (base name: "order_Shipping_AddressLine3")', function() {
      // uncomment below and update the code to test the property orderShippingAddressLine3
      //var instane = new BeezUpApi.Order();
      //expect(instance).to.be();
    });

    it('should have the property orderShippingAddressPostalCode (base name: "order_Shipping_AddressPostalCode")', function() {
      // uncomment below and update the code to test the property orderShippingAddressPostalCode
      //var instane = new BeezUpApi.Order();
      //expect(instance).to.be();
    });

    it('should have the property orderShippingAddressCity (base name: "order_Shipping_AddressCity")', function() {
      // uncomment below and update the code to test the property orderShippingAddressCity
      //var instane = new BeezUpApi.Order();
      //expect(instance).to.be();
    });

    it('should have the property orderShippingAddressStateOrRegion (base name: "order_Shipping_AddressStateOrRegion")', function() {
      // uncomment below and update the code to test the property orderShippingAddressStateOrRegion
      //var instane = new BeezUpApi.Order();
      //expect(instance).to.be();
    });

    it('should have the property orderShippingAddressCountryName (base name: "order_Shipping_AddressCountryName")', function() {
      // uncomment below and update the code to test the property orderShippingAddressCountryName
      //var instane = new BeezUpApi.Order();
      //expect(instance).to.be();
    });

    it('should have the property orderShippingAddressCountryIsoCodeAlpha2 (base name: "order_Shipping_AddressCountryIsoCodeAlpha2")', function() {
      // uncomment below and update the code to test the property orderShippingAddressCountryIsoCodeAlpha2
      //var instane = new BeezUpApi.Order();
      //expect(instance).to.be();
    });

    it('should have the property orderShippingPhone (base name: "order_Shipping_Phone")', function() {
      // uncomment below and update the code to test the property orderShippingPhone
      //var instane = new BeezUpApi.Order();
      //expect(instance).to.be();
    });

    it('should have the property orderShippingMobilePhone (base name: "order_Shipping_MobilePhone")', function() {
      // uncomment below and update the code to test the property orderShippingMobilePhone
      //var instane = new BeezUpApi.Order();
      //expect(instance).to.be();
    });

    it('should have the property orderShippingPrice (base name: "order_Shipping_Price")', function() {
      // uncomment below and update the code to test the property orderShippingPrice
      //var instane = new BeezUpApi.Order();
      //expect(instance).to.be();
    });

    it('should have the property orderShippingMethod (base name: "order_Shipping_Method")', function() {
      // uncomment below and update the code to test the property orderShippingMethod
      //var instane = new BeezUpApi.Order();
      //expect(instance).to.be();
    });

    it('should have the property orderShippingShippingTax (base name: "order_Shipping_ShippingTax")', function() {
      // uncomment below and update the code to test the property orderShippingShippingTax
      //var instane = new BeezUpApi.Order();
      //expect(instance).to.be();
    });

    it('should have the property orderShippingEarliestShipUtcDate (base name: "order_Shipping_EarliestShipUtcDate")', function() {
      // uncomment below and update the code to test the property orderShippingEarliestShipUtcDate
      //var instane = new BeezUpApi.Order();
      //expect(instance).to.be();
    });

    it('should have the property orderShippingLatestShipUtcDate (base name: "order_Shipping_LatestShipUtcDate")', function() {
      // uncomment below and update the code to test the property orderShippingLatestShipUtcDate
      //var instane = new BeezUpApi.Order();
      //expect(instance).to.be();
    });

    it('should have the property orderBuyerIdentifier (base name: "order_Buyer_Identifier")', function() {
      // uncomment below and update the code to test the property orderBuyerIdentifier
      //var instane = new BeezUpApi.Order();
      //expect(instance).to.be();
    });

    it('should have the property orderBuyerCivility (base name: "order_Buyer_Civility")', function() {
      // uncomment below and update the code to test the property orderBuyerCivility
      //var instane = new BeezUpApi.Order();
      //expect(instance).to.be();
    });

    it('should have the property orderBuyerCompanyName (base name: "order_Buyer_CompanyName")', function() {
      // uncomment below and update the code to test the property orderBuyerCompanyName
      //var instane = new BeezUpApi.Order();
      //expect(instance).to.be();
    });

    it('should have the property orderBuyerEmail (base name: "order_Buyer_Email")', function() {
      // uncomment below and update the code to test the property orderBuyerEmail
      //var instane = new BeezUpApi.Order();
      //expect(instance).to.be();
    });

    it('should have the property orderBuyerAddressLine1 (base name: "order_Buyer_AddressLine1")', function() {
      // uncomment below and update the code to test the property orderBuyerAddressLine1
      //var instane = new BeezUpApi.Order();
      //expect(instance).to.be();
    });

    it('should have the property orderBuyerAddressLine2 (base name: "order_Buyer_AddressLine2")', function() {
      // uncomment below and update the code to test the property orderBuyerAddressLine2
      //var instane = new BeezUpApi.Order();
      //expect(instance).to.be();
    });

    it('should have the property orderBuyerAddressLine3 (base name: "order_Buyer_AddressLine3")', function() {
      // uncomment below and update the code to test the property orderBuyerAddressLine3
      //var instane = new BeezUpApi.Order();
      //expect(instance).to.be();
    });

    it('should have the property orderBuyerAddressPostalCode (base name: "order_Buyer_AddressPostalCode")', function() {
      // uncomment below and update the code to test the property orderBuyerAddressPostalCode
      //var instane = new BeezUpApi.Order();
      //expect(instance).to.be();
    });

    it('should have the property orderBuyerAddressCity (base name: "order_Buyer_AddressCity")', function() {
      // uncomment below and update the code to test the property orderBuyerAddressCity
      //var instane = new BeezUpApi.Order();
      //expect(instance).to.be();
    });

    it('should have the property orderBuyerAddressStateOrRegion (base name: "order_Buyer_AddressStateOrRegion")', function() {
      // uncomment below and update the code to test the property orderBuyerAddressStateOrRegion
      //var instane = new BeezUpApi.Order();
      //expect(instance).to.be();
    });

    it('should have the property orderBuyerAddressCountryName (base name: "order_Buyer_AddressCountryName")', function() {
      // uncomment below and update the code to test the property orderBuyerAddressCountryName
      //var instane = new BeezUpApi.Order();
      //expect(instance).to.be();
    });

    it('should have the property orderBuyerAddressCountryIsoCodeAlpha2 (base name: "order_Buyer_AddressCountryIsoCodeAlpha2")', function() {
      // uncomment below and update the code to test the property orderBuyerAddressCountryIsoCodeAlpha2
      //var instane = new BeezUpApi.Order();
      //expect(instance).to.be();
    });

    it('should have the property orderBuyerPhone (base name: "order_Buyer_Phone")', function() {
      // uncomment below and update the code to test the property orderBuyerPhone
      //var instane = new BeezUpApi.Order();
      //expect(instance).to.be();
    });

    it('should have the property orderBuyerMobilePhone (base name: "order_Buyer_MobilePhone")', function() {
      // uncomment below and update the code to test the property orderBuyerMobilePhone
      //var instane = new BeezUpApi.Order();
      //expect(instance).to.be();
    });

    it('should have the property orderOrderSourceUri (base name: "order_OrderSourceUri")', function() {
      // uncomment below and update the code to test the property orderOrderSourceUri
      //var instane = new BeezUpApi.Order();
      //expect(instance).to.be();
    });

    it('should have the property orderOrderItemsSourceUri (base name: "order_OrderItemsSourceUri")', function() {
      // uncomment below and update the code to test the property orderOrderItemsSourceUri
      //var instane = new BeezUpApi.Order();
      //expect(instance).to.be();
    });

    it('should have the property orderItems (base name: "orderItems")', function() {
      // uncomment below and update the code to test the property orderItems
      //var instane = new BeezUpApi.Order();
      //expect(instance).to.be();
    });

    it('should have the property transitionLinks (base name: "transitionLinks")', function() {
      // uncomment below and update the code to test the property transitionLinks
      //var instane = new BeezUpApi.Order();
      //expect(instance).to.be();
    });

  });

}));
