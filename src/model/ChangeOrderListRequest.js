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
    define(['ApiClient', 'model/ChangeOrderListRequestItem'], factory);
  } else if (typeof module === 'object' && module.exports) {
    // CommonJS-like environments that support module.exports, like Node.
    module.exports = factory(require('../ApiClient'), require('./ChangeOrderListRequestItem'));
  } else {
    // Browser globals (root is window)
    if (!root.BeezUpApi) {
      root.BeezUpApi = {};
    }
    root.BeezUpApi.ChangeOrderListRequest = factory(root.BeezUpApi.ApiClient, root.BeezUpApi.ChangeOrderListRequestItem);
  }
}(this, function(ApiClient, ChangeOrderListRequestItem) {
  'use strict';




  /**
   * The ChangeOrderListRequest model module.
   * @module model/ChangeOrderListRequest
   * @version 2.0
   */

  /**
   * Constructs a new <code>ChangeOrderListRequest</code>.
   * Contains all change order operations you want to make
   * @alias module:model/ChangeOrderListRequest
   * @class
   * @param changeOrders {Array.<module:model/ChangeOrderListRequestItem>} The change order operations
   */
  var exports = function(changeOrders) {
    var _this = this;

    _this['changeOrders'] = changeOrders;
  };

  /**
   * Constructs a <code>ChangeOrderListRequest</code> from a plain JavaScript object, optionally creating a new instance.
   * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
   * @param {Object} data The plain JavaScript object bearing properties of interest.
   * @param {module:model/ChangeOrderListRequest} obj Optional instance to populate.
   * @return {module:model/ChangeOrderListRequest} The populated <code>ChangeOrderListRequest</code> instance.
   */
  exports.constructFromObject = function(data, obj) {
    if (data) {
      obj = obj || new exports();

      if (data.hasOwnProperty('changeOrders')) {
        obj['changeOrders'] = ApiClient.convertToType(data['changeOrders'], [ChangeOrderListRequestItem]);
      }
    }
    return obj;
  }

  /**
   * The change order operations
   * @member {Array.<module:model/ChangeOrderListRequestItem>} changeOrders
   */
  exports.prototype['changeOrders'] = undefined;



  return exports;
}));


