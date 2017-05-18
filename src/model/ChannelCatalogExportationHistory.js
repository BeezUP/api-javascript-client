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
    define(['ApiClient', 'model/BeezUPCommonPaginationResult', 'model/ChannelCatalogExportationHistoryLinks', 'model/ChannelCatalogExportationReporting'], factory);
  } else if (typeof module === 'object' && module.exports) {
    // CommonJS-like environments that support module.exports, like Node.
    module.exports = factory(require('../ApiClient'), require('./BeezUPCommonPaginationResult'), require('./ChannelCatalogExportationHistoryLinks'), require('./ChannelCatalogExportationReporting'));
  } else {
    // Browser globals (root is window)
    if (!root.BeezUpApi) {
      root.BeezUpApi = {};
    }
    root.BeezUpApi.ChannelCatalogExportationHistory = factory(root.BeezUpApi.ApiClient, root.BeezUpApi.BeezUPCommonPaginationResult, root.BeezUpApi.ChannelCatalogExportationHistoryLinks, root.BeezUpApi.ChannelCatalogExportationReporting);
  }
}(this, function(ApiClient, BeezUPCommonPaginationResult, ChannelCatalogExportationHistoryLinks, ChannelCatalogExportationReporting) {
  'use strict';




  /**
   * The ChannelCatalogExportationHistory model module.
   * @module model/ChannelCatalogExportationHistory
   * @version 2.0
   */

  /**
   * Constructs a new <code>ChannelCatalogExportationHistory</code>.
   * @alias module:model/ChannelCatalogExportationHistory
   * @class
   * @param exportations {Array.<module:model/ChannelCatalogExportationReporting>} 
   * @param links {module:model/ChannelCatalogExportationHistoryLinks} 
   */
  var exports = function(exportations, links) {
    var _this = this;


    _this['exportations'] = exportations;
    _this['links'] = links;
  };

  /**
   * Constructs a <code>ChannelCatalogExportationHistory</code> from a plain JavaScript object, optionally creating a new instance.
   * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
   * @param {Object} data The plain JavaScript object bearing properties of interest.
   * @param {module:model/ChannelCatalogExportationHistory} obj Optional instance to populate.
   * @return {module:model/ChannelCatalogExportationHistory} The populated <code>ChannelCatalogExportationHistory</code> instance.
   */
  exports.constructFromObject = function(data, obj) {
    if (data) {
      obj = obj || new exports();

      if (data.hasOwnProperty('paginationResult')) {
        obj['paginationResult'] = BeezUPCommonPaginationResult.constructFromObject(data['paginationResult']);
      }
      if (data.hasOwnProperty('exportations')) {
        obj['exportations'] = ApiClient.convertToType(data['exportations'], [ChannelCatalogExportationReporting]);
      }
      if (data.hasOwnProperty('links')) {
        obj['links'] = ChannelCatalogExportationHistoryLinks.constructFromObject(data['links']);
      }
    }
    return obj;
  }

  /**
   * @member {module:model/BeezUPCommonPaginationResult} paginationResult
   */
  exports.prototype['paginationResult'] = undefined;
  /**
   * @member {Array.<module:model/ChannelCatalogExportationReporting>} exportations
   */
  exports.prototype['exportations'] = undefined;
  /**
   * @member {module:model/ChannelCatalogExportationHistoryLinks} links
   */
  exports.prototype['links'] = undefined;



  return exports;
}));

