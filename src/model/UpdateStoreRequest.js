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
    define(['ApiClient', 'model/StoreName', 'model/StoreSectors', 'model/StoreUrl'], factory);
  } else if (typeof module === 'object' && module.exports) {
    // CommonJS-like environments that support module.exports, like Node.
    module.exports = factory(require('../ApiClient'), require('./StoreName'), require('./StoreSectors'), require('./StoreUrl'));
  } else {
    // Browser globals (root is window)
    if (!root.BeezUpApi) {
      root.BeezUpApi = {};
    }
    root.BeezUpApi.UpdateStoreRequest = factory(root.BeezUpApi.ApiClient, root.BeezUpApi.StoreName, root.BeezUpApi.StoreSectors, root.BeezUpApi.StoreUrl);
  }
}(this, function(ApiClient, StoreName, StoreSectors, StoreUrl) {
  'use strict';




  /**
   * The UpdateStoreRequest model module.
   * @module model/UpdateStoreRequest
   * @version 2.0
   */

  /**
   * Constructs a new <code>UpdateStoreRequest</code>.
   * @alias module:model/UpdateStoreRequest
   * @class
   * @param name {module:model/StoreName} 
   * @param url {module:model/StoreUrl} 
   * @param sectors {module:model/StoreSectors} 
   */
  var exports = function(name, url, sectors) {
    var _this = this;

    _this['name'] = name;
    _this['url'] = url;
    _this['sectors'] = sectors;
  };

  /**
   * Constructs a <code>UpdateStoreRequest</code> from a plain JavaScript object, optionally creating a new instance.
   * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
   * @param {Object} data The plain JavaScript object bearing properties of interest.
   * @param {module:model/UpdateStoreRequest} obj Optional instance to populate.
   * @return {module:model/UpdateStoreRequest} The populated <code>UpdateStoreRequest</code> instance.
   */
  exports.constructFromObject = function(data, obj) {
    if (data) {
      obj = obj || new exports();

      if (data.hasOwnProperty('name')) {
        obj['name'] = StoreName.constructFromObject(data['name']);
      }
      if (data.hasOwnProperty('url')) {
        obj['url'] = StoreUrl.constructFromObject(data['url']);
      }
      if (data.hasOwnProperty('sectors')) {
        obj['sectors'] = StoreSectors.constructFromObject(data['sectors']);
      }
    }
    return obj;
  }

  /**
   * @member {module:model/StoreName} name
   */
  exports.prototype['name'] = undefined;
  /**
   * @member {module:model/StoreUrl} url
   */
  exports.prototype['url'] = undefined;
  /**
   * @member {module:model/StoreSectors} sectors
   */
  exports.prototype['sectors'] = undefined;



  return exports;
}));

