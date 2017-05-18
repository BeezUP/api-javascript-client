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
    define(['ApiClient', 'model/LinksShareLink'], factory);
  } else if (typeof module === 'object' && module.exports) {
    // CommonJS-like environments that support module.exports, like Node.
    module.exports = factory(require('../ApiClient'), require('./LinksShareLink'));
  } else {
    // Browser globals (root is window)
    if (!root.BeezUpApi) {
      root.BeezUpApi = {};
    }
    root.BeezUpApi.StoreSharesLinks = factory(root.BeezUpApi.ApiClient, root.BeezUpApi.LinksShareLink);
  }
}(this, function(ApiClient, LinksShareLink) {
  'use strict';




  /**
   * The StoreSharesLinks model module.
   * @module model/StoreSharesLinks
   * @version 2.0
   */

  /**
   * Constructs a new <code>StoreSharesLinks</code>.
   * @alias module:model/StoreSharesLinks
   * @class
   * @param share {module:model/LinksShareLink} 
   */
  var exports = function(share) {
    var _this = this;

    _this['share'] = share;
  };

  /**
   * Constructs a <code>StoreSharesLinks</code> from a plain JavaScript object, optionally creating a new instance.
   * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
   * @param {Object} data The plain JavaScript object bearing properties of interest.
   * @param {module:model/StoreSharesLinks} obj Optional instance to populate.
   * @return {module:model/StoreSharesLinks} The populated <code>StoreSharesLinks</code> instance.
   */
  exports.constructFromObject = function(data, obj) {
    if (data) {
      obj = obj || new exports();

      if (data.hasOwnProperty('share')) {
        obj['share'] = LinksShareLink.constructFromObject(data['share']);
      }
    }
    return obj;
  }

  /**
   * @member {module:model/LinksShareLink} share
   */
  exports.prototype['share'] = undefined;



  return exports;
}));


