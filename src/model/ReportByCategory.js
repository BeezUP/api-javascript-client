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
    define(['ApiClient', 'model/BeezUPCommonCatalogCategoryId', 'model/BeezUPCommonCatalogCategoryPath', 'model/ReportByCategoryLinks'], factory);
  } else if (typeof module === 'object' && module.exports) {
    // CommonJS-like environments that support module.exports, like Node.
    module.exports = factory(require('../ApiClient'), require('./BeezUPCommonCatalogCategoryId'), require('./BeezUPCommonCatalogCategoryPath'), require('./ReportByCategoryLinks'));
  } else {
    // Browser globals (root is window)
    if (!root.BeezUpApi) {
      root.BeezUpApi = {};
    }
    root.BeezUpApi.ReportByCategory = factory(root.BeezUpApi.ApiClient, root.BeezUpApi.BeezUPCommonCatalogCategoryId, root.BeezUpApi.BeezUPCommonCatalogCategoryPath, root.BeezUpApi.ReportByCategoryLinks);
  }
}(this, function(ApiClient, BeezUPCommonCatalogCategoryId, BeezUPCommonCatalogCategoryPath, ReportByCategoryLinks) {
  'use strict';




  /**
   * The ReportByCategory model module.
   * @module model/ReportByCategory
   * @version 2.0
   */

  /**
   * Constructs a new <code>ReportByCategory</code>.
   * @alias module:model/ReportByCategory
   * @class
   * @param catalogCategoryId {module:model/BeezUPCommonCatalogCategoryId} 
   * @param enabledProductCount {Number} The enabled product count for this category
   * @param catalogProductCount {Number} The catalog product count related to this category
   * @param clickCount {Number} The click count for this category
   * @param cost {Number} The cost for this category
   * @param orderCount {Number} The order count for this category
   * @param turnOver {Number} The Turnover for this category
   * @param margin {Number} The margin for this category
   * @param performanceIndicator {Number} The performance indicator based on the performance indicator formula indicated in the request for this category
   */
  var exports = function(catalogCategoryId, enabledProductCount, catalogProductCount, clickCount, cost, orderCount, turnOver, margin, performanceIndicator) {
    var _this = this;

    _this['catalogCategoryId'] = catalogCategoryId;

    _this['enabledProductCount'] = enabledProductCount;
    _this['catalogProductCount'] = catalogProductCount;
    _this['clickCount'] = clickCount;
    _this['cost'] = cost;
    _this['orderCount'] = orderCount;
    _this['turnOver'] = turnOver;
    _this['margin'] = margin;
    _this['performanceIndicator'] = performanceIndicator;

  };

  /**
   * Constructs a <code>ReportByCategory</code> from a plain JavaScript object, optionally creating a new instance.
   * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
   * @param {Object} data The plain JavaScript object bearing properties of interest.
   * @param {module:model/ReportByCategory} obj Optional instance to populate.
   * @return {module:model/ReportByCategory} The populated <code>ReportByCategory</code> instance.
   */
  exports.constructFromObject = function(data, obj) {
    if (data) {
      obj = obj || new exports();

      if (data.hasOwnProperty('catalogCategoryId')) {
        obj['catalogCategoryId'] = BeezUPCommonCatalogCategoryId.constructFromObject(data['catalogCategoryId']);
      }
      if (data.hasOwnProperty('catalogCategoryPath')) {
        obj['catalogCategoryPath'] = BeezUPCommonCatalogCategoryPath.constructFromObject(data['catalogCategoryPath']);
      }
      if (data.hasOwnProperty('enabledProductCount')) {
        obj['enabledProductCount'] = ApiClient.convertToType(data['enabledProductCount'], 'Number');
      }
      if (data.hasOwnProperty('catalogProductCount')) {
        obj['catalogProductCount'] = ApiClient.convertToType(data['catalogProductCount'], 'Number');
      }
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
      if (data.hasOwnProperty('links')) {
        obj['links'] = ReportByCategoryLinks.constructFromObject(data['links']);
      }
    }
    return obj;
  }

  /**
   * @member {module:model/BeezUPCommonCatalogCategoryId} catalogCategoryId
   */
  exports.prototype['catalogCategoryId'] = undefined;
  /**
   * @member {module:model/BeezUPCommonCatalogCategoryPath} catalogCategoryPath
   */
  exports.prototype['catalogCategoryPath'] = undefined;
  /**
   * The enabled product count for this category
   * @member {Number} enabledProductCount
   */
  exports.prototype['enabledProductCount'] = undefined;
  /**
   * The catalog product count related to this category
   * @member {Number} catalogProductCount
   */
  exports.prototype['catalogProductCount'] = undefined;
  /**
   * The click count for this category
   * @member {Number} clickCount
   */
  exports.prototype['clickCount'] = undefined;
  /**
   * The cost for this category
   * @member {Number} cost
   */
  exports.prototype['cost'] = undefined;
  /**
   * The order count for this category
   * @member {Number} orderCount
   */
  exports.prototype['orderCount'] = undefined;
  /**
   * The Turnover for this category
   * @member {Number} turnOver
   */
  exports.prototype['turnOver'] = undefined;
  /**
   * The margin for this category
   * @member {Number} margin
   */
  exports.prototype['margin'] = undefined;
  /**
   * The performance indicator based on the performance indicator formula indicated in the request for this category
   * @member {Number} performanceIndicator
   */
  exports.prototype['performanceIndicator'] = undefined;
  /**
   * @member {module:model/ReportByCategoryLinks} links
   */
  exports.prototype['links'] = undefined;



  return exports;
}));

