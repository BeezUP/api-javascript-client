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
    define(['ApiClient', 'model/ClickIncludedAndVariablePrice'], factory);
  } else if (typeof module === 'object' && module.exports) {
    // CommonJS-like environments that support module.exports, like Node.
    module.exports = factory(require('../ApiClient'), require('./ClickIncludedAndVariablePrice'));
  } else {
    // Browser globals (root is window)
    if (!root.BeezUpApi) {
      root.BeezUpApi = {};
    }
    root.BeezUpApi.VariableModelInfo = factory(root.BeezUpApi.ApiClient, root.BeezUpApi.ClickIncludedAndVariablePrice);
  }
}(this, function(ApiClient, ClickIncludedAndVariablePrice) {
  'use strict';




  /**
   * The VariableModelInfo model module.
   * @module model/VariableModelInfo
   * @version 2.0
   */

  /**
   * Constructs a new <code>VariableModelInfo</code>.
   * Internal usage: Old offer type. Describe the fix and variable model information
   * @alias module:model/VariableModelInfo
   * @class
   */
  var exports = function() {
    var _this = this;




  };

  /**
   * Constructs a <code>VariableModelInfo</code> from a plain JavaScript object, optionally creating a new instance.
   * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
   * @param {Object} data The plain JavaScript object bearing properties of interest.
   * @param {module:model/VariableModelInfo} obj Optional instance to populate.
   * @return {module:model/VariableModelInfo} The populated <code>VariableModelInfo</code> instance.
   */
  exports.constructFromObject = function(data, obj) {
    if (data) {
      obj = obj || new exports();

      if (data.hasOwnProperty('clickIncludedAndVariablePrices')) {
        obj['clickIncludedAndVariablePrices'] = ApiClient.convertToType(data['clickIncludedAndVariablePrices'], [ClickIncludedAndVariablePrice]);
      }
      if (data.hasOwnProperty('overflowClickCount')) {
        obj['overflowClickCount'] = ApiClient.convertToType(data['overflowClickCount'], 'Number');
      }
      if (data.hasOwnProperty('overflowClickPrice')) {
        obj['overflowClickPrice'] = ApiClient.convertToType(data['overflowClickPrice'], 'Number');
      }
    }
    return obj;
  }

  /**
   * Click included with variable pricing information
   * @member {Array.<module:model/ClickIncludedAndVariablePrice>} clickIncludedAndVariablePrices
   */
  exports.prototype['clickIncludedAndVariablePrices'] = undefined;
  /**
   * The overflow click count
   * @member {Number} overflowClickCount
   */
  exports.prototype['overflowClickCount'] = undefined;
  /**
   * The overflow click price
   * @member {Number} overflowClickPrice
   */
  exports.prototype['overflowClickPrice'] = undefined;



  return exports;
}));


