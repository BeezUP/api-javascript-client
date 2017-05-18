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
    define(['ApiClient', 'model/ColumnConfiguration', 'model/UserColumName'], factory);
  } else if (typeof module === 'object' && module.exports) {
    // CommonJS-like environments that support module.exports, like Node.
    module.exports = factory(require('../ApiClient'), require('./ColumnConfiguration'), require('./UserColumName'));
  } else {
    // Browser globals (root is window)
    if (!root.BeezUpApi) {
      root.BeezUpApi = {};
    }
    root.BeezUpApi.ExistingCatalogColumnConfiguration = factory(root.BeezUpApi.ApiClient, root.BeezUpApi.ColumnConfiguration, root.BeezUpApi.UserColumName);
  }
}(this, function(ApiClient, ColumnConfiguration, UserColumName) {
  'use strict';




  /**
   * The ExistingCatalogColumnConfiguration model module.
   * @module model/ExistingCatalogColumnConfiguration
   * @version 2.0
   */

  /**
   * Constructs a new <code>ExistingCatalogColumnConfiguration</code>.
   * In case your catalog column already exists we indicate you the existing configuration.
   * @alias module:model/ExistingCatalogColumnConfiguration
   * @class
   * @param userColumName {module:model/UserColumName} 
   * @param configuration {module:model/ColumnConfiguration} 
   */
  var exports = function(userColumName, configuration) {
    var _this = this;

    _this['userColumName'] = userColumName;
    _this['configuration'] = configuration;
  };

  /**
   * Constructs a <code>ExistingCatalogColumnConfiguration</code> from a plain JavaScript object, optionally creating a new instance.
   * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
   * @param {Object} data The plain JavaScript object bearing properties of interest.
   * @param {module:model/ExistingCatalogColumnConfiguration} obj Optional instance to populate.
   * @return {module:model/ExistingCatalogColumnConfiguration} The populated <code>ExistingCatalogColumnConfiguration</code> instance.
   */
  exports.constructFromObject = function(data, obj) {
    if (data) {
      obj = obj || new exports();

      if (data.hasOwnProperty('userColumName')) {
        obj['userColumName'] = UserColumName.constructFromObject(data['userColumName']);
      }
      if (data.hasOwnProperty('configuration')) {
        obj['configuration'] = ColumnConfiguration.constructFromObject(data['configuration']);
      }
    }
    return obj;
  }

  /**
   * @member {module:model/UserColumName} userColumName
   */
  exports.prototype['userColumName'] = undefined;
  /**
   * @member {module:model/ColumnConfiguration} configuration
   */
  exports.prototype['configuration'] = undefined;



  return exports;
}));

