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
    root.BeezUpApi.OptimisationActionName = factory(root.BeezUpApi.ApiClient);
  }
}(this, function(ApiClient) {
  'use strict';


  /**
   * Enum class OptimisationActionName.
   * @enum {}
   * @readonly
   */
  var exports = {
    /**
     * value: "reenable"
     * @const
     */
    "reenable": "reenable",
    /**
     * value: "disable"
     * @const
     */
    "disable": "disable"  };

  /**
   * Returns a <code>OptimisationActionName</code> enum value from a Javascript object name.
   * @param {Object} data The plain JavaScript object containing the name of the enum value.
   * @return {module:model/OptimisationActionName} The enum <code>OptimisationActionName</code> value.
   */
  exports.constructFromObject = function(object) {
    return object;
  }

  return exports;
}));


