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
    define(['ApiClient', 'model/BeezUPCommonBeezUPColumnName'], factory);
  } else if (typeof module === 'object' && module.exports) {
    // CommonJS-like environments that support module.exports, like Node.
    module.exports = factory(require('../ApiClient'), require('./BeezUPCommonBeezUPColumnName'));
  } else {
    // Browser globals (root is window)
    if (!root.BeezUpApi) {
      root.BeezUpApi = {};
    }
    root.BeezUpApi.MapBeezUPColumnRequest = factory(root.BeezUpApi.ApiClient, root.BeezUpApi.BeezUPCommonBeezUPColumnName);
  }
}(this, function(ApiClient, BeezUPCommonBeezUPColumnName) {
  'use strict';




  /**
   * The MapBeezUPColumnRequest model module.
   * @module model/MapBeezUPColumnRequest
   * @version 2.0
   */

  /**
   * Constructs a new <code>MapBeezUPColumnRequest</code>.
   * @alias module:model/MapBeezUPColumnRequest
   * @class
   * @param beezUPColumnName {module:model/BeezUPCommonBeezUPColumnName} 
   */
  var exports = function(beezUPColumnName) {
    var _this = this;

    _this['beezUPColumnName'] = beezUPColumnName;
  };

  /**
   * Constructs a <code>MapBeezUPColumnRequest</code> from a plain JavaScript object, optionally creating a new instance.
   * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
   * @param {Object} data The plain JavaScript object bearing properties of interest.
   * @param {module:model/MapBeezUPColumnRequest} obj Optional instance to populate.
   * @return {module:model/MapBeezUPColumnRequest} The populated <code>MapBeezUPColumnRequest</code> instance.
   */
  exports.constructFromObject = function(data, obj) {
    if (data) {
      obj = obj || new exports();

      if (data.hasOwnProperty('beezUPColumnName')) {
        obj['beezUPColumnName'] = BeezUPCommonBeezUPColumnName.constructFromObject(data['beezUPColumnName']);
      }
    }
    return obj;
  }

  /**
   * @member {module:model/BeezUPCommonBeezUPColumnName} beezUPColumnName
   */
  exports.prototype['beezUPColumnName'] = undefined;



  return exports;
}));


