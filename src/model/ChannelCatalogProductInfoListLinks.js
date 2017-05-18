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
    define(['ApiClient', 'model/LinksGetChannelCatalogProductInfoLink'], factory);
  } else if (typeof module === 'object' && module.exports) {
    // CommonJS-like environments that support module.exports, like Node.
    module.exports = factory(require('../ApiClient'), require('./LinksGetChannelCatalogProductInfoLink'));
  } else {
    // Browser globals (root is window)
    if (!root.BeezUpApi) {
      root.BeezUpApi = {};
    }
    root.BeezUpApi.ChannelCatalogProductInfoListLinks = factory(root.BeezUpApi.ApiClient, root.BeezUpApi.LinksGetChannelCatalogProductInfoLink);
  }
}(this, function(ApiClient, LinksGetChannelCatalogProductInfoLink) {
  'use strict';




  /**
   * The ChannelCatalogProductInfoListLinks model module.
   * @module model/ChannelCatalogProductInfoListLinks
   * @version 2.0
   */

  /**
   * Constructs a new <code>ChannelCatalogProductInfoListLinks</code>.
   * @alias module:model/ChannelCatalogProductInfoListLinks
   * @class
   */
  var exports = function() {
    var _this = this;


  };

  /**
   * Constructs a <code>ChannelCatalogProductInfoListLinks</code> from a plain JavaScript object, optionally creating a new instance.
   * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
   * @param {Object} data The plain JavaScript object bearing properties of interest.
   * @param {module:model/ChannelCatalogProductInfoListLinks} obj Optional instance to populate.
   * @return {module:model/ChannelCatalogProductInfoListLinks} The populated <code>ChannelCatalogProductInfoListLinks</code> instance.
   */
  exports.constructFromObject = function(data, obj) {
    if (data) {
      obj = obj || new exports();

      if (data.hasOwnProperty('self')) {
        obj['self'] = LinksGetChannelCatalogProductInfoLink.constructFromObject(data['self']);
      }
    }
    return obj;
  }

  /**
   * @member {module:model/LinksGetChannelCatalogProductInfoLink} self
   */
  exports.prototype['self'] = undefined;



  return exports;
}));


