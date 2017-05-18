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
    define(['ApiClient', 'model/ProfilePictureSelected', 'model/ProfilePictureUrl'], factory);
  } else if (typeof module === 'object' && module.exports) {
    // CommonJS-like environments that support module.exports, like Node.
    module.exports = factory(require('../ApiClient'), require('./ProfilePictureSelected'), require('./ProfilePictureUrl'));
  } else {
    // Browser globals (root is window)
    if (!root.BeezUpApi) {
      root.BeezUpApi = {};
    }
    root.BeezUpApi.ProfilePictureInfo = factory(root.BeezUpApi.ApiClient, root.BeezUpApi.ProfilePictureSelected, root.BeezUpApi.ProfilePictureUrl);
  }
}(this, function(ApiClient, ProfilePictureSelected, ProfilePictureUrl) {
  'use strict';




  /**
   * The ProfilePictureInfo model module.
   * @module model/ProfilePictureInfo
   * @version 2.0
   */

  /**
   * Constructs a new <code>ProfilePictureInfo</code>.
   * @alias module:model/ProfilePictureInfo
   * @class
   * @param profilePictureSelected {module:model/ProfilePictureSelected} 
   */
  var exports = function(profilePictureSelected) {
    var _this = this;


    _this['profilePictureSelected'] = profilePictureSelected;
  };

  /**
   * Constructs a <code>ProfilePictureInfo</code> from a plain JavaScript object, optionally creating a new instance.
   * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
   * @param {Object} data The plain JavaScript object bearing properties of interest.
   * @param {module:model/ProfilePictureInfo} obj Optional instance to populate.
   * @return {module:model/ProfilePictureInfo} The populated <code>ProfilePictureInfo</code> instance.
   */
  exports.constructFromObject = function(data, obj) {
    if (data) {
      obj = obj || new exports();

      if (data.hasOwnProperty('profilePictureUrl')) {
        obj['profilePictureUrl'] = ProfilePictureUrl.constructFromObject(data['profilePictureUrl']);
      }
      if (data.hasOwnProperty('profilePictureSelected')) {
        obj['profilePictureSelected'] = ProfilePictureSelected.constructFromObject(data['profilePictureSelected']);
      }
    }
    return obj;
  }

  /**
   * @member {module:model/ProfilePictureUrl} profilePictureUrl
   */
  exports.prototype['profilePictureUrl'] = undefined;
  /**
   * @member {module:model/ProfilePictureSelected} profilePictureSelected
   */
  exports.prototype['profilePictureSelected'] = undefined;



  return exports;
}));


