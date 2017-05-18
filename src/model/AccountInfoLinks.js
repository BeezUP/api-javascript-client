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
    define(['ApiClient', 'model/LinksChangePasswordLink', 'model/LinksGetCreditCardInfoLink', 'model/LinksGetProfilePictureInfoLink', 'model/LinksSaveCompanyInfoLink', 'model/LinksSaveCreditCardInfoLink', 'model/LinksSavePersonalInfoLink', 'model/LinksSaveProfilePictureInfoLink'], factory);
  } else if (typeof module === 'object' && module.exports) {
    // CommonJS-like environments that support module.exports, like Node.
    module.exports = factory(require('../ApiClient'), require('./LinksChangePasswordLink'), require('./LinksGetCreditCardInfoLink'), require('./LinksGetProfilePictureInfoLink'), require('./LinksSaveCompanyInfoLink'), require('./LinksSaveCreditCardInfoLink'), require('./LinksSavePersonalInfoLink'), require('./LinksSaveProfilePictureInfoLink'));
  } else {
    // Browser globals (root is window)
    if (!root.BeezUpApi) {
      root.BeezUpApi = {};
    }
    root.BeezUpApi.AccountInfoLinks = factory(root.BeezUpApi.ApiClient, root.BeezUpApi.LinksChangePasswordLink, root.BeezUpApi.LinksGetCreditCardInfoLink, root.BeezUpApi.LinksGetProfilePictureInfoLink, root.BeezUpApi.LinksSaveCompanyInfoLink, root.BeezUpApi.LinksSaveCreditCardInfoLink, root.BeezUpApi.LinksSavePersonalInfoLink, root.BeezUpApi.LinksSaveProfilePictureInfoLink);
  }
}(this, function(ApiClient, LinksChangePasswordLink, LinksGetCreditCardInfoLink, LinksGetProfilePictureInfoLink, LinksSaveCompanyInfoLink, LinksSaveCreditCardInfoLink, LinksSavePersonalInfoLink, LinksSaveProfilePictureInfoLink) {
  'use strict';




  /**
   * The AccountInfoLinks model module.
   * @module model/AccountInfoLinks
   * @version 2.0
   */

  /**
   * Constructs a new <code>AccountInfoLinks</code>.
   * The different actions you can make on this account
   * @alias module:model/AccountInfoLinks
   * @class
   * @param savePersonalInfo {module:model/LinksSavePersonalInfoLink} 
   * @param changePassword {module:model/LinksChangePasswordLink} 
   * @param saveCompanyInfo {module:model/LinksSaveCompanyInfoLink} 
   * @param getProfilePictureInfo {module:model/LinksGetProfilePictureInfoLink} 
   * @param saveProfilePictureInfo {module:model/LinksSaveProfilePictureInfoLink} 
   * @param getCreditCardInfo {module:model/LinksGetCreditCardInfoLink} 
   * @param saveCreditCardInfo {module:model/LinksSaveCreditCardInfoLink} 
   */
  var exports = function(savePersonalInfo, changePassword, saveCompanyInfo, getProfilePictureInfo, saveProfilePictureInfo, getCreditCardInfo, saveCreditCardInfo) {
    var _this = this;

    _this['savePersonalInfo'] = savePersonalInfo;
    _this['changePassword'] = changePassword;
    _this['saveCompanyInfo'] = saveCompanyInfo;
    _this['getProfilePictureInfo'] = getProfilePictureInfo;
    _this['saveProfilePictureInfo'] = saveProfilePictureInfo;
    _this['getCreditCardInfo'] = getCreditCardInfo;
    _this['saveCreditCardInfo'] = saveCreditCardInfo;
  };

  /**
   * Constructs a <code>AccountInfoLinks</code> from a plain JavaScript object, optionally creating a new instance.
   * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
   * @param {Object} data The plain JavaScript object bearing properties of interest.
   * @param {module:model/AccountInfoLinks} obj Optional instance to populate.
   * @return {module:model/AccountInfoLinks} The populated <code>AccountInfoLinks</code> instance.
   */
  exports.constructFromObject = function(data, obj) {
    if (data) {
      obj = obj || new exports();

      if (data.hasOwnProperty('savePersonalInfo')) {
        obj['savePersonalInfo'] = LinksSavePersonalInfoLink.constructFromObject(data['savePersonalInfo']);
      }
      if (data.hasOwnProperty('changePassword')) {
        obj['changePassword'] = LinksChangePasswordLink.constructFromObject(data['changePassword']);
      }
      if (data.hasOwnProperty('saveCompanyInfo')) {
        obj['saveCompanyInfo'] = LinksSaveCompanyInfoLink.constructFromObject(data['saveCompanyInfo']);
      }
      if (data.hasOwnProperty('getProfilePictureInfo')) {
        obj['getProfilePictureInfo'] = LinksGetProfilePictureInfoLink.constructFromObject(data['getProfilePictureInfo']);
      }
      if (data.hasOwnProperty('saveProfilePictureInfo')) {
        obj['saveProfilePictureInfo'] = LinksSaveProfilePictureInfoLink.constructFromObject(data['saveProfilePictureInfo']);
      }
      if (data.hasOwnProperty('getCreditCardInfo')) {
        obj['getCreditCardInfo'] = LinksGetCreditCardInfoLink.constructFromObject(data['getCreditCardInfo']);
      }
      if (data.hasOwnProperty('saveCreditCardInfo')) {
        obj['saveCreditCardInfo'] = LinksSaveCreditCardInfoLink.constructFromObject(data['saveCreditCardInfo']);
      }
    }
    return obj;
  }

  /**
   * @member {module:model/LinksSavePersonalInfoLink} savePersonalInfo
   */
  exports.prototype['savePersonalInfo'] = undefined;
  /**
   * @member {module:model/LinksChangePasswordLink} changePassword
   */
  exports.prototype['changePassword'] = undefined;
  /**
   * @member {module:model/LinksSaveCompanyInfoLink} saveCompanyInfo
   */
  exports.prototype['saveCompanyInfo'] = undefined;
  /**
   * @member {module:model/LinksGetProfilePictureInfoLink} getProfilePictureInfo
   */
  exports.prototype['getProfilePictureInfo'] = undefined;
  /**
   * @member {module:model/LinksSaveProfilePictureInfoLink} saveProfilePictureInfo
   */
  exports.prototype['saveProfilePictureInfo'] = undefined;
  /**
   * @member {module:model/LinksGetCreditCardInfoLink} getCreditCardInfo
   */
  exports.prototype['getCreditCardInfo'] = undefined;
  /**
   * @member {module:model/LinksSaveCreditCardInfoLink} saveCreditCardInfo
   */
  exports.prototype['saveCreditCardInfo'] = undefined;



  return exports;
}));


