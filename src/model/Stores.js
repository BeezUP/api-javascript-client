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
    define(['ApiClient', 'model/StoreHeader', 'model/StoresLinks'], factory);
  } else if (typeof module === 'object' && module.exports) {
    // CommonJS-like environments that support module.exports, like Node.
    module.exports = factory(require('../ApiClient'), require('./StoreHeader'), require('./StoresLinks'));
  } else {
    // Browser globals (root is window)
    if (!root.BeezUpApi) {
      root.BeezUpApi = {};
    }
    root.BeezUpApi.Stores = factory(root.BeezUpApi.ApiClient, root.BeezUpApi.StoreHeader, root.BeezUpApi.StoresLinks);
  }
}(this, function(ApiClient, StoreHeader, StoresLinks) {
  'use strict';




  /**
   * The Stores model module.
   * @module model/Stores
   * @version 2.0
   */

  /**
   * Constructs a new <code>Stores</code>.
   * @alias module:model/Stores
   * @class
   * @param storeList {Array.<module:model/StoreHeader>} 
   */
  var exports = function(storeList) {
    var _this = this;


    _this['storeList'] = storeList;
  };

  /**
   * Constructs a <code>Stores</code> from a plain JavaScript object, optionally creating a new instance.
   * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
   * @param {Object} data The plain JavaScript object bearing properties of interest.
   * @param {module:model/Stores} obj Optional instance to populate.
   * @return {module:model/Stores} The populated <code>Stores</code> instance.
   */
  exports.constructFromObject = function(data, obj) {
    if (data) {
      obj = obj || new exports();

      if (data.hasOwnProperty('links')) {
        obj['links'] = StoresLinks.constructFromObject(data['links']);
      }
      if (data.hasOwnProperty('storeList')) {
        obj['storeList'] = ApiClient.convertToType(data['storeList'], [StoreHeader]);
      }
    }
    return obj;
  }

  /**
   * @member {module:model/StoresLinks} links
   */
  exports.prototype['links'] = undefined;
  /**
   * @member {Array.<module:model/StoreHeader>} storeList
   */
  exports.prototype['storeList'] = undefined;



  return exports;
}));

