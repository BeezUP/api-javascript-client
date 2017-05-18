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
    define(['ApiClient', 'model/BeezUPCommonBeezUPColumnName', 'model/BeezUPCommonColumnDataType', 'model/BeezUPCommonColumnImportance', 'model/CanBeTruncated', 'model/DisplayGroupName'], factory);
  } else if (typeof module === 'object' && module.exports) {
    // CommonJS-like environments that support module.exports, like Node.
    module.exports = factory(require('../ApiClient'), require('./BeezUPCommonBeezUPColumnName'), require('./BeezUPCommonColumnDataType'), require('./BeezUPCommonColumnImportance'), require('./CanBeTruncated'), require('./DisplayGroupName'));
  } else {
    // Browser globals (root is window)
    if (!root.BeezUpApi) {
      root.BeezUpApi = {};
    }
    root.BeezUpApi.BeezUPColumnConfiguration = factory(root.BeezUpApi.ApiClient, root.BeezUpApi.BeezUPCommonBeezUPColumnName, root.BeezUpApi.BeezUPCommonColumnDataType, root.BeezUpApi.BeezUPCommonColumnImportance, root.BeezUpApi.CanBeTruncated, root.BeezUpApi.DisplayGroupName);
  }
}(this, function(ApiClient, BeezUPCommonBeezUPColumnName, BeezUPCommonColumnDataType, BeezUPCommonColumnImportance, CanBeTruncated, DisplayGroupName) {
  'use strict';




  /**
   * The BeezUPColumnConfiguration model module.
   * @module model/BeezUPColumnConfiguration
   * @version 2.0
   */

  /**
   * Constructs a new <code>BeezUPColumnConfiguration</code>.
   * Describe a BeezUP column
   * @alias module:model/BeezUPColumnConfiguration
   * @class
   * @param beezUPColumnName {module:model/BeezUPCommonBeezUPColumnName} 
   * @param columnImportance {module:model/BeezUPCommonColumnImportance} 
   * @param displayGroupName {module:model/DisplayGroupName} 
   */
  var exports = function(beezUPColumnName, columnImportance, displayGroupName) {
    var _this = this;

    _this['beezUPColumnName'] = beezUPColumnName;

    _this['columnImportance'] = columnImportance;


    _this['displayGroupName'] = displayGroupName;

  };

  /**
   * Constructs a <code>BeezUPColumnConfiguration</code> from a plain JavaScript object, optionally creating a new instance.
   * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
   * @param {Object} data The plain JavaScript object bearing properties of interest.
   * @param {module:model/BeezUPColumnConfiguration} obj Optional instance to populate.
   * @return {module:model/BeezUPColumnConfiguration} The populated <code>BeezUPColumnConfiguration</code> instance.
   */
  exports.constructFromObject = function(data, obj) {
    if (data) {
      obj = obj || new exports();

      if (data.hasOwnProperty('beezUPColumnName')) {
        obj['beezUPColumnName'] = BeezUPCommonBeezUPColumnName.constructFromObject(data['beezUPColumnName']);
      }
      if (data.hasOwnProperty('unique')) {
        obj['unique'] = ApiClient.convertToType(data['unique'], 'Boolean');
      }
      if (data.hasOwnProperty('columnImportance')) {
        obj['columnImportance'] = BeezUPCommonColumnImportance.constructFromObject(data['columnImportance']);
      }
      if (data.hasOwnProperty('columnDataType')) {
        obj['columnDataType'] = BeezUPCommonColumnDataType.constructFromObject(data['columnDataType']);
      }
      if (data.hasOwnProperty('canBeTruncated')) {
        obj['canBeTruncated'] = CanBeTruncated.constructFromObject(data['canBeTruncated']);
      }
      if (data.hasOwnProperty('displayGroupName')) {
        obj['displayGroupName'] = DisplayGroupName.constructFromObject(data['displayGroupName']);
      }
      if (data.hasOwnProperty('description')) {
        obj['description'] = ApiClient.convertToType(data['description'], 'String');
      }
    }
    return obj;
  }

  /**
   * @member {module:model/BeezUPCommonBeezUPColumnName} beezUPColumnName
   */
  exports.prototype['beezUPColumnName'] = undefined;
  /**
   * /!\\ ONLY AVAILABLE ON CATALOG COLUMN NOT ON CUSTOM COLUMNS!!  If true, an error happen at the second occurence of the same value for this column  This information will be used during the importation process and later for mapping proposal
   * @member {Boolean} unique
   * @default false
   */
  exports.prototype['unique'] = false;
  /**
   * @member {module:model/BeezUPCommonColumnImportance} columnImportance
   */
  exports.prototype['columnImportance'] = undefined;
  /**
   * @member {module:model/BeezUPCommonColumnDataType} columnDataType
   */
  exports.prototype['columnDataType'] = undefined;
  /**
   * @member {module:model/CanBeTruncated} canBeTruncated
   */
  exports.prototype['canBeTruncated'] = undefined;
  /**
   * @member {module:model/DisplayGroupName} displayGroupName
   */
  exports.prototype['displayGroupName'] = undefined;
  /**
   * Describe the BeezUP column
   * @member {String} description
   */
  exports.prototype['description'] = undefined;



  return exports;
}));


