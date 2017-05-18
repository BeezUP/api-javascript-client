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
    define(['ApiClient', 'model/MarketplaceChannelCatalog', 'model/MarketplaceChannelCatalogListLinks'], factory);
  } else if (typeof module === 'object' && module.exports) {
    // CommonJS-like environments that support module.exports, like Node.
    module.exports = factory(require('../ApiClient'), require('./MarketplaceChannelCatalog'), require('./MarketplaceChannelCatalogListLinks'));
  } else {
    // Browser globals (root is window)
    if (!root.BeezUpApi) {
      root.BeezUpApi = {};
    }
    root.BeezUpApi.MarketplaceChannelCatalogList = factory(root.BeezUpApi.ApiClient, root.BeezUpApi.MarketplaceChannelCatalog, root.BeezUpApi.MarketplaceChannelCatalogListLinks);
  }
}(this, function(ApiClient, MarketplaceChannelCatalog, MarketplaceChannelCatalogListLinks) {
  'use strict';




  /**
   * The MarketplaceChannelCatalogList model module.
   * @module model/MarketplaceChannelCatalogList
   * @version 2.0
   */

  /**
   * Constructs a new <code>MarketplaceChannelCatalogList</code>.
   * The marketplace channel catalog list
   * @alias module:model/MarketplaceChannelCatalogList
   * @class
   * @param links {module:model/MarketplaceChannelCatalogListLinks} 
   * @param marketplaceChannelCatalogs {Array.<module:model/MarketplaceChannelCatalog>} The list of marketplace channel catalog
   */
  var exports = function(links, marketplaceChannelCatalogs) {
    var _this = this;

    _this['links'] = links;
    _this['marketplaceChannelCatalogs'] = marketplaceChannelCatalogs;
  };

  /**
   * Constructs a <code>MarketplaceChannelCatalogList</code> from a plain JavaScript object, optionally creating a new instance.
   * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
   * @param {Object} data The plain JavaScript object bearing properties of interest.
   * @param {module:model/MarketplaceChannelCatalogList} obj Optional instance to populate.
   * @return {module:model/MarketplaceChannelCatalogList} The populated <code>MarketplaceChannelCatalogList</code> instance.
   */
  exports.constructFromObject = function(data, obj) {
    if (data) {
      obj = obj || new exports();

      if (data.hasOwnProperty('links')) {
        obj['links'] = MarketplaceChannelCatalogListLinks.constructFromObject(data['links']);
      }
      if (data.hasOwnProperty('marketplaceChannelCatalogs')) {
        obj['marketplaceChannelCatalogs'] = ApiClient.convertToType(data['marketplaceChannelCatalogs'], [MarketplaceChannelCatalog]);
      }
    }
    return obj;
  }

  /**
   * @member {module:model/MarketplaceChannelCatalogListLinks} links
   */
  exports.prototype['links'] = undefined;
  /**
   * The list of marketplace channel catalog
   * @member {Array.<module:model/MarketplaceChannelCatalog>} marketplaceChannelCatalogs
   */
  exports.prototype['marketplaceChannelCatalogs'] = undefined;



  return exports;
}));

