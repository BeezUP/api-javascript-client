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
    define(['ApiClient', 'model/LinksGetOrderExportationsLink'], factory);
  } else if (typeof module === 'object' && module.exports) {
    // CommonJS-like environments that support module.exports, like Node.
    module.exports = factory(require('../ApiClient'), require('./LinksGetOrderExportationsLink'));
  } else {
    // Browser globals (root is window)
    if (!root.BeezUpApi) {
      root.BeezUpApi = {};
    }
    root.BeezUpApi.OrderExportationsLinks = factory(root.BeezUpApi.ApiClient, root.BeezUpApi.LinksGetOrderExportationsLink);
  }
}(this, function(ApiClient, LinksGetOrderExportationsLink) {
  'use strict';




  /**
   * The OrderExportationsLinks model module.
   * @module model/OrderExportationsLinks
   * @version 2.0
   */

  /**
   * Constructs a new <code>OrderExportationsLinks</code>.
   * @alias module:model/OrderExportationsLinks
   * @class
   * @param self {module:model/LinksGetOrderExportationsLink} 
   */
  var exports = function(self) {
    var _this = this;

    _this['self'] = self;
  };

  /**
   * Constructs a <code>OrderExportationsLinks</code> from a plain JavaScript object, optionally creating a new instance.
   * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
   * @param {Object} data The plain JavaScript object bearing properties of interest.
   * @param {module:model/OrderExportationsLinks} obj Optional instance to populate.
   * @return {module:model/OrderExportationsLinks} The populated <code>OrderExportationsLinks</code> instance.
   */
  exports.constructFromObject = function(data, obj) {
    if (data) {
      obj = obj || new exports();

      if (data.hasOwnProperty('self')) {
        obj['self'] = LinksGetOrderExportationsLink.constructFromObject(data['self']);
      }
    }
    return obj;
  }

  /**
   * @member {module:model/LinksGetOrderExportationsLink} self
   */
  exports.prototype['self'] = undefined;



  return exports;
}));


