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
    define(['ApiClient', 'model/CatalogColumnName', 'model/ColumnConfiguration', 'model/ColumnId', 'model/DuplicateProductValueConfiguration', 'model/UserColumName'], factory);
  } else if (typeof module === 'object' && module.exports) {
    // CommonJS-like environments that support module.exports, like Node.
    module.exports = factory(require('../ApiClient'), require('./CatalogColumnName'), require('./ColumnConfiguration'), require('./ColumnId'), require('./DuplicateProductValueConfiguration'), require('./UserColumName'));
  } else {
    // Browser globals (root is window)
    if (!root.BeezUpApi) {
      root.BeezUpApi = {};
    }
    root.BeezUpApi.CatalogColumn = factory(root.BeezUpApi.ApiClient, root.BeezUpApi.CatalogColumnName, root.BeezUpApi.ColumnConfiguration, root.BeezUpApi.ColumnId, root.BeezUpApi.DuplicateProductValueConfiguration, root.BeezUpApi.UserColumName);
  }
}(this, function(ApiClient, CatalogColumnName, ColumnConfiguration, ColumnId, DuplicateProductValueConfiguration, UserColumName) {
  'use strict';




  /**
   * The CatalogColumn model module.
   * @module model/CatalogColumn
   * @version 2.0
   */

  /**
   * Constructs a new <code>CatalogColumn</code>.
   * The catalog column configuration
   * @alias module:model/CatalogColumn
   * @class
   * @param id {module:model/ColumnId} 
   * @param catalogColumnName {module:model/CatalogColumnName} 
   * @param userColumName {module:model/UserColumName} 
   * @param configuration {module:model/ColumnConfiguration} 
   */
  var exports = function(id, catalogColumnName, userColumName, configuration) {
    var _this = this;



    _this['id'] = id;
    _this['catalogColumnName'] = catalogColumnName;
    _this['userColumName'] = userColumName;
    _this['configuration'] = configuration;
  };

  /**
   * Constructs a <code>CatalogColumn</code> from a plain JavaScript object, optionally creating a new instance.
   * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
   * @param {Object} data The plain JavaScript object bearing properties of interest.
   * @param {module:model/CatalogColumn} obj Optional instance to populate.
   * @return {module:model/CatalogColumn} The populated <code>CatalogColumn</code> instance.
   */
  exports.constructFromObject = function(data, obj) {
    if (data) {
      obj = obj || new exports();

      if (data.hasOwnProperty('ignored')) {
        obj['ignored'] = ApiClient.convertToType(data['ignored'], 'Boolean');
      }
      if (data.hasOwnProperty('duplicateProductValueConfiguration')) {
        obj['duplicateProductValueConfiguration'] = DuplicateProductValueConfiguration.constructFromObject(data['duplicateProductValueConfiguration']);
      }
      if (data.hasOwnProperty('id')) {
        obj['id'] = ColumnId.constructFromObject(data['id']);
      }
      if (data.hasOwnProperty('catalogColumnName')) {
        obj['catalogColumnName'] = CatalogColumnName.constructFromObject(data['catalogColumnName']);
      }
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
   * IF true, the product values of this column will be not taken in account during the importation process
   * @member {Boolean} ignored
   * @default false
   */
  exports.prototype['ignored'] = false;
  /**
   * @member {module:model/DuplicateProductValueConfiguration} duplicateProductValueConfiguration
   */
  exports.prototype['duplicateProductValueConfiguration'] = undefined;
  /**
   * @member {module:model/ColumnId} id
   */
  exports.prototype['id'] = undefined;
  /**
   * @member {module:model/CatalogColumnName} catalogColumnName
   */
  exports.prototype['catalogColumnName'] = undefined;
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


