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
    define(['ApiClient'], factory);
  } else if (typeof module === 'object' && module.exports) {
    // CommonJS-like environments that support module.exports, like Node.
    module.exports = factory(require('../ApiClient'));
  } else {
    // Browser globals (root is window)
    if (!root.BeezUpApi) {
      root.BeezUpApi = {};
    }
    root.BeezUpApi.ReportByDayAllChannels = factory(root.BeezUpApi.ApiClient);
  }
}(this, function(ApiClient) {
  'use strict';




  /**
   * The ReportByDayAllChannels model module.
   * @module model/ReportByDayAllChannels
   * @version 2.0
   */

  /**
   * Constructs a new <code>ReportByDayAllChannels</code>.
   * @alias module:model/ReportByDayAllChannels
   * @class
   * @param clickCount {Number} The click count for this channel
   * @param cost {Number} The cost for this channel
   * @param orderCount {Number} The order count for this channel
   * @param turnOver {Number} The Turnover for this channel
   * @param margin {Number} The margin for this channel
   * @param performanceIndicator {Number} The performance indicator based on the performance indicator formula indicated in the request for this channel
   */
  var exports = function(clickCount, cost, orderCount, turnOver, margin, performanceIndicator) {
    var _this = this;

    _this['clickCount'] = clickCount;
    _this['cost'] = cost;
    _this['orderCount'] = orderCount;
    _this['turnOver'] = turnOver;
    _this['margin'] = margin;
    _this['performanceIndicator'] = performanceIndicator;
  };

  /**
   * Constructs a <code>ReportByDayAllChannels</code> from a plain JavaScript object, optionally creating a new instance.
   * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
   * @param {Object} data The plain JavaScript object bearing properties of interest.
   * @param {module:model/ReportByDayAllChannels} obj Optional instance to populate.
   * @return {module:model/ReportByDayAllChannels} The populated <code>ReportByDayAllChannels</code> instance.
   */
  exports.constructFromObject = function(data, obj) {
    if (data) {
      obj = obj || new exports();

      if (data.hasOwnProperty('clickCount')) {
        obj['clickCount'] = ApiClient.convertToType(data['clickCount'], 'Number');
      }
      if (data.hasOwnProperty('cost')) {
        obj['cost'] = ApiClient.convertToType(data['cost'], 'Number');
      }
      if (data.hasOwnProperty('orderCount')) {
        obj['orderCount'] = ApiClient.convertToType(data['orderCount'], 'Number');
      }
      if (data.hasOwnProperty('turnOver')) {
        obj['turnOver'] = ApiClient.convertToType(data['turnOver'], 'Number');
      }
      if (data.hasOwnProperty('margin')) {
        obj['margin'] = ApiClient.convertToType(data['margin'], 'Number');
      }
      if (data.hasOwnProperty('performanceIndicator')) {
        obj['performanceIndicator'] = ApiClient.convertToType(data['performanceIndicator'], 'Number');
      }
    }
    return obj;
  }

  /**
   * The click count for this channel
   * @member {Number} clickCount
   */
  exports.prototype['clickCount'] = undefined;
  /**
   * The cost for this channel
   * @member {Number} cost
   */
  exports.prototype['cost'] = undefined;
  /**
   * The order count for this channel
   * @member {Number} orderCount
   */
  exports.prototype['orderCount'] = undefined;
  /**
   * The Turnover for this channel
   * @member {Number} turnOver
   */
  exports.prototype['turnOver'] = undefined;
  /**
   * The margin for this channel
   * @member {Number} margin
   */
  exports.prototype['margin'] = undefined;
  /**
   * The performance indicator based on the performance indicator formula indicated in the request for this channel
   * @member {Number} performanceIndicator
   */
  exports.prototype['performanceIndicator'] = undefined;



  return exports;
}));

