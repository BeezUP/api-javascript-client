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
    define(['ApiClient', 'model/AccountId', 'model/BeezUPCommonMarketplaceTechnicalCode', 'model/BeezUPOrderId', 'model/Etag', 'model/OrderIdentifier'], factory);
  } else if (typeof module === 'object' && module.exports) {
    // CommonJS-like environments that support module.exports, like Node.
    module.exports = factory(require('../ApiClient'), require('./AccountId'), require('./BeezUPCommonMarketplaceTechnicalCode'), require('./BeezUPOrderId'), require('./Etag'), require('./OrderIdentifier'));
  } else {
    // Browser globals (root is window)
    if (!root.BeezUpApi) {
      root.BeezUpApi = {};
    }
    root.BeezUpApi.OrderIdentifierWithETag = factory(root.BeezUpApi.ApiClient, root.BeezUpApi.AccountId, root.BeezUpApi.BeezUPCommonMarketplaceTechnicalCode, root.BeezUpApi.BeezUPOrderId, root.BeezUpApi.Etag, root.BeezUpApi.OrderIdentifier);
  }
}(this, function(ApiClient, AccountId, BeezUPCommonMarketplaceTechnicalCode, BeezUPOrderId, Etag, OrderIdentifier) {
  'use strict';




  /**
   * The OrderIdentifierWithETag model module.
   * @module model/OrderIdentifierWithETag
   * @version 2.0
   */

  /**
   * Constructs a new <code>OrderIdentifierWithETag</code>.
   * @alias module:model/OrderIdentifierWithETag
   * @class
   * @implements module:model/OrderIdentifier
   * @param marketplaceTechnicalCode {module:model/BeezUPCommonMarketplaceTechnicalCode} 
   * @param accountId {module:model/AccountId} 
   * @param beezUPOrderId {module:model/BeezUPOrderId} 
   * @param etag {module:model/Etag} 
   */
  var exports = function(marketplaceTechnicalCode, accountId, beezUPOrderId, etag) {
    var _this = this;

    OrderIdentifier.call(_this, marketplaceTechnicalCode, accountId, beezUPOrderId);
    _this['etag'] = etag;
  };

  /**
   * Constructs a <code>OrderIdentifierWithETag</code> from a plain JavaScript object, optionally creating a new instance.
   * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
   * @param {Object} data The plain JavaScript object bearing properties of interest.
   * @param {module:model/OrderIdentifierWithETag} obj Optional instance to populate.
   * @return {module:model/OrderIdentifierWithETag} The populated <code>OrderIdentifierWithETag</code> instance.
   */
  exports.constructFromObject = function(data, obj) {
    if (data) {
      obj = obj || new exports();

      OrderIdentifier.constructFromObject(data, obj);
      if (data.hasOwnProperty('etag')) {
        obj['etag'] = Etag.constructFromObject(data['etag']);
      }
    }
    return obj;
  }

  /**
   * @member {module:model/Etag} etag
   */
  exports.prototype['etag'] = undefined;

  // Implement OrderIdentifier interface:
  /**
   * @member {module:model/BeezUPCommonMarketplaceTechnicalCode} marketplaceTechnicalCode
   */
exports.prototype['marketplaceTechnicalCode'] = undefined;

  /**
   * @member {module:model/AccountId} accountId
   */
exports.prototype['accountId'] = undefined;

  /**
   * @member {module:model/BeezUPOrderId} beezUPOrderId
   */
exports.prototype['beezUPOrderId'] = undefined;



  return exports;
}));


