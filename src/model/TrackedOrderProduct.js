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
    define(['ApiClient', 'model/BeezUPCommonProductBasicInfo'], factory);
  } else if (typeof module === 'object' && module.exports) {
    // CommonJS-like environments that support module.exports, like Node.
    module.exports = factory(require('../ApiClient'), require('./BeezUPCommonProductBasicInfo'));
  } else {
    // Browser globals (root is window)
    if (!root.BeezUpApi) {
      root.BeezUpApi = {};
    }
    root.BeezUpApi.TrackedOrderProduct = factory(root.BeezUpApi.ApiClient, root.BeezUpApi.BeezUPCommonProductBasicInfo);
  }
}(this, function(ApiClient, BeezUPCommonProductBasicInfo) {
  'use strict';




  /**
   * The TrackedOrderProduct model module.
   * @module model/TrackedOrderProduct
   * @version 2.0
   */

  /**
   * Constructs a new <code>TrackedOrderProduct</code>.
   * @alias module:model/TrackedOrderProduct
   * @class
   * @implements module:model/BeezUPCommonProductBasicInfo
   * @param productId {String} The product identifier
   * @param productSku {String} The product SKU
   * @param productTitle {String} The product tile
   * @param productImageUrl {String} The product image Url
   * @param productActive {Boolean} Indicates if the product still exists in your catalog
   * @param unitPrice {Number} The product's unit price related to this order
   * @param quantity {Number} Indicate the product's quantity ordered.
   * @param margin {Number} Indicate the product's margin related to this order.
   */
  var exports = function(productId, productSku, productTitle, productImageUrl, productActive, unitPrice, quantity, margin) {
    var _this = this;

    BeezUPCommonProductBasicInfo.call(_this, productId, productSku, productTitle, productImageUrl, productActive);
    _this['unitPrice'] = unitPrice;
    _this['quantity'] = quantity;
    _this['margin'] = margin;
  };

  /**
   * Constructs a <code>TrackedOrderProduct</code> from a plain JavaScript object, optionally creating a new instance.
   * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
   * @param {Object} data The plain JavaScript object bearing properties of interest.
   * @param {module:model/TrackedOrderProduct} obj Optional instance to populate.
   * @return {module:model/TrackedOrderProduct} The populated <code>TrackedOrderProduct</code> instance.
   */
  exports.constructFromObject = function(data, obj) {
    if (data) {
      obj = obj || new exports();

      BeezUPCommonProductBasicInfo.constructFromObject(data, obj);
      if (data.hasOwnProperty('unitPrice')) {
        obj['unitPrice'] = ApiClient.convertToType(data['unitPrice'], 'Number');
      }
      if (data.hasOwnProperty('quantity')) {
        obj['quantity'] = ApiClient.convertToType(data['quantity'], 'Number');
      }
      if (data.hasOwnProperty('margin')) {
        obj['margin'] = ApiClient.convertToType(data['margin'], 'Number');
      }
    }
    return obj;
  }

  /**
   * The product's unit price related to this order
   * @member {Number} unitPrice
   */
  exports.prototype['unitPrice'] = undefined;
  /**
   * Indicate the product's quantity ordered.
   * @member {Number} quantity
   */
  exports.prototype['quantity'] = undefined;
  /**
   * Indicate the product's margin related to this order.
   * @member {Number} margin
   */
  exports.prototype['margin'] = undefined;

  // Implement BeezUPCommonProductBasicInfo interface:
  /**
   * The product identifier
   * @member {String} productId
   */
exports.prototype['productId'] = undefined;

  /**
   * The product SKU
   * @member {String} productSku
   */
exports.prototype['productSku'] = undefined;

  /**
   * The product tile
   * @member {String} productTitle
   */
exports.prototype['productTitle'] = undefined;

  /**
   * The product image Url
   * @member {String} productImageUrl
   */
exports.prototype['productImageUrl'] = undefined;

  /**
   * Indicates if the product still exists in your catalog
   * @member {Boolean} productActive
   */
exports.prototype['productActive'] = undefined;



  return exports;
}));

