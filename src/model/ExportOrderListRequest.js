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
    define(['ApiClient', 'model/BeezUPCommonStoreId', 'model/ExportOrderListFormat', 'model/OrderListRequest'], factory);
  } else if (typeof module === 'object' && module.exports) {
    // CommonJS-like environments that support module.exports, like Node.
    module.exports = factory(require('../ApiClient'), require('./BeezUPCommonStoreId'), require('./ExportOrderListFormat'), require('./OrderListRequest'));
  } else {
    // Browser globals (root is window)
    if (!root.BeezUpApi) {
      root.BeezUpApi = {};
    }
    root.BeezUpApi.ExportOrderListRequest = factory(root.BeezUpApi.ApiClient, root.BeezUpApi.BeezUPCommonStoreId, root.BeezUpApi.ExportOrderListFormat, root.BeezUpApi.OrderListRequest);
  }
}(this, function(ApiClient, BeezUPCommonStoreId, ExportOrderListFormat, OrderListRequest) {
  'use strict';




  /**
   * The ExportOrderListRequest model module.
   * @module model/ExportOrderListRequest
   * @version 2.0
   */

  /**
   * Constructs a new <code>ExportOrderListRequest</code>.
   * The message request to export order list. The store identifier is requested to regroup the exportations.
   * @alias module:model/ExportOrderListRequest
   * @class
   * @param storeId {module:model/BeezUPCommonStoreId} 
   * @param orderListRequest {module:model/OrderListRequest} 
   */
  var exports = function(storeId, orderListRequest) {
    var _this = this;


    _this['storeId'] = storeId;
    _this['orderListRequest'] = orderListRequest;
  };

  /**
   * Constructs a <code>ExportOrderListRequest</code> from a plain JavaScript object, optionally creating a new instance.
   * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
   * @param {Object} data The plain JavaScript object bearing properties of interest.
   * @param {module:model/ExportOrderListRequest} obj Optional instance to populate.
   * @return {module:model/ExportOrderListRequest} The populated <code>ExportOrderListRequest</code> instance.
   */
  exports.constructFromObject = function(data, obj) {
    if (data) {
      obj = obj || new exports();

      if (data.hasOwnProperty('format')) {
        obj['format'] = ExportOrderListFormat.constructFromObject(data['format']);
      }
      if (data.hasOwnProperty('storeId')) {
        obj['storeId'] = BeezUPCommonStoreId.constructFromObject(data['storeId']);
      }
      if (data.hasOwnProperty('orderListRequest')) {
        obj['orderListRequest'] = OrderListRequest.constructFromObject(data['orderListRequest']);
      }
    }
    return obj;
  }

  /**
   * @member {module:model/ExportOrderListFormat} format
   */
  exports.prototype['format'] = undefined;
  /**
   * @member {module:model/BeezUPCommonStoreId} storeId
   */
  exports.prototype['storeId'] = undefined;
  /**
   * @member {module:model/OrderListRequest} orderListRequest
   */
  exports.prototype['orderListRequest'] = undefined;



  return exports;
}));


