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
    define(['ApiClient', 'model/LinksGetChannelsLink', 'model/PublicChannelIndexLinks'], factory);
  } else if (typeof module === 'object' && module.exports) {
    // CommonJS-like environments that support module.exports, like Node.
    module.exports = factory(require('../ApiClient'), require('./LinksGetChannelsLink'), require('./PublicChannelIndexLinks'));
  } else {
    // Browser globals (root is window)
    if (!root.BeezUpApi) {
      root.BeezUpApi = {};
    }
    root.BeezUpApi.PublicChannelIndex = factory(root.BeezUpApi.ApiClient, root.BeezUpApi.LinksGetChannelsLink, root.BeezUpApi.PublicChannelIndexLinks);
  }
}(this, function(ApiClient, LinksGetChannelsLink, PublicChannelIndexLinks) {
  'use strict';




  /**
   * The PublicChannelIndex model module.
   * @module model/PublicChannelIndex
   * @version 2.0
   */

  /**
   * Constructs a new <code>PublicChannelIndex</code>.
   * @alias module:model/PublicChannelIndex
   * @class
   */
  var exports = function() {
    var _this = this;



  };

  /**
   * Constructs a <code>PublicChannelIndex</code> from a plain JavaScript object, optionally creating a new instance.
   * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
   * @param {Object} data The plain JavaScript object bearing properties of interest.
   * @param {module:model/PublicChannelIndex} obj Optional instance to populate.
   * @return {module:model/PublicChannelIndex} The populated <code>PublicChannelIndex</code> instance.
   */
  exports.constructFromObject = function(data, obj) {
    if (data) {
      obj = obj || new exports();

      if (data.hasOwnProperty('channels')) {
        obj['channels'] = ApiClient.convertToType(data['channels'], {'String': LinksGetChannelsLink});
      }
      if (data.hasOwnProperty('links')) {
        obj['links'] = PublicChannelIndexLinks.constructFromObject(data['links']);
      }
    }
    return obj;
  }

  /**
   * The key is the country iso code
   * @member {Object.<String, module:model/LinksGetChannelsLink>} channels
   */
  exports.prototype['channels'] = undefined;
  /**
   * @member {module:model/PublicChannelIndexLinks} links
   */
  exports.prototype['links'] = undefined;



  return exports;
}));


