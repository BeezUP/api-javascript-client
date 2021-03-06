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
    define(['ApiClient', 'model/AccountId', 'model/BeezUPCommonMarketplaceTechnicalCode'], factory);
  } else if (typeof module === 'object' && module.exports) {
    // CommonJS-like environments that support module.exports, like Node.
    module.exports = factory(require('../ApiClient'), require('./AccountId'), require('./BeezUPCommonMarketplaceTechnicalCode'));
  } else {
    // Browser globals (root is window)
    if (!root.BeezUpApi) {
      root.BeezUpApi = {};
    }
    root.BeezUpApi.AutomaticTransition = factory(root.BeezUpApi.ApiClient, root.BeezUpApi.AccountId, root.BeezUpApi.BeezUPCommonMarketplaceTechnicalCode);
  }
}(this, function(ApiClient, AccountId, BeezUPCommonMarketplaceTechnicalCode) {
  'use strict';




  /**
   * The AutomaticTransition model module.
   * @module model/AutomaticTransition
   * @version 2.0
   */

  /**
   * Constructs a new <code>AutomaticTransition</code>.
   * @alias module:model/AutomaticTransition
   * @class
   * @param marketplaceTechnicalCode {module:model/BeezUPCommonMarketplaceTechnicalCode} 
   * @param accountId {module:model/AccountId} 
   * @param orderStatusTransitionId {Number} 
   * @param enabled {Boolean} 
   */
  var exports = function(marketplaceTechnicalCode, accountId, orderStatusTransitionId, enabled) {
    var _this = this;

    _this['marketplaceTechnicalCode'] = marketplaceTechnicalCode;
    _this['accountId'] = accountId;
    _this['orderStatusTransitionId'] = orderStatusTransitionId;
    _this['enabled'] = enabled;
  };

  /**
   * Constructs a <code>AutomaticTransition</code> from a plain JavaScript object, optionally creating a new instance.
   * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
   * @param {Object} data The plain JavaScript object bearing properties of interest.
   * @param {module:model/AutomaticTransition} obj Optional instance to populate.
   * @return {module:model/AutomaticTransition} The populated <code>AutomaticTransition</code> instance.
   */
  exports.constructFromObject = function(data, obj) {
    if (data) {
      obj = obj || new exports();

      if (data.hasOwnProperty('marketplaceTechnicalCode')) {
        obj['marketplaceTechnicalCode'] = BeezUPCommonMarketplaceTechnicalCode.constructFromObject(data['marketplaceTechnicalCode']);
      }
      if (data.hasOwnProperty('accountId')) {
        obj['accountId'] = AccountId.constructFromObject(data['accountId']);
      }
      if (data.hasOwnProperty('orderStatusTransitionId')) {
        obj['orderStatusTransitionId'] = ApiClient.convertToType(data['orderStatusTransitionId'], 'Number');
      }
      if (data.hasOwnProperty('enabled')) {
        obj['enabled'] = ApiClient.convertToType(data['enabled'], 'Boolean');
      }
    }
    return obj;
  }

  /**
   * @member {module:model/BeezUPCommonMarketplaceTechnicalCode} marketplaceTechnicalCode
   */
  exports.prototype['marketplaceTechnicalCode'] = undefined;
  /**
   * @member {module:model/AccountId} accountId
   */
  exports.prototype['accountId'] = undefined;
  /**
   * @member {Number} orderStatusTransitionId
   */
  exports.prototype['orderStatusTransitionId'] = undefined;
  /**
   * @member {Boolean} enabled
   */
  exports.prototype['enabled'] = undefined;



  return exports;
}));


