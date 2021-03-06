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
    define(['ApiClient', 'model/BeezUPCommonPaginationResult', 'model/ReportByProduct', 'model/ReportByProductResponseLinks'], factory);
  } else if (typeof module === 'object' && module.exports) {
    // CommonJS-like environments that support module.exports, like Node.
    module.exports = factory(require('../ApiClient'), require('./BeezUPCommonPaginationResult'), require('./ReportByProduct'), require('./ReportByProductResponseLinks'));
  } else {
    // Browser globals (root is window)
    if (!root.BeezUpApi) {
      root.BeezUpApi = {};
    }
    root.BeezUpApi.ReportByProductResponse = factory(root.BeezUpApi.ApiClient, root.BeezUpApi.BeezUPCommonPaginationResult, root.BeezUpApi.ReportByProduct, root.BeezUpApi.ReportByProductResponseLinks);
  }
}(this, function(ApiClient, BeezUPCommonPaginationResult, ReportByProduct, ReportByProductResponseLinks) {
  'use strict';




  /**
   * The ReportByProductResponse model module.
   * @module model/ReportByProductResponse
   * @version 2.0
   */

  /**
   * Constructs a new <code>ReportByProductResponse</code>.
   * @alias module:model/ReportByProductResponse
   * @class
   * @param paginationResult {module:model/BeezUPCommonPaginationResult} 
   * @param products {Array.<module:model/ReportByProduct>} 
   * @param links {module:model/ReportByProductResponseLinks} 
   */
  var exports = function(paginationResult, products, links) {
    var _this = this;

    _this['paginationResult'] = paginationResult;
    _this['products'] = products;
    _this['links'] = links;
  };

  /**
   * Constructs a <code>ReportByProductResponse</code> from a plain JavaScript object, optionally creating a new instance.
   * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
   * @param {Object} data The plain JavaScript object bearing properties of interest.
   * @param {module:model/ReportByProductResponse} obj Optional instance to populate.
   * @return {module:model/ReportByProductResponse} The populated <code>ReportByProductResponse</code> instance.
   */
  exports.constructFromObject = function(data, obj) {
    if (data) {
      obj = obj || new exports();

      if (data.hasOwnProperty('paginationResult')) {
        obj['paginationResult'] = BeezUPCommonPaginationResult.constructFromObject(data['paginationResult']);
      }
      if (data.hasOwnProperty('products')) {
        obj['products'] = ApiClient.convertToType(data['products'], [ReportByProduct]);
      }
      if (data.hasOwnProperty('links')) {
        obj['links'] = ReportByProductResponseLinks.constructFromObject(data['links']);
      }
    }
    return obj;
  }

  /**
   * @member {module:model/BeezUPCommonPaginationResult} paginationResult
   */
  exports.prototype['paginationResult'] = undefined;
  /**
   * @member {Array.<module:model/ReportByProduct>} products
   */
  exports.prototype['products'] = undefined;
  /**
   * @member {module:model/ReportByProductResponseLinks} links
   */
  exports.prototype['links'] = undefined;



  return exports;
}));


