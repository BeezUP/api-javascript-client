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
    define(['ApiClient', 'model/AlertPropertyId', 'model/AlertPropertyValue', 'model/StoreAlertProperty'], factory);
  } else if (typeof module === 'object' && module.exports) {
    // CommonJS-like environments that support module.exports, like Node.
    module.exports = factory(require('../ApiClient'), require('./AlertPropertyId'), require('./AlertPropertyValue'), require('./StoreAlertProperty'));
  } else {
    // Browser globals (root is window)
    if (!root.BeezUpApi) {
      root.BeezUpApi = {};
    }
    root.BeezUpApi.StoreAlertPropertyInfo = factory(root.BeezUpApi.ApiClient, root.BeezUpApi.AlertPropertyId, root.BeezUpApi.AlertPropertyValue, root.BeezUpApi.StoreAlertProperty);
  }
}(this, function(ApiClient, AlertPropertyId, AlertPropertyValue, StoreAlertProperty) {
  'use strict';




  /**
   * The StoreAlertPropertyInfo model module.
   * @module model/StoreAlertPropertyInfo
   * @version 2.0
   */

  /**
   * Constructs a new <code>StoreAlertPropertyInfo</code>.
   * @alias module:model/StoreAlertPropertyInfo
   * @class
   * @implements module:model/StoreAlertProperty
   * @param propertyId {module:model/AlertPropertyId} 
   * @param propertyValue {module:model/AlertPropertyValue} 
   * @param propertyName {String} The property name of the alert
   */
  var exports = function(propertyId, propertyValue, propertyName) {
    var _this = this;

    StoreAlertProperty.call(_this, propertyId, propertyValue);
    _this['propertyName'] = propertyName;

  };

  /**
   * Constructs a <code>StoreAlertPropertyInfo</code> from a plain JavaScript object, optionally creating a new instance.
   * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
   * @param {Object} data The plain JavaScript object bearing properties of interest.
   * @param {module:model/StoreAlertPropertyInfo} obj Optional instance to populate.
   * @return {module:model/StoreAlertPropertyInfo} The populated <code>StoreAlertPropertyInfo</code> instance.
   */
  exports.constructFromObject = function(data, obj) {
    if (data) {
      obj = obj || new exports();

      StoreAlertProperty.constructFromObject(data, obj);
      if (data.hasOwnProperty('propertyName')) {
        obj['propertyName'] = ApiClient.convertToType(data['propertyName'], 'String');
      }
      if (data.hasOwnProperty('propertyValidationExpression')) {
        obj['propertyValidationExpression'] = ApiClient.convertToType(data['propertyValidationExpression'], 'String');
      }
    }
    return obj;
  }

  /**
   * The property name of the alert
   * @member {String} propertyName
   */
  exports.prototype['propertyName'] = undefined;
  /**
   * The regular expression related to the alert property
   * @member {String} propertyValidationExpression
   */
  exports.prototype['propertyValidationExpression'] = undefined;

  // Implement StoreAlertProperty interface:
  /**
   * @member {module:model/AlertPropertyId} propertyId
   */
exports.prototype['propertyId'] = undefined;

  /**
   * @member {module:model/AlertPropertyValue} propertyValue
   */
exports.prototype['propertyValue'] = undefined;



  return exports;
}));


