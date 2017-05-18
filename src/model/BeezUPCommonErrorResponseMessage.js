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
    define(['ApiClient', 'model/BeezUPCommonUserErrorMessage'], factory);
  } else if (typeof module === 'object' && module.exports) {
    // CommonJS-like environments that support module.exports, like Node.
    module.exports = factory(require('../ApiClient'), require('./BeezUPCommonUserErrorMessage'));
  } else {
    // Browser globals (root is window)
    if (!root.BeezUpApi) {
      root.BeezUpApi = {};
    }
    root.BeezUpApi.BeezUPCommonErrorResponseMessage = factory(root.BeezUpApi.ApiClient, root.BeezUpApi.BeezUPCommonUserErrorMessage);
  }
}(this, function(ApiClient, BeezUPCommonUserErrorMessage) {
  'use strict';




  /**
   * The BeezUPCommonErrorResponseMessage model module.
   * @module model/BeezUPCommonErrorResponseMessage
   * @version 2.0
   */

  /**
   * Constructs a new <code>BeezUPCommonErrorResponseMessage</code>.
   * @alias module:model/BeezUPCommonErrorResponseMessage
   * @class
   * @param errors {Array.<module:model/BeezUPCommonUserErrorMessage>} 
   */
  var exports = function(errors) {
    var _this = this;

    _this['errors'] = errors;
  };

  /**
   * Constructs a <code>BeezUPCommonErrorResponseMessage</code> from a plain JavaScript object, optionally creating a new instance.
   * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
   * @param {Object} data The plain JavaScript object bearing properties of interest.
   * @param {module:model/BeezUPCommonErrorResponseMessage} obj Optional instance to populate.
   * @return {module:model/BeezUPCommonErrorResponseMessage} The populated <code>BeezUPCommonErrorResponseMessage</code> instance.
   */
  exports.constructFromObject = function(data, obj) {
    if (data) {
      obj = obj || new exports();

      if (data.hasOwnProperty('errors')) {
        obj['errors'] = ApiClient.convertToType(data['errors'], [BeezUPCommonUserErrorMessage]);
      }
    }
    return obj;
  }

  /**
   * @member {Array.<module:model/BeezUPCommonUserErrorMessage>} errors
   */
  exports.prototype['errors'] = undefined;



  return exports;
}));


