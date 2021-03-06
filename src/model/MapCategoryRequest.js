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
    define(['ApiClient', 'model/ChannelCatalogCategoryMapping'], factory);
  } else if (typeof module === 'object' && module.exports) {
    // CommonJS-like environments that support module.exports, like Node.
    module.exports = factory(require('../ApiClient'), require('./ChannelCatalogCategoryMapping'));
  } else {
    // Browser globals (root is window)
    if (!root.BeezUpApi) {
      root.BeezUpApi = {};
    }
    root.BeezUpApi.MapCategoryRequest = factory(root.BeezUpApi.ApiClient, root.BeezUpApi.ChannelCatalogCategoryMapping);
  }
}(this, function(ApiClient, ChannelCatalogCategoryMapping) {
  'use strict';




  /**
   * The MapCategoryRequest model module.
   * @module model/MapCategoryRequest
   * @version 2.0
   */

  /**
   * Constructs a new <code>MapCategoryRequest</code>.
   * The request message to make a mapping between catalog category path and a channel category path
   * @alias module:model/MapCategoryRequest
   * @class
   * @param overrideSubCategoryMappings {Boolean} Great feature! In case of mapping to parent channel category, you can ask to override the mapping of all sub channel category to this catalog category path
   * @param autoMapNewSubCategories {Boolean} Great feature! In case of mapping to parent catalog category, you can ask to automatically map new sub catalog category in the next importation to this channel category path.
   * @param channelCatalogCategoryMapping {module:model/ChannelCatalogCategoryMapping} 
   */
  var exports = function(overrideSubCategoryMappings, autoMapNewSubCategories, channelCatalogCategoryMapping) {
    var _this = this;

    _this['overrideSubCategoryMappings'] = overrideSubCategoryMappings;
    _this['autoMapNewSubCategories'] = autoMapNewSubCategories;
    _this['channelCatalogCategoryMapping'] = channelCatalogCategoryMapping;
  };

  /**
   * Constructs a <code>MapCategoryRequest</code> from a plain JavaScript object, optionally creating a new instance.
   * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
   * @param {Object} data The plain JavaScript object bearing properties of interest.
   * @param {module:model/MapCategoryRequest} obj Optional instance to populate.
   * @return {module:model/MapCategoryRequest} The populated <code>MapCategoryRequest</code> instance.
   */
  exports.constructFromObject = function(data, obj) {
    if (data) {
      obj = obj || new exports();

      if (data.hasOwnProperty('overrideSubCategoryMappings')) {
        obj['overrideSubCategoryMappings'] = ApiClient.convertToType(data['overrideSubCategoryMappings'], 'Boolean');
      }
      if (data.hasOwnProperty('autoMapNewSubCategories')) {
        obj['autoMapNewSubCategories'] = ApiClient.convertToType(data['autoMapNewSubCategories'], 'Boolean');
      }
      if (data.hasOwnProperty('channelCatalogCategoryMapping')) {
        obj['channelCatalogCategoryMapping'] = ChannelCatalogCategoryMapping.constructFromObject(data['channelCatalogCategoryMapping']);
      }
    }
    return obj;
  }

  /**
   * Great feature! In case of mapping to parent channel category, you can ask to override the mapping of all sub channel category to this catalog category path
   * @member {Boolean} overrideSubCategoryMappings
   */
  exports.prototype['overrideSubCategoryMappings'] = undefined;
  /**
   * Great feature! In case of mapping to parent catalog category, you can ask to automatically map new sub catalog category in the next importation to this channel category path.
   * @member {Boolean} autoMapNewSubCategories
   */
  exports.prototype['autoMapNewSubCategories'] = undefined;
  /**
   * @member {module:model/ChannelCatalogCategoryMapping} channelCatalogCategoryMapping
   */
  exports.prototype['channelCatalogCategoryMapping'] = undefined;



  return exports;
}));


