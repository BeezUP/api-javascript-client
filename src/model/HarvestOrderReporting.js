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
    define(['ApiClient', 'model/BeezUPOrderStatus', 'model/ExecutionUUID'], factory);
  } else if (typeof module === 'object' && module.exports) {
    // CommonJS-like environments that support module.exports, like Node.
    module.exports = factory(require('../ApiClient'), require('./BeezUPOrderStatus'), require('./ExecutionUUID'));
  } else {
    // Browser globals (root is window)
    if (!root.BeezUpApi) {
      root.BeezUpApi = {};
    }
    root.BeezUpApi.HarvestOrderReporting = factory(root.BeezUpApi.ApiClient, root.BeezUpApi.BeezUPOrderStatus, root.BeezUpApi.ExecutionUUID);
  }
}(this, function(ApiClient, BeezUPOrderStatus, ExecutionUUID) {
  'use strict';




  /**
   * The HarvestOrderReporting model module.
   * @module model/HarvestOrderReporting
   * @version 2.0
   */

  /**
   * Constructs a new <code>HarvestOrderReporting</code>.
   * The reporting related to a harvest order operation
   * @alias module:model/HarvestOrderReporting
   * @class
   */
  var exports = function() {
    var _this = this;










  };

  /**
   * Constructs a <code>HarvestOrderReporting</code> from a plain JavaScript object, optionally creating a new instance.
   * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
   * @param {Object} data The plain JavaScript object bearing properties of interest.
   * @param {module:model/HarvestOrderReporting} obj Optional instance to populate.
   * @return {module:model/HarvestOrderReporting} The populated <code>HarvestOrderReporting</code> instance.
   */
  exports.constructFromObject = function(data, obj) {
    if (data) {
      obj = obj || new exports();

      if (data.hasOwnProperty('executionUUID')) {
        obj['executionUUID'] = ExecutionUUID.constructFromObject(data['executionUUID']);
      }
      if (data.hasOwnProperty('creationUtcDate')) {
        obj['creationUtcDate'] = ApiClient.convertToType(data['creationUtcDate'], 'Date');
      }
      if (data.hasOwnProperty('processingStatus')) {
        obj['processingStatus'] = ApiClient.convertToType(data['processingStatus'], 'String');
      }
      if (data.hasOwnProperty('lastUpdateUtcDate')) {
        obj['lastUpdateUtcDate'] = ApiClient.convertToType(data['lastUpdateUtcDate'], 'Date');
      }
      if (data.hasOwnProperty('errorMessage')) {
        obj['errorMessage'] = ApiClient.convertToType(data['errorMessage'], 'String');
      }
      if (data.hasOwnProperty('warningMessage')) {
        obj['warningMessage'] = ApiClient.convertToType(data['warningMessage'], 'String');
      }
      if (data.hasOwnProperty('beezUPStatus')) {
        obj['beezUPStatus'] = BeezUPOrderStatus.constructFromObject(data['beezUPStatus']);
      }
      if (data.hasOwnProperty('marketplaceStatus')) {
        obj['marketplaceStatus'] = ApiClient.convertToType(data['marketplaceStatus'], 'String');
      }
      if (data.hasOwnProperty('beezUPForcedStatus')) {
        obj['beezUPForcedStatus'] = ApiClient.convertToType(data['beezUPForcedStatus'], 'String');
      }
    }
    return obj;
  }

  /**
   * @member {module:model/ExecutionUUID} executionUUID
   */
  exports.prototype['executionUUID'] = undefined;
  /**
   * The creation UTC date of the execution
   * @member {Date} creationUtcDate
   */
  exports.prototype['creationUtcDate'] = undefined;
  /**
   * The processing status of the execution
   * @member {String} processingStatus
   */
  exports.prototype['processingStatus'] = undefined;
  /**
   * The last update UTC date of the execution
   * @member {Date} lastUpdateUtcDate
   */
  exports.prototype['lastUpdateUtcDate'] = undefined;
  /**
   * The warning message during the execution
   * @member {String} errorMessage
   */
  exports.prototype['errorMessage'] = undefined;
  /**
   * The warning message during the execution
   * @member {String} warningMessage
   */
  exports.prototype['warningMessage'] = undefined;
  /**
   * @member {module:model/BeezUPOrderStatus} beezUPStatus
   */
  exports.prototype['beezUPStatus'] = undefined;
  /**
   * The order marketplace status
   * @member {String} marketplaceStatus
   */
  exports.prototype['marketplaceStatus'] = undefined;
  /**
   * The marketplace order status forced by BeezUP during the order change oepration. This could happend when there is no status on the marketplace side.
   * @member {String} beezUPForcedStatus
   */
  exports.prototype['beezUPForcedStatus'] = undefined;



  return exports;
}));

