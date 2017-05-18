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
    root.BeezUpApi.GetChannelCatalogProductInfoListRequest = factory(root.BeezUpApi.ApiClient);
  }
}(this, function(ApiClient) {
  'use strict';




  /**
   * The GetChannelCatalogProductInfoListRequest model module.
   * @module model/GetChannelCatalogProductInfoListRequest
   * @version 2.0
   */

  /**
   * Constructs a new <code>GetChannelCatalogProductInfoListRequest</code>.
   * @alias module:model/GetChannelCatalogProductInfoListRequest
   * @class
   */
  var exports = function() {
    var _this = this;








  };

  /**
   * Constructs a <code>GetChannelCatalogProductInfoListRequest</code> from a plain JavaScript object, optionally creating a new instance.
   * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
   * @param {Object} data The plain JavaScript object bearing properties of interest.
   * @param {module:model/GetChannelCatalogProductInfoListRequest} obj Optional instance to populate.
   * @return {module:model/GetChannelCatalogProductInfoListRequest} The populated <code>GetChannelCatalogProductInfoListRequest</code> instance.
   */
  exports.constructFromObject = function(data, obj) {
    if (data) {
      obj = obj || new exports();

      if (data.hasOwnProperty('sku')) {
        obj['sku'] = ApiClient.convertToType(data['sku'], 'String');
      }
      if (data.hasOwnProperty('title')) {
        obj['title'] = ApiClient.convertToType(data['title'], 'String');
      }
      if (data.hasOwnProperty('overrided')) {
        obj['overrided'] = ApiClient.convertToType(data['overrided'], 'Boolean');
      }
      if (data.hasOwnProperty('disabled')) {
        obj['disabled'] = ApiClient.convertToType(data['disabled'], 'Boolean');
      }
      if (data.hasOwnProperty('categoryMapped')) {
        obj['categoryMapped'] = ApiClient.convertToType(data['categoryMapped'], 'Boolean');
      }
      if (data.hasOwnProperty('excluded')) {
        obj['excluded'] = ApiClient.convertToType(data['excluded'], 'Boolean');
      }
      if (data.hasOwnProperty('active')) {
        obj['active'] = ApiClient.convertToType(data['active'], 'Boolean');
      }
    }
    return obj;
  }

  /**
   * Search by product sku. If null the filter will not be taken in account.
   * @member {String} sku
   */
  exports.prototype['sku'] = undefined;
  /**
   * Search by product title. If null the filter will not be taken in account.
   * @member {String} title
   */
  exports.prototype['title'] = undefined;
  /**
   * Search overrided products. If null the filter will not be taken in account.
   * @member {Boolean} overrided
   */
  exports.prototype['overrided'] = undefined;
  /**
   * Search disabled products. If null the filter will not be taken in account.
   * @member {Boolean} disabled
   */
  exports.prototype['disabled'] = undefined;
  /**
   * Search product with category mapped with the channel. If null the filter will not be taken in account.
   * @member {Boolean} categoryMapped
   */
  exports.prototype['categoryMapped'] = undefined;
  /**
   * Search excluded products by at least an exclusion filter. If null the filter will not be taken in account.
   * @member {Boolean} excluded
   */
  exports.prototype['excluded'] = undefined;
  /**
   * If false, search for product absent from the current catalog. If null the filter will not be taken in account.
   * @member {Boolean} active
   */
  exports.prototype['active'] = undefined;



  return exports;
}));


