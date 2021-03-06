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
    define(['ApiClient', 'model/AccountId', 'model/BeezUPCommonMarketplaceBusinessCode', 'model/BeezUPCommonMarketplaceTechnicalCode'], factory);
  } else if (typeof module === 'object' && module.exports) {
    // CommonJS-like environments that support module.exports, like Node.
    module.exports = factory(require('../ApiClient'), require('./AccountId'), require('./BeezUPCommonMarketplaceBusinessCode'), require('./BeezUPCommonMarketplaceTechnicalCode'));
  } else {
    // Browser globals (root is window)
    if (!root.BeezUpApi) {
      root.BeezUpApi = {};
    }
    root.BeezUpApi.AccountSynchronization = factory(root.BeezUpApi.ApiClient, root.BeezUpApi.AccountId, root.BeezUpApi.BeezUPCommonMarketplaceBusinessCode, root.BeezUpApi.BeezUPCommonMarketplaceTechnicalCode);
  }
}(this, function(ApiClient, AccountId, BeezUPCommonMarketplaceBusinessCode, BeezUPCommonMarketplaceTechnicalCode) {
  'use strict';




  /**
   * The AccountSynchronization model module.
   * @module model/AccountSynchronization
   * @version 2.0
   */

  /**
   * Constructs a new <code>AccountSynchronization</code>.
   * @alias module:model/AccountSynchronization
   * @class
   */
  var exports = function() {
    var _this = this;





  };

  /**
   * Constructs a <code>AccountSynchronization</code> from a plain JavaScript object, optionally creating a new instance.
   * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
   * @param {Object} data The plain JavaScript object bearing properties of interest.
   * @param {module:model/AccountSynchronization} obj Optional instance to populate.
   * @return {module:model/AccountSynchronization} The populated <code>AccountSynchronization</code> instance.
   */
  exports.constructFromObject = function(data, obj) {
    if (data) {
      obj = obj || new exports();

      if (data.hasOwnProperty('accountId')) {
        obj['accountId'] = AccountId.constructFromObject(data['accountId']);
      }
      if (data.hasOwnProperty('completedHarvestSynchroUtcDate')) {
        obj['completedHarvestSynchroUtcDate'] = ApiClient.convertToType(data['completedHarvestSynchroUtcDate'], 'Date');
      }
      if (data.hasOwnProperty('marketplaceBusinessCode')) {
        obj['marketplaceBusinessCode'] = BeezUPCommonMarketplaceBusinessCode.constructFromObject(data['marketplaceBusinessCode']);
      }
      if (data.hasOwnProperty('marketplaceTechnicalCode')) {
        obj['marketplaceTechnicalCode'] = BeezUPCommonMarketplaceTechnicalCode.constructFromObject(data['marketplaceTechnicalCode']);
      }
    }
    return obj;
  }

  /**
   * @member {module:model/AccountId} accountId
   */
  exports.prototype['accountId'] = undefined;
  /**
   * @member {Date} completedHarvestSynchroUtcDate
   */
  exports.prototype['completedHarvestSynchroUtcDate'] = undefined;
  /**
   * @member {module:model/BeezUPCommonMarketplaceBusinessCode} marketplaceBusinessCode
   */
  exports.prototype['marketplaceBusinessCode'] = undefined;
  /**
   * @member {module:model/BeezUPCommonMarketplaceTechnicalCode} marketplaceTechnicalCode
   */
  exports.prototype['marketplaceTechnicalCode'] = undefined;



  return exports;
}));


