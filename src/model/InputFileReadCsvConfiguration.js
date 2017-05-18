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
    root.BeezUpApi.InputFileReadCsvConfiguration = factory(root.BeezUpApi.ApiClient);
  }
}(this, function(ApiClient) {
  'use strict';




  /**
   * The InputFileReadCsvConfiguration model module.
   * @module model/InputFileReadCsvConfiguration
   * @version 2.0
   */

  /**
   * Constructs a new <code>InputFileReadCsvConfiguration</code>.
   * The CSV file description
   * @alias module:model/InputFileReadCsvConfiguration
   * @class
   * @param hasHeaderRecord {Boolean} Indicate if the csv file contains the column name at the first row
   * @param ignoreHeaderRecord {Boolean} Indicate if the importation should not use the csv column name from the file
   * @param csvSeparator {String} Indicate the separator of the values in the CSV file. Generally \";\"
   * @param csvTextQualifier {String} Indicate the text qualifier of the CSV file. Generally the value is \"
   */
  var exports = function(hasHeaderRecord, ignoreHeaderRecord, csvSeparator, csvTextQualifier) {
    var _this = this;

    _this['hasHeaderRecord'] = hasHeaderRecord;
    _this['ignoreHeaderRecord'] = ignoreHeaderRecord;
    _this['csvSeparator'] = csvSeparator;
    _this['csvTextQualifier'] = csvTextQualifier;
  };

  /**
   * Constructs a <code>InputFileReadCsvConfiguration</code> from a plain JavaScript object, optionally creating a new instance.
   * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
   * @param {Object} data The plain JavaScript object bearing properties of interest.
   * @param {module:model/InputFileReadCsvConfiguration} obj Optional instance to populate.
   * @return {module:model/InputFileReadCsvConfiguration} The populated <code>InputFileReadCsvConfiguration</code> instance.
   */
  exports.constructFromObject = function(data, obj) {
    if (data) {
      obj = obj || new exports();

      if (data.hasOwnProperty('hasHeaderRecord')) {
        obj['hasHeaderRecord'] = ApiClient.convertToType(data['hasHeaderRecord'], 'Boolean');
      }
      if (data.hasOwnProperty('ignoreHeaderRecord')) {
        obj['ignoreHeaderRecord'] = ApiClient.convertToType(data['ignoreHeaderRecord'], 'Boolean');
      }
      if (data.hasOwnProperty('csvSeparator')) {
        obj['csvSeparator'] = ApiClient.convertToType(data['csvSeparator'], 'String');
      }
      if (data.hasOwnProperty('csvTextQualifier')) {
        obj['csvTextQualifier'] = ApiClient.convertToType(data['csvTextQualifier'], 'String');
      }
    }
    return obj;
  }

  /**
   * Indicate if the csv file contains the column name at the first row
   * @member {Boolean} hasHeaderRecord
   * @default true
   */
  exports.prototype['hasHeaderRecord'] = true;
  /**
   * Indicate if the importation should not use the csv column name from the file
   * @member {Boolean} ignoreHeaderRecord
   * @default false
   */
  exports.prototype['ignoreHeaderRecord'] = false;
  /**
   * Indicate the separator of the values in the CSV file. Generally \";\"
   * @member {String} csvSeparator
   * @default ';'
   */
  exports.prototype['csvSeparator'] = ';';
  /**
   * Indicate the text qualifier of the CSV file. Generally the value is \"
   * @member {String} csvTextQualifier
   * @default '"'
   */
  exports.prototype['csvTextQualifier'] = '"';



  return exports;
}));

