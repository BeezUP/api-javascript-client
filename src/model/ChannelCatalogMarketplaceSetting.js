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
    root.BeezUpApi.ChannelCatalogMarketplaceSetting = factory(root.BeezUpApi.ApiClient);
  }
}(this, function(ApiClient) {
  'use strict';




  /**
   * The ChannelCatalogMarketplaceSetting model module.
   * @module model/ChannelCatalogMarketplaceSetting
   * @version 2.0
   */

  /**
   * Constructs a new <code>ChannelCatalogMarketplaceSetting</code>.
   * Model for fetching a channel catalog marketplace setting
   * @alias module:model/ChannelCatalogMarketplaceSetting
   * @class
   * @param name {String} Channel catalog marketplace property name
   */
  var exports = function(name) {
    var _this = this;

    _this['name'] = name;

  };

  /**
   * Constructs a <code>ChannelCatalogMarketplaceSetting</code> from a plain JavaScript object, optionally creating a new instance.
   * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
   * @param {Object} data The plain JavaScript object bearing properties of interest.
   * @param {module:model/ChannelCatalogMarketplaceSetting} obj Optional instance to populate.
   * @return {module:model/ChannelCatalogMarketplaceSetting} The populated <code>ChannelCatalogMarketplaceSetting</code> instance.
   */
  exports.constructFromObject = function(data, obj) {
    if (data) {
      obj = obj || new exports();

      if (data.hasOwnProperty('name')) {
        obj['name'] = ApiClient.convertToType(data['name'], 'String');
      }
      if (data.hasOwnProperty('values')) {
        obj['values'] = ApiClient.convertToType(data['values'], ['String']);
      }
    }
    return obj;
  }

  /**
   * Channel catalog marketplace property name
   * @member {String} name
   */
  exports.prototype['name'] = undefined;
  /**
   * Channel catalog marketplace property values
   * @member {Array.<String>} values
   */
  exports.prototype['values'] = undefined;



  return exports;
}));

