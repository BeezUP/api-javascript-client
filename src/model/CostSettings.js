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
    define(['ApiClient', 'model/CostType'], factory);
  } else if (typeof module === 'object' && module.exports) {
    // CommonJS-like environments that support module.exports, like Node.
    module.exports = factory(require('../ApiClient'), require('./CostType'));
  } else {
    // Browser globals (root is window)
    if (!root.BeezUpApi) {
      root.BeezUpApi = {};
    }
    root.BeezUpApi.CostSettings = factory(root.BeezUpApi.ApiClient, root.BeezUpApi.CostType);
  }
}(this, function(ApiClient, CostType) {
  'use strict';




  /**
   * The CostSettings model module.
   * @module model/CostSettings
   * @version 2.0
   */

  /**
   * Constructs a new <code>CostSettings</code>.
   * Depending to the cost type you will have to define a cost value.
   * @alias module:model/CostSettings
   * @class
   * @param costType {module:model/CostType} 
   */
  var exports = function(costType) {
    var _this = this;

    _this['costType'] = costType;

  };

  /**
   * Constructs a <code>CostSettings</code> from a plain JavaScript object, optionally creating a new instance.
   * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
   * @param {Object} data The plain JavaScript object bearing properties of interest.
   * @param {module:model/CostSettings} obj Optional instance to populate.
   * @return {module:model/CostSettings} The populated <code>CostSettings</code> instance.
   */
  exports.constructFromObject = function(data, obj) {
    if (data) {
      obj = obj || new exports();

      if (data.hasOwnProperty('costType')) {
        obj['costType'] = CostType.constructFromObject(data['costType']);
      }
      if (data.hasOwnProperty('globalCostValue')) {
        obj['globalCostValue'] = ApiClient.convertToType(data['globalCostValue'], 'Number');
      }
    }
    return obj;
  }

  /**
   * @member {module:model/CostType} costType
   */
  exports.prototype['costType'] = undefined;
  /**
   * In case of global cost type, you have to indicate the cost value.
   * @member {Number} globalCostValue
   */
  exports.prototype['globalCostValue'] = undefined;



  return exports;
}));


