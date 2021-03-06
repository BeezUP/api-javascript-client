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
    define(['ApiClient', 'model/LinksGetChannelCatalogMarketplaceSettingsLink', 'model/LinksSetChannelCatalogMarketplaceSettingsLink'], factory);
  } else if (typeof module === 'object' && module.exports) {
    // CommonJS-like environments that support module.exports, like Node.
    module.exports = factory(require('../ApiClient'), require('./LinksGetChannelCatalogMarketplaceSettingsLink'), require('./LinksSetChannelCatalogMarketplaceSettingsLink'));
  } else {
    // Browser globals (root is window)
    if (!root.BeezUpApi) {
      root.BeezUpApi = {};
    }
    root.BeezUpApi.ChannelCatalogMarketplaceSettingsLinks = factory(root.BeezUpApi.ApiClient, root.BeezUpApi.LinksGetChannelCatalogMarketplaceSettingsLink, root.BeezUpApi.LinksSetChannelCatalogMarketplaceSettingsLink);
  }
}(this, function(ApiClient, LinksGetChannelCatalogMarketplaceSettingsLink, LinksSetChannelCatalogMarketplaceSettingsLink) {
  'use strict';




  /**
   * The ChannelCatalogMarketplaceSettingsLinks model module.
   * @module model/ChannelCatalogMarketplaceSettingsLinks
   * @version 2.0
   */

  /**
   * Constructs a new <code>ChannelCatalogMarketplaceSettingsLinks</code>.
   * @alias module:model/ChannelCatalogMarketplaceSettingsLinks
   * @class
   * @param self {module:model/LinksGetChannelCatalogMarketplaceSettingsLink} 
   * @param save {module:model/LinksSetChannelCatalogMarketplaceSettingsLink} 
   */
  var exports = function(self, save) {
    var _this = this;

    _this['self'] = self;
    _this['save'] = save;
  };

  /**
   * Constructs a <code>ChannelCatalogMarketplaceSettingsLinks</code> from a plain JavaScript object, optionally creating a new instance.
   * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
   * @param {Object} data The plain JavaScript object bearing properties of interest.
   * @param {module:model/ChannelCatalogMarketplaceSettingsLinks} obj Optional instance to populate.
   * @return {module:model/ChannelCatalogMarketplaceSettingsLinks} The populated <code>ChannelCatalogMarketplaceSettingsLinks</code> instance.
   */
  exports.constructFromObject = function(data, obj) {
    if (data) {
      obj = obj || new exports();

      if (data.hasOwnProperty('self')) {
        obj['self'] = LinksGetChannelCatalogMarketplaceSettingsLink.constructFromObject(data['self']);
      }
      if (data.hasOwnProperty('save')) {
        obj['save'] = LinksSetChannelCatalogMarketplaceSettingsLink.constructFromObject(data['save']);
      }
    }
    return obj;
  }

  /**
   * @member {module:model/LinksGetChannelCatalogMarketplaceSettingsLink} self
   */
  exports.prototype['self'] = undefined;
  /**
   * @member {module:model/LinksSetChannelCatalogMarketplaceSettingsLink} save
   */
  exports.prototype['save'] = undefined;



  return exports;
}));


