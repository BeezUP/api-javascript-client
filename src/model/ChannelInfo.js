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
    root.BeezUpApi.ChannelInfo = factory(root.BeezUpApi.ApiClient);
  }
}(this, function(ApiClient) {
  'use strict';




  /**
   * The ChannelInfo model module.
   * @module model/ChannelInfo
   * @version 2.0
   */

  /**
   * Constructs a new <code>ChannelInfo</code>.
   * @alias module:model/ChannelInfo
   * @class
   * @param name {String} The channel name
   * @param homeUrl {String} The channel home url
   * @param logoUrl {String} The channel logo url
   * @param types {Array.<String>} The type list related to a channel
   */
  var exports = function(name, homeUrl, logoUrl, types) {
    var _this = this;

    _this['name'] = name;
    _this['homeUrl'] = homeUrl;
    _this['logoUrl'] = logoUrl;
    _this['types'] = types;
  };

  /**
   * Constructs a <code>ChannelInfo</code> from a plain JavaScript object, optionally creating a new instance.
   * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
   * @param {Object} data The plain JavaScript object bearing properties of interest.
   * @param {module:model/ChannelInfo} obj Optional instance to populate.
   * @return {module:model/ChannelInfo} The populated <code>ChannelInfo</code> instance.
   */
  exports.constructFromObject = function(data, obj) {
    if (data) {
      obj = obj || new exports();

      if (data.hasOwnProperty('name')) {
        obj['name'] = ApiClient.convertToType(data['name'], 'String');
      }
      if (data.hasOwnProperty('homeUrl')) {
        obj['homeUrl'] = ApiClient.convertToType(data['homeUrl'], 'String');
      }
      if (data.hasOwnProperty('logoUrl')) {
        obj['logoUrl'] = ApiClient.convertToType(data['logoUrl'], 'String');
      }
      if (data.hasOwnProperty('types')) {
        obj['types'] = ApiClient.convertToType(data['types'], ['String']);
      }
    }
    return obj;
  }

  /**
   * The channel name
   * @member {String} name
   */
  exports.prototype['name'] = undefined;
  /**
   * The channel home url
   * @member {String} homeUrl
   */
  exports.prototype['homeUrl'] = undefined;
  /**
   * The channel logo url
   * @member {String} logoUrl
   */
  exports.prototype['logoUrl'] = undefined;
  /**
   * The type list related to a channel
   * @member {Array.<String>} types
   */
  exports.prototype['types'] = undefined;



  return exports;
}));


