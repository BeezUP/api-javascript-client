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
    define(['ApiClient', 'model/BeezUPCommonChannelId', 'model/PageNumber', 'model/PageSize', 'model/PaginationRequestParameters', 'model/ReportAdvancedFilters', 'model/ReportCategoryFilter', 'model/ReportFilterCommonParameters', 'model/ReportIndicatorFilter'], factory);
  } else if (typeof module === 'object' && module.exports) {
    // CommonJS-like environments that support module.exports, like Node.
    module.exports = factory(require('../ApiClient'), require('./BeezUPCommonChannelId'), require('./PageNumber'), require('./PageSize'), require('./PaginationRequestParameters'), require('./ReportAdvancedFilters'), require('./ReportCategoryFilter'), require('./ReportFilterCommonParameters'), require('./ReportIndicatorFilter'));
  } else {
    // Browser globals (root is window)
    if (!root.BeezUpApi) {
      root.BeezUpApi = {};
    }
    root.BeezUpApi.ReportByCategoryRequest = factory(root.BeezUpApi.ApiClient, root.BeezUpApi.BeezUPCommonChannelId, root.BeezUpApi.PageNumber, root.BeezUpApi.PageSize, root.BeezUpApi.PaginationRequestParameters, root.BeezUpApi.ReportAdvancedFilters, root.BeezUpApi.ReportCategoryFilter, root.BeezUpApi.ReportFilterCommonParameters, root.BeezUpApi.ReportIndicatorFilter);
  }
}(this, function(ApiClient, BeezUPCommonChannelId, PageNumber, PageSize, PaginationRequestParameters, ReportAdvancedFilters, ReportCategoryFilter, ReportFilterCommonParameters, ReportIndicatorFilter) {
  'use strict';




  /**
   * The ReportByCategoryRequest model module.
   * @module model/ReportByCategoryRequest
   * @version 2.0
   */

  /**
   * Constructs a new <code>ReportByCategoryRequest</code>.
   * @alias module:model/ReportByCategoryRequest
   * @class
   * @implements module:model/ReportFilterCommonParameters
   * @implements module:model/PaginationRequestParameters
   * @param beginPeriodUtcDate {Date} The begin date period you want to get the report
   * @param endPeriodUtcDate {Date} The end date period you want to get the report.
   * @param advancedFilters {module:model/ReportAdvancedFilters} 
   */
  var exports = function(beginPeriodUtcDate, endPeriodUtcDate, advancedFilters) {
    var _this = this;

    ReportFilterCommonParameters.call(_this, beginPeriodUtcDate, endPeriodUtcDate, advancedFilters);
    PaginationRequestParameters.call(_this);
  };

  /**
   * Constructs a <code>ReportByCategoryRequest</code> from a plain JavaScript object, optionally creating a new instance.
   * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
   * @param {Object} data The plain JavaScript object bearing properties of interest.
   * @param {module:model/ReportByCategoryRequest} obj Optional instance to populate.
   * @return {module:model/ReportByCategoryRequest} The populated <code>ReportByCategoryRequest</code> instance.
   */
  exports.constructFromObject = function(data, obj) {
    if (data) {
      obj = obj || new exports();

      ReportFilterCommonParameters.constructFromObject(data, obj);
      PaginationRequestParameters.constructFromObject(data, obj);
    }
    return obj;
  }


  // Implement ReportFilterCommonParameters interface:
  /**
   * @member {module:model/BeezUPCommonChannelId} channelId
   */
exports.prototype['channelId'] = undefined;

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
   * @member {module:model/ReportCategoryFilter} categoryFilter
   */
exports.prototype['categoryFilter'] = undefined;

  /**
   * @member {Array.<module:model/ReportIndicatorFilter>} indicatorFilters
   */
exports.prototype['indicatorFilters'] = undefined;

  /**
   * @member {module:model/ReportAdvancedFilters} advancedFilters
   */
exports.prototype['advancedFilters'] = undefined;

  // Implement PaginationRequestParameters interface:
  /**
   * @member {module:model/PageSize} pageSize
   */
exports.prototype['pageSize'] = undefined;

  /**
   * @member {module:model/PageNumber} pageNumber
   */
exports.prototype['pageNumber'] = undefined;



  return exports;
}));


