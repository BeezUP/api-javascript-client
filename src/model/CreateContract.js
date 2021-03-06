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
    // AMD. Register as an anonymous module.
    define(['ApiClient', 'model/BillingPeriodInMonth', 'model/CouponDiscountCode', 'model/CouponOfferCode', 'model/OfferId', 'model/OfferRequest', 'model/StoreCount'], factory);
  } else if (typeof module === 'object' && module.exports) {
    // CommonJS-like environments that support module.exports, like Node.
    module.exports = factory(require('../ApiClient'), require('./BillingPeriodInMonth'), require('./CouponDiscountCode'), require('./CouponOfferCode'), require('./OfferId'), require('./OfferRequest'), require('./StoreCount'));
  } else {
    // Browser globals (root is window)
    if (!root.BeezUpApi) {
      root.BeezUpApi = {};
    }
    root.BeezUpApi.CreateContract = factory(root.BeezUpApi.ApiClient, root.BeezUpApi.BillingPeriodInMonth, root.BeezUpApi.CouponDiscountCode, root.BeezUpApi.CouponOfferCode, root.BeezUpApi.OfferId, root.BeezUpApi.OfferRequest, root.BeezUpApi.StoreCount);
  }
}(this, function(ApiClient, BillingPeriodInMonth, CouponDiscountCode, CouponOfferCode, OfferId, OfferRequest, StoreCount) {
  'use strict';




  /**
   * The CreateContract model module.
   * @module model/CreateContract
   * @version 2.0
   */

  /**
   * Constructs a new <code>CreateContract</code>.
   * @alias module:model/CreateContract
   * @class
   * @implements module:model/OfferRequest
   * @param offerId {module:model/OfferId} 
   * @param storeCount {module:model/StoreCount} 
   * @param billingPeriodInMonth {module:model/BillingPeriodInMonth} 
   */
  var exports = function(offerId, storeCount, billingPeriodInMonth) {
    var _this = this;

    OfferRequest.call(_this, offerId, storeCount, billingPeriodInMonth);
  };

  /**
   * Constructs a <code>CreateContract</code> from a plain JavaScript object, optionally creating a new instance.
   * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
   * @param {Object} data The plain JavaScript object bearing properties of interest.
   * @param {module:model/CreateContract} obj Optional instance to populate.
   * @return {module:model/CreateContract} The populated <code>CreateContract</code> instance.
   */
  exports.constructFromObject = function(data, obj) {
    if (data) {
      obj = obj || new exports();

      OfferRequest.constructFromObject(data, obj);
    }
    return obj;
  }


  // Implement OfferRequest interface:
  /**
   * @member {module:model/OfferId} offerId
   */
exports.prototype['offerId'] = undefined;

  /**
   * @member {module:model/StoreCount} storeCount
   */
exports.prototype['storeCount'] = undefined;

  /**
   * @member {module:model/CouponDiscountCode} couponDiscountCode
   */
exports.prototype['couponDiscountCode'] = undefined;

  /**
   * @member {module:model/CouponOfferCode} couponOfferCode
   */
exports.prototype['couponOfferCode'] = undefined;

  /**
   * @member {module:model/BillingPeriodInMonth} billingPeriodInMonth
   */
exports.prototype['billingPeriodInMonth'] = undefined;



  return exports;
}));


