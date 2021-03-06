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
    define(['ApiClient', 'model/BeezUPCommonCurrencyCode', 'model/GlobalPerformanceIndicatorByChannel', 'model/ReportByDay'], factory);
  } else if (typeof module === 'object' && module.exports) {
    // CommonJS-like environments that support module.exports, like Node.
    module.exports = factory(require('../ApiClient'), require('./BeezUPCommonCurrencyCode'), require('./GlobalPerformanceIndicatorByChannel'), require('./ReportByDay'));
  } else {
    // Browser globals (root is window)
    if (!root.BeezUpApi) {
      root.BeezUpApi = {};
    }
    root.BeezUpApi.ReportByDayResponse = factory(root.BeezUpApi.ApiClient, root.BeezUpApi.BeezUPCommonCurrencyCode, root.BeezUpApi.GlobalPerformanceIndicatorByChannel, root.BeezUpApi.ReportByDay);
  }
}(this, function(ApiClient, BeezUPCommonCurrencyCode, GlobalPerformanceIndicatorByChannel, ReportByDay) {
  'use strict';




  /**
   * The ReportByDayResponse model module.
   * @module model/ReportByDayResponse
   * @version 2.0
   */

  /**
   * Constructs a new <code>ReportByDayResponse</code>.
   * @alias module:model/ReportByDayResponse
   * @class
   * @param currencyCode {module:model/BeezUPCommonCurrencyCode} 
   * @param globalPerformanceIndicators {Array.<module:model/GlobalPerformanceIndicatorByChannel>} 
   * @param days {Array.<module:model/ReportByDay>} 
   */
  var exports = function(currencyCode, globalPerformanceIndicators, days) {
    var _this = this;

    _this['currencyCode'] = currencyCode;
    _this['globalPerformanceIndicators'] = globalPerformanceIndicators;
    _this['days'] = days;
  };

  /**
   * Constructs a <code>ReportByDayResponse</code> from a plain JavaScript object, optionally creating a new instance.
   * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
   * @param {Object} data The plain JavaScript object bearing properties of interest.
   * @param {module:model/ReportByDayResponse} obj Optional instance to populate.
   * @return {module:model/ReportByDayResponse} The populated <code>ReportByDayResponse</code> instance.
   */
  exports.constructFromObject = function(data, obj) {
    if (data) {
      obj = obj || new exports();

      if (data.hasOwnProperty('currencyCode')) {
        obj['currencyCode'] = BeezUPCommonCurrencyCode.constructFromObject(data['currencyCode']);
      }
      if (data.hasOwnProperty('globalPerformanceIndicators')) {
        obj['globalPerformanceIndicators'] = ApiClient.convertToType(data['globalPerformanceIndicators'], [GlobalPerformanceIndicatorByChannel]);
      }
      if (data.hasOwnProperty('days')) {
        obj['days'] = ApiClient.convertToType(data['days'], [ReportByDay]);
      }
    }
    return obj;
  }

  /**
   * @member {module:model/BeezUPCommonCurrencyCode} currencyCode
   */
  exports.prototype['currencyCode'] = undefined;
  /**
   * @member {Array.<module:model/GlobalPerformanceIndicatorByChannel>} globalPerformanceIndicators
   */
  exports.prototype['globalPerformanceIndicators'] = undefined;
  /**
   * @member {Array.<module:model/ReportByDay>} days
   */
  exports.prototype['days'] = undefined;



  return exports;
}));


