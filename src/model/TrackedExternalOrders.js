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
    define(['ApiClient', 'model/TrackedExternalOrder'], factory);
  } else if (typeof module === 'object' && module.exports) {
    // CommonJS-like environments that support module.exports, like Node.
    module.exports = factory(require('../ApiClient'), require('./TrackedExternalOrder'));
  } else {
    // Browser globals (root is window)
    if (!root.BeezUpApi) {
      root.BeezUpApi = {};
    }
    root.BeezUpApi.TrackedExternalOrders = factory(root.BeezUpApi.ApiClient, root.BeezUpApi.TrackedExternalOrder);
  }
}(this, function(ApiClient, TrackedExternalOrder) {
  'use strict';




  /**
   * The TrackedExternalOrders model module.
   * @module model/TrackedExternalOrders
   * @version 2.0
   */

  /**
   * Constructs a new <code>TrackedExternalOrders</code>.
   * @alias module:model/TrackedExternalOrders
   * @class
   * @param externalOrders {Array.<module:model/TrackedExternalOrder>} 
   */
  var exports = function(externalOrders) {
    var _this = this;

    _this['externalOrders'] = externalOrders;
  };

  /**
   * Constructs a <code>TrackedExternalOrders</code> from a plain JavaScript object, optionally creating a new instance.
   * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
   * @param {Object} data The plain JavaScript object bearing properties of interest.
   * @param {module:model/TrackedExternalOrders} obj Optional instance to populate.
   * @return {module:model/TrackedExternalOrders} The populated <code>TrackedExternalOrders</code> instance.
   */
  exports.constructFromObject = function(data, obj) {
    if (data) {
      obj = obj || new exports();

      if (data.hasOwnProperty('externalOrders')) {
        obj['externalOrders'] = ApiClient.convertToType(data['externalOrders'], [TrackedExternalOrder]);
      }
    }
    return obj;
  }

  /**
   * @member {Array.<module:model/TrackedExternalOrder>} externalOrders
   */
  exports.prototype['externalOrders'] = undefined;



  return exports;
}));


