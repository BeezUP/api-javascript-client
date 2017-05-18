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
    define(['ApiClient', 'model/ExclusionFilterOperatorDataType', 'model/ExclusionFilterOperatorName'], factory);
  } else if (typeof module === 'object' && module.exports) {
    // CommonJS-like environments that support module.exports, like Node.
    module.exports = factory(require('../ApiClient'), require('./ExclusionFilterOperatorDataType'), require('./ExclusionFilterOperatorName'));
  } else {
    // Browser globals (root is window)
    if (!root.BeezUpApi) {
      root.BeezUpApi = {};
    }
    root.BeezUpApi.ExclusionFilterOperator = factory(root.BeezUpApi.ApiClient, root.BeezUpApi.ExclusionFilterOperatorDataType, root.BeezUpApi.ExclusionFilterOperatorName);
  }
}(this, function(ApiClient, ExclusionFilterOperatorDataType, ExclusionFilterOperatorName) {
  'use strict';




  /**
   * The ExclusionFilterOperator model module.
   * @module model/ExclusionFilterOperator
   * @version 2.0
   */

  /**
   * Constructs a new <code>ExclusionFilterOperator</code>.
   * The exclusion filter operator
   * @alias module:model/ExclusionFilterOperator
   * @class
   */
  var exports = function() {
    var _this = this;





  };

  /**
   * Constructs a <code>ExclusionFilterOperator</code> from a plain JavaScript object, optionally creating a new instance.
   * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
   * @param {Object} data The plain JavaScript object bearing properties of interest.
   * @param {module:model/ExclusionFilterOperator} obj Optional instance to populate.
   * @return {module:model/ExclusionFilterOperator} The populated <code>ExclusionFilterOperator</code> instance.
   */
  exports.constructFromObject = function(data, obj) {
    if (data) {
      obj = obj || new exports();

      if (data.hasOwnProperty('name')) {
        obj['name'] = ExclusionFilterOperatorName.constructFromObject(data['name']);
      }
      if (data.hasOwnProperty('expectedChannelColumnDataType')) {
        obj['expectedChannelColumnDataType'] = ExclusionFilterOperatorDataType.constructFromObject(data['expectedChannelColumnDataType']);
      }
      if (data.hasOwnProperty('valueRequired')) {
        obj['valueRequired'] = ApiClient.convertToType(data['valueRequired'], 'Boolean');
      }
      if (data.hasOwnProperty('expectedValueDataType')) {
        obj['expectedValueDataType'] = ExclusionFilterOperatorDataType.constructFromObject(data['expectedValueDataType']);
      }
    }
    return obj;
  }

  /**
   * @member {module:model/ExclusionFilterOperatorName} name
   */
  exports.prototype['name'] = undefined;
  /**
   * @member {module:model/ExclusionFilterOperatorDataType} expectedChannelColumnDataType
   */
  exports.prototype['expectedChannelColumnDataType'] = undefined;
  /**
   * This operator requires a value
   * @member {Boolean} valueRequired
   */
  exports.prototype['valueRequired'] = undefined;
  /**
   * @member {module:model/ExclusionFilterOperatorDataType} expectedValueDataType
   */
  exports.prototype['expectedValueDataType'] = undefined;



  return exports;
}));


