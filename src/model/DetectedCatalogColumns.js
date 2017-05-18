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
    define(['ApiClient', 'model/DetectedCatalogColumn'], factory);
  } else if (typeof module === 'object' && module.exports) {
    // CommonJS-like environments that support module.exports, like Node.
    module.exports = factory(require('../ApiClient'), require('./DetectedCatalogColumn'));
  } else {
    // Browser globals (root is window)
    if (!root.BeezUpApi) {
      root.BeezUpApi = {};
    }
    root.BeezUpApi.DetectedCatalogColumns = factory(root.BeezUpApi.ApiClient, root.BeezUpApi.DetectedCatalogColumn);
  }
}(this, function(ApiClient, DetectedCatalogColumn) {
  'use strict';




  /**
   * The DetectedCatalogColumns model module.
   * @module model/DetectedCatalogColumns
   * @version 2.0
   */

  /**
   * Constructs a new <code>DetectedCatalogColumns</code>.
   * The list of detected catalog column
   * @alias module:model/DetectedCatalogColumns
   * @class
   */
  var exports = function() {
    var _this = this;


  };

  /**
   * Constructs a <code>DetectedCatalogColumns</code> from a plain JavaScript object, optionally creating a new instance.
   * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
   * @param {Object} data The plain JavaScript object bearing properties of interest.
   * @param {module:model/DetectedCatalogColumns} obj Optional instance to populate.
   * @return {module:model/DetectedCatalogColumns} The populated <code>DetectedCatalogColumns</code> instance.
   */
  exports.constructFromObject = function(data, obj) {
    if (data) {
      obj = obj || new exports();

      if (data.hasOwnProperty('detectedCatalogColumns')) {
        obj['detectedCatalogColumns'] = ApiClient.convertToType(data['detectedCatalogColumns'], [DetectedCatalogColumn]);
      }
    }
    return obj;
  }

  /**
   * Contains all deteted catalog columns
   * @member {Array.<module:model/DetectedCatalogColumn>} detectedCatalogColumns
   */
  exports.prototype['detectedCatalogColumns'] = undefined;



  return exports;
}));


