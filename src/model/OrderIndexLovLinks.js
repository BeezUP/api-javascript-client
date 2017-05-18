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
    define(['ApiClient', 'model/BeezUPCommonLOVLink3'], factory);
  } else if (typeof module === 'object' && module.exports) {
    // CommonJS-like environments that support module.exports, like Node.
    module.exports = factory(require('../ApiClient'), require('./BeezUPCommonLOVLink3'));
  } else {
    // Browser globals (root is window)
    if (!root.BeezUpApi) {
      root.BeezUpApi = {};
    }
    root.BeezUpApi.OrderIndexLovLinks = factory(root.BeezUpApi.ApiClient, root.BeezUpApi.BeezUPCommonLOVLink3);
  }
}(this, function(ApiClient, BeezUPCommonLOVLink3) {
  'use strict';




  /**
   * The OrderIndexLovLinks model module.
   * @module model/OrderIndexLovLinks
   * @version 2.0
   */

  /**
   * Constructs a new <code>OrderIndexLovLinks</code>.
   * Gives you all the LOV to get the translations realated to operation name, codes, property names and statuses.
   * @alias module:model/OrderIndexLovLinks
   * @class
   * @param orderChangeBusinessOperationType {module:model/BeezUPCommonLOVLink3} 
   * @param orderState {module:model/BeezUPCommonLOVLink3} 
   * @param orderProperty {module:model/BeezUPCommonLOVLink3} 
   * @param orderPropertyPosted {module:model/BeezUPCommonLOVLink3} 
   */
  var exports = function(orderChangeBusinessOperationType, orderState, orderProperty, orderPropertyPosted) {
    var _this = this;

    _this['orderChangeBusinessOperationType'] = orderChangeBusinessOperationType;
    _this['orderState'] = orderState;
    _this['orderProperty'] = orderProperty;
    _this['orderPropertyPosted'] = orderPropertyPosted;
  };

  /**
   * Constructs a <code>OrderIndexLovLinks</code> from a plain JavaScript object, optionally creating a new instance.
   * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
   * @param {Object} data The plain JavaScript object bearing properties of interest.
   * @param {module:model/OrderIndexLovLinks} obj Optional instance to populate.
   * @return {module:model/OrderIndexLovLinks} The populated <code>OrderIndexLovLinks</code> instance.
   */
  exports.constructFromObject = function(data, obj) {
    if (data) {
      obj = obj || new exports();

      if (data.hasOwnProperty('orderChangeBusinessOperationType')) {
        obj['orderChangeBusinessOperationType'] = BeezUPCommonLOVLink3.constructFromObject(data['orderChangeBusinessOperationType']);
      }
      if (data.hasOwnProperty('orderState')) {
        obj['orderState'] = BeezUPCommonLOVLink3.constructFromObject(data['orderState']);
      }
      if (data.hasOwnProperty('orderProperty')) {
        obj['orderProperty'] = BeezUPCommonLOVLink3.constructFromObject(data['orderProperty']);
      }
      if (data.hasOwnProperty('orderPropertyPosted')) {
        obj['orderPropertyPosted'] = BeezUPCommonLOVLink3.constructFromObject(data['orderPropertyPosted']);
      }
    }
    return obj;
  }

  /**
   * @member {module:model/BeezUPCommonLOVLink3} orderChangeBusinessOperationType
   */
  exports.prototype['orderChangeBusinessOperationType'] = undefined;
  /**
   * @member {module:model/BeezUPCommonLOVLink3} orderState
   */
  exports.prototype['orderState'] = undefined;
  /**
   * @member {module:model/BeezUPCommonLOVLink3} orderProperty
   */
  exports.prototype['orderProperty'] = undefined;
  /**
   * @member {module:model/BeezUPCommonLOVLink3} orderPropertyPosted
   */
  exports.prototype['orderPropertyPosted'] = undefined;



  return exports;
}));

