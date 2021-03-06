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
    define(['ApiClient', 'model/ChannelCategoryColumnOverride'], factory);
  } else if (typeof module === 'object' && module.exports) {
    // CommonJS-like environments that support module.exports, like Node.
    module.exports = factory(require('../ApiClient'), require('./ChannelCategoryColumnOverride'));
  } else {
    // Browser globals (root is window)
    if (!root.BeezUpApi) {
      root.BeezUpApi = {};
    }
    root.BeezUpApi.ChannelCategoryColumnOverrides = factory(root.BeezUpApi.ApiClient, root.BeezUpApi.ChannelCategoryColumnOverride);
  }
}(this, function(ApiClient, ChannelCategoryColumnOverride) {
  'use strict';




  /**
   * The ChannelCategoryColumnOverrides model module.
   * @module model/ChannelCategoryColumnOverrides
   * @version 2.0
   */

  /**
   * Constructs a new <code>ChannelCategoryColumnOverrides</code>.
   * The channel category column overrides
   * @alias module:model/ChannelCategoryColumnOverrides
   * @class
   * @extends Object
   */
  var exports = function() {
    var _this = this;

    return _this;
  };

  /**
   * Constructs a <code>ChannelCategoryColumnOverrides</code> from a plain JavaScript object, optionally creating a new instance.
   * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
   * @param {Object} data The plain JavaScript object bearing properties of interest.
   * @param {module:model/ChannelCategoryColumnOverrides} obj Optional instance to populate.
   * @return {module:model/ChannelCategoryColumnOverrides} The populated <code>ChannelCategoryColumnOverrides</code> instance.
   */
  exports.constructFromObject = function(data, obj) {
    if (data) {
      obj = obj || new exports();
      ApiClient.constructFromObject(data, obj, 'ChannelCategoryColumnOverride');

    }
    return obj;
  }




  return exports;
}));


