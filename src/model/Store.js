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
    define(['ApiClient', 'model/StoreCountryIsoCodeAlpha3', 'model/StoreName', 'model/StoreSectors', 'model/StoreUrl'], factory);
  } else if (typeof module === 'object' && module.exports) {
    // CommonJS-like environments that support module.exports, like Node.
    module.exports = factory(require('../ApiClient'), require('./StoreCountryIsoCodeAlpha3'), require('./StoreName'), require('./StoreSectors'), require('./StoreUrl'));
  } else {
    // Browser globals (root is window)
    if (!root.BeezUpApi) {
      root.BeezUpApi = {};
    }
    root.BeezUpApi.Store = factory(root.BeezUpApi.ApiClient, root.BeezUpApi.StoreCountryIsoCodeAlpha3, root.BeezUpApi.StoreName, root.BeezUpApi.StoreSectors, root.BeezUpApi.StoreUrl);
  }
}(this, function(ApiClient, StoreCountryIsoCodeAlpha3, StoreName, StoreSectors, StoreUrl) {
  'use strict';




  /**
   * The Store model module.
   * @module model/Store
   * @version 2.0
   */

  /**
   * Constructs a new <code>Store</code>.
   * @alias module:model/Store
   * @class
   * @param name {module:model/StoreName} 
   * @param url {module:model/StoreUrl} 
   * @param countryIsoCodeAlpha3 {module:model/StoreCountryIsoCodeAlpha3} 
   * @param sectors {module:model/StoreSectors} 
   */
  var exports = function(name, url, countryIsoCodeAlpha3, sectors) {
    var _this = this;

    _this['name'] = name;
    _this['url'] = url;
    _this['countryIsoCodeAlpha3'] = countryIsoCodeAlpha3;
    _this['sectors'] = sectors;
  };

  /**
   * Constructs a <code>Store</code> from a plain JavaScript object, optionally creating a new instance.
   * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
   * @param {Object} data The plain JavaScript object bearing properties of interest.
   * @param {module:model/Store} obj Optional instance to populate.
   * @return {module:model/Store} The populated <code>Store</code> instance.
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
      if (data.hasOwnProperty('countryIsoCodeAlpha3')) {
        obj['countryIsoCodeAlpha3'] = StoreCountryIsoCodeAlpha3.constructFromObject(data['countryIsoCodeAlpha3']);
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
   * @member {module:model/StoreCountryIsoCodeAlpha3} countryIsoCodeAlpha3
   */
  exports.prototype['countryIsoCodeAlpha3'] = undefined;
  /**
   * @member {module:model/StoreSectors} sectors
   */
  exports.prototype['sectors'] = undefined;



  return exports;
}));


