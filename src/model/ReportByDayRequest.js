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
    define(['ApiClient', 'model/BeezUPCommonCatalogCategoryId', 'model/BeezUPCommonChannelId', 'model/BeezUPCommonProductId', 'model/ReportAdvancedFilters'], factory);
  } else if (typeof module === 'object' && module.exports) {
    // CommonJS-like environments that support module.exports, like Node.
    module.exports = factory(require('../ApiClient'), require('./BeezUPCommonCatalogCategoryId'), require('./BeezUPCommonChannelId'), require('./BeezUPCommonProductId'), require('./ReportAdvancedFilters'));
  } else {
    // Browser globals (root is window)
    if (!root.BeezUpApi) {
      root.BeezUpApi = {};
    }
    root.BeezUpApi.ReportByDayRequest = factory(root.BeezUpApi.ApiClient, root.BeezUpApi.BeezUPCommonCatalogCategoryId, root.BeezUpApi.BeezUPCommonChannelId, root.BeezUpApi.BeezUPCommonProductId, root.BeezUpApi.ReportAdvancedFilters);
  }
}(this, function(ApiClient, BeezUPCommonCatalogCategoryId, BeezUPCommonChannelId, BeezUPCommonProductId, ReportAdvancedFilters) {
  'use strict';




  /**
   * The ReportByDayRequest model module.
   * @module model/ReportByDayRequest
   * @version 2.0
   */

  /**
   * Constructs a new <code>ReportByDayRequest</code>.
   * @alias module:model/ReportByDayRequest
   * @class
   * @param beginPeriodUtcDate {Date} The begin date period you want to get the report
   * @param endPeriodUtcDate {Date} The end date period you want to get the report.
   */
  var exports = function(beginPeriodUtcDate, endPeriodUtcDate) {
    var _this = this;




    _this['beginPeriodUtcDate'] = beginPeriodUtcDate;
    _this['endPeriodUtcDate'] = endPeriodUtcDate;

  };

  /**
   * Constructs a <code>ReportByDayRequest</code> from a plain JavaScript object, optionally creating a new instance.
   * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
   * @param {Object} data The plain JavaScript object bearing properties of interest.
   * @param {module:model/ReportByDayRequest} obj Optional instance to populate.
   * @return {module:model/ReportByDayRequest} The populated <code>ReportByDayRequest</code> instance.
   */
  exports.constructFromObject = function(data, obj) {
    if (data) {
      obj = obj || new exports();

      if (data.hasOwnProperty('channelIds')) {
        obj['channelIds'] = ApiClient.convertToType(data['channelIds'], [BeezUPCommonChannelId]);
      }
      if (data.hasOwnProperty('productId')) {
        obj['productId'] = BeezUPCommonProductId.constructFromObject(data['productId']);
      }
      if (data.hasOwnProperty('catalogCategoryId')) {
        obj['catalogCategoryId'] = BeezUPCommonCatalogCategoryId.constructFromObject(data['catalogCategoryId']);
      }
      if (data.hasOwnProperty('beginPeriodUtcDate')) {
        obj['beginPeriodUtcDate'] = ApiClient.convertToType(data['beginPeriodUtcDate'], 'Date');
      }
      if (data.hasOwnProperty('endPeriodUtcDate')) {
        obj['endPeriodUtcDate'] = ApiClient.convertToType(data['endPeriodUtcDate'], 'Date');
      }
      if (data.hasOwnProperty('advancedFilters')) {
        obj['advancedFilters'] = ReportAdvancedFilters.constructFromObject(data['advancedFilters']);
      }
    }
    return obj;
  }

  /**
   * Indicate the channel identifier list
   * @member {Array.<module:model/BeezUPCommonChannelId>} channelIds
   */
  exports.prototype['channelIds'] = undefined;
  /**
   * @member {module:model/BeezUPCommonProductId} productId
   */
  exports.prototype['productId'] = undefined;
  /**
   * @member {module:model/BeezUPCommonCatalogCategoryId} catalogCategoryId
   */
  exports.prototype['catalogCategoryId'] = undefined;
  /**
   * The begin date period you want to get the report
   * @member {Date} beginPeriodUtcDate
   */
  exports.prototype['beginPeriodUtcDate'] = undefined;
  /**
   * The end date period you want to get the report.
   * @member {Date} endPeriodUtcDate
   */
  exports.prototype['endPeriodUtcDate'] = undefined;
  /**
   * @member {module:model/ReportAdvancedFilters} advancedFilters
   */
  exports.prototype['advancedFilters'] = undefined;



  return exports;
}));


