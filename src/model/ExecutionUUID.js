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
    root.BeezUpApi.ExecutionUUID = factory(root.BeezUpApi.ApiClient);
  }
}(this, function(ApiClient) {
  'use strict';




  /**
   * The ExecutionUUID model module.
   * @module model/ExecutionUUID
   * @version 2.0
   */

  /**
   * Constructs a new <code>ExecutionUUID</code>.
   * The execution identifier
   * @alias module:model/ExecutionUUID
   * @class
   */
  var exports = function() {
    var _this = this;

  };

  /**
   * Constructs a <code>ExecutionUUID</code> from a plain JavaScript object, optionally creating a new instance.
   * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
   * @param {Object} data The plain JavaScript object bearing properties of interest.
   * @param {module:model/ExecutionUUID} obj Optional instance to populate.
   * @return {module:model/ExecutionUUID} The populated <code>ExecutionUUID</code> instance.
   */
  exports.constructFromObject = function(data, obj) {
    if (data) {
      obj = obj || new exports();

    }
    return obj;
  }




  return exports;
}));


