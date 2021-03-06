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
    define(['ApiClient', 'model/CatalogColumn', 'model/CatalogColumnName', 'model/ColumnConfiguration', 'model/ColumnId', 'model/DuplicateProductValueConfiguration', 'model/ExistingCatalogColumnConfiguration', 'model/UserColumName'], factory);
  } else if (typeof module === 'object' && module.exports) {
    // CommonJS-like environments that support module.exports, like Node.
    module.exports = factory(require('../ApiClient'), require('./CatalogColumn'), require('./CatalogColumnName'), require('./ColumnConfiguration'), require('./ColumnId'), require('./DuplicateProductValueConfiguration'), require('./ExistingCatalogColumnConfiguration'), require('./UserColumName'));
  } else {
    // Browser globals (root is window)
    if (!root.BeezUpApi) {
      root.BeezUpApi = {};
    }
    root.BeezUpApi.DetectedCatalogColumn = factory(root.BeezUpApi.ApiClient, root.BeezUpApi.CatalogColumn, root.BeezUpApi.CatalogColumnName, root.BeezUpApi.ColumnConfiguration, root.BeezUpApi.ColumnId, root.BeezUpApi.DuplicateProductValueConfiguration, root.BeezUpApi.ExistingCatalogColumnConfiguration, root.BeezUpApi.UserColumName);
  }
}(this, function(ApiClient, CatalogColumn, CatalogColumnName, ColumnConfiguration, ColumnId, DuplicateProductValueConfiguration, ExistingCatalogColumnConfiguration, UserColumName) {
  'use strict';




  /**
   * The DetectedCatalogColumn model module.
   * @module model/DetectedCatalogColumn
   * @version 2.0
   */

  /**
   * Constructs a new <code>DetectedCatalogColumn</code>.
   * @alias module:model/DetectedCatalogColumn
   * @class
   * @implements module:model/CatalogColumn
   * @param id {module:model/ColumnId} 
   * @param catalogColumnName {module:model/CatalogColumnName} 
   * @param userColumName {module:model/UserColumName} 
   * @param configuration {module:model/ColumnConfiguration} 
   * @param columnId {module:model/ColumnId} 
   * @param detected {Boolean} Indicates if the column is detected or is from the current catalog
   */
  var exports = function(id, catalogColumnName, userColumName, configuration, columnId, detected) {
    var _this = this;

    CatalogColumn.call(_this, id, catalogColumnName, userColumName, configuration);
    _this['columnId'] = columnId;
    _this['catalogColumnName'] = catalogColumnName;
    _this['detected'] = detected;

  };

  /**
   * Constructs a <code>DetectedCatalogColumn</code> from a plain JavaScript object, optionally creating a new instance.
   * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
   * @param {Object} data The plain JavaScript object bearing properties of interest.
   * @param {module:model/DetectedCatalogColumn} obj Optional instance to populate.
   * @return {module:model/DetectedCatalogColumn} The populated <code>DetectedCatalogColumn</code> instance.
   */
  exports.constructFromObject = function(data, obj) {
    if (data) {
      obj = obj || new exports();

      CatalogColumn.constructFromObject(data, obj);
      if (data.hasOwnProperty('columnId')) {
        obj['columnId'] = ColumnId.constructFromObject(data['columnId']);
      }
      if (data.hasOwnProperty('catalogColumnName')) {
        obj['catalogColumnName'] = CatalogColumnName.constructFromObject(data['catalogColumnName']);
      }
      if (data.hasOwnProperty('detected')) {
        obj['detected'] = ApiClient.convertToType(data['detected'], 'Boolean');
      }
      if (data.hasOwnProperty('existingConfiguration')) {
        obj['existingConfiguration'] = ExistingCatalogColumnConfiguration.constructFromObject(data['existingConfiguration']);
      }
    }
    return obj;
  }

  /**
   * @member {module:model/ColumnId} columnId
   */
  exports.prototype['columnId'] = undefined;
  /**
   * @member {module:model/CatalogColumnName} catalogColumnName
   */
  exports.prototype['catalogColumnName'] = undefined;
  /**
   * Indicates if the column is detected or is from the current catalog
   * @member {Boolean} detected
   */
  exports.prototype['detected'] = undefined;
  /**
   * @member {module:model/ExistingCatalogColumnConfiguration} existingConfiguration
   */
  exports.prototype['existingConfiguration'] = undefined;

  // Implement CatalogColumn interface:
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


