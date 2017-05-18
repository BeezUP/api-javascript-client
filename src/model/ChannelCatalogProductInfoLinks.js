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
    define(['ApiClient', 'model/BeezUPCommonLink2'], factory);
  } else if (typeof module === 'object' && module.exports) {
    // CommonJS-like environments that support module.exports, like Node.
    module.exports = factory(require('../ApiClient'), require('./BeezUPCommonLink2'));
  } else {
    // Browser globals (root is window)
    if (!root.BeezUpApi) {
      root.BeezUpApi = {};
    }
    root.BeezUpApi.ChannelCatalogProductInfoLinks = factory(root.BeezUpApi.ApiClient, root.BeezUpApi.BeezUPCommonLink2);
  }
}(this, function(ApiClient, BeezUPCommonLink2) {
  'use strict';




  /**
   * The ChannelCatalogProductInfoLinks model module.
   * @module model/ChannelCatalogProductInfoLinks
   * @version 2.0
   */

  /**
   * Constructs a new <code>ChannelCatalogProductInfoLinks</code>.
   * Indicates the differents actions you can do on a channel product
   * @alias module:model/ChannelCatalogProductInfoLinks
   * @class
   * @param override {module:model/BeezUPCommonLink2} 
   */
  var exports = function(override) {
    var _this = this;

    _this['override'] = override;


  };

  /**
   * Constructs a <code>ChannelCatalogProductInfoLinks</code> from a plain JavaScript object, optionally creating a new instance.
   * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
   * @param {Object} data The plain JavaScript object bearing properties of interest.
   * @param {module:model/ChannelCatalogProductInfoLinks} obj Optional instance to populate.
   * @return {module:model/ChannelCatalogProductInfoLinks} The populated <code>ChannelCatalogProductInfoLinks</code> instance.
   */
  exports.constructFromObject = function(data, obj) {
    if (data) {
      obj = obj || new exports();

      if (data.hasOwnProperty('override')) {
        obj['override'] = BeezUPCommonLink2.constructFromObject(data['override']);
      }
      if (data.hasOwnProperty('disable')) {
        obj['disable'] = BeezUPCommonLink2.constructFromObject(data['disable']);
      }
      if (data.hasOwnProperty('reenable')) {
        obj['reenable'] = BeezUPCommonLink2.constructFromObject(data['reenable']);
      }
    }
    return obj;
  }

  /**
   * @member {module:model/BeezUPCommonLink2} override
   */
  exports.prototype['override'] = undefined;
  /**
   * @member {module:model/BeezUPCommonLink2} disable
   */
  exports.prototype['disable'] = undefined;
  /**
   * @member {module:model/BeezUPCommonLink2} reenable
   */
  exports.prototype['reenable'] = undefined;



  return exports;
}));

