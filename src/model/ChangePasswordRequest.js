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
    root.BeezUpApi.ChangePasswordRequest = factory(root.BeezUpApi.ApiClient);
  }
}(this, function(ApiClient) {
  'use strict';




  /**
   * The ChangePasswordRequest model module.
   * @module model/ChangePasswordRequest
   * @version 2.0
   */

  /**
   * Constructs a new <code>ChangePasswordRequest</code>.
   * @alias module:model/ChangePasswordRequest
   * @class
   * @param oldPassword {String} Your current password
   * @param newPassword {String} Your new password. Which must respect the same constraints as the user registeration
   */
  var exports = function(oldPassword, newPassword) {
    var _this = this;

    _this['oldPassword'] = oldPassword;
    _this['newPassword'] = newPassword;
  };

  /**
   * Constructs a <code>ChangePasswordRequest</code> from a plain JavaScript object, optionally creating a new instance.
   * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
   * @param {Object} data The plain JavaScript object bearing properties of interest.
   * @param {module:model/ChangePasswordRequest} obj Optional instance to populate.
   * @return {module:model/ChangePasswordRequest} The populated <code>ChangePasswordRequest</code> instance.
   */
  exports.constructFromObject = function(data, obj) {
    if (data) {
      obj = obj || new exports();

      if (data.hasOwnProperty('oldPassword')) {
        obj['oldPassword'] = ApiClient.convertToType(data['oldPassword'], 'String');
      }
      if (data.hasOwnProperty('newPassword')) {
        obj['newPassword'] = ApiClient.convertToType(data['newPassword'], 'String');
      }
    }
    return obj;
  }

  /**
   * Your current password
   * @member {String} oldPassword
   */
  exports.prototype['oldPassword'] = undefined;
  /**
   * Your new password. Which must respect the same constraints as the user registeration
   * @member {String} newPassword
   */
  exports.prototype['newPassword'] = undefined;



  return exports;
}));


