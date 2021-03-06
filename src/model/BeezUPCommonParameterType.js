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
    define(['ApiClient'], factory);
  } else if (typeof module === 'object' && module.exports) {
    // CommonJS-like environments that support module.exports, like Node.
    module.exports = factory(require('../ApiClient'));
  } else {
    // Browser globals (root is window)
    if (!root.BeezUpApi) {
      root.BeezUpApi = {};
    }
    root.BeezUpApi.BeezUPCommonParameterType = factory(root.BeezUpApi.ApiClient);
  }
}(this, function(ApiClient) {
  'use strict';


  /**
   * Enum class BeezUPCommonParameterType.
   * @enum {}
   * @readonly
   */
  var exports = {
    /**
     * value: "string"
     * @const
     */
    "string": "string",
    /**
     * value: "integer"
     * @const
     */
    "integer": "integer",
    /**
     * value: "number"
     * @const
     */
    "number": "number",
    /**
     * value: "boolean"
     * @const
     */
    "boolean": "boolean",
    /**
     * value: "object"
     * @const
     */
    "object": "object",
    /**
     * value: "array"
     * @const
     */
    "array": "array",
    /**
     * value: "date"
     * @const
     */
    "date": "date",
    /**
     * value: "date-time"
     * @const
     */
    "date-time": "date-time"  };

  /**
   * Returns a <code>BeezUPCommonParameterType</code> enum value from a Javascript object name.
   * @param {Object} data The plain JavaScript object containing the name of the enum value.
   * @return {module:model/BeezUPCommonParameterType} The enum <code>BeezUPCommonParameterType</code> value.
   */
  exports.constructFromObject = function(object) {
    return object;
  }

  return exports;
}));


