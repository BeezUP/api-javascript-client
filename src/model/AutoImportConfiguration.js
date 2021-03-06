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
    define(['ApiClient', 'model/BeezUPCommonUserId', 'model/DuplicateProductValueConfiguration', 'model/InputConfiguration', 'model/SchedulingType'], factory);
  } else if (typeof module === 'object' && module.exports) {
    // CommonJS-like environments that support module.exports, like Node.
    module.exports = factory(require('../ApiClient'), require('./BeezUPCommonUserId'), require('./DuplicateProductValueConfiguration'), require('./InputConfiguration'), require('./SchedulingType'));
  } else {
    // Browser globals (root is window)
    if (!root.BeezUpApi) {
      root.BeezUpApi = {};
    }
    root.BeezUpApi.AutoImportConfiguration = factory(root.BeezUpApi.ApiClient, root.BeezUpApi.BeezUPCommonUserId, root.BeezUpApi.DuplicateProductValueConfiguration, root.BeezUpApi.InputConfiguration, root.BeezUpApi.SchedulingType);
  }
}(this, function(ApiClient, BeezUPCommonUserId, DuplicateProductValueConfiguration, InputConfiguration, SchedulingType) {
  'use strict';




  /**
   * The AutoImportConfiguration model module.
   * @module model/AutoImportConfiguration
   * @version 2.0
   */

  /**
   * Constructs a new <code>AutoImportConfiguration</code>.
   * @alias module:model/AutoImportConfiguration
   * @class
   * @param input {module:model/InputConfiguration} 
   * @param inputConfiguredByUserId {module:model/BeezUPCommonUserId} 
   * @param schedulingType {module:model/SchedulingType} 
   * @param schedulingValue {Array.<String>} Indicate the scheduling value. If the scheduling type is Interval then the value will be a duration otherwise the values will be the time.
   * @param paused {Boolean} Indicate if the auto import is in pause or not.
   * @param duplicateProductConfiguration {module:model/DuplicateProductValueConfiguration} 
   */
  var exports = function(input, inputConfiguredByUserId, schedulingType, schedulingValue, paused, duplicateProductConfiguration) {
    var _this = this;

    _this['input'] = input;
    _this['inputConfiguredByUserId'] = inputConfiguredByUserId;
    _this['schedulingType'] = schedulingType;

    _this['schedulingValue'] = schedulingValue;
    _this['paused'] = paused;


    _this['duplicateProductConfiguration'] = duplicateProductConfiguration;

  };

  /**
   * Constructs a <code>AutoImportConfiguration</code> from a plain JavaScript object, optionally creating a new instance.
   * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
   * @param {Object} data The plain JavaScript object bearing properties of interest.
   * @param {module:model/AutoImportConfiguration} obj Optional instance to populate.
   * @return {module:model/AutoImportConfiguration} The populated <code>AutoImportConfiguration</code> instance.
   */
  exports.constructFromObject = function(data, obj) {
    if (data) {
      obj = obj || new exports();

      if (data.hasOwnProperty('input')) {
        obj['input'] = InputConfiguration.constructFromObject(data['input']);
      }
      if (data.hasOwnProperty('inputConfiguredByUserId')) {
        obj['inputConfiguredByUserId'] = BeezUPCommonUserId.constructFromObject(data['inputConfiguredByUserId']);
      }
      if (data.hasOwnProperty('schedulingType')) {
        obj['schedulingType'] = SchedulingType.constructFromObject(data['schedulingType']);
      }
      if (data.hasOwnProperty('scheduledByUserId')) {
        obj['scheduledByUserId'] = BeezUPCommonUserId.constructFromObject(data['scheduledByUserId']);
      }
      if (data.hasOwnProperty('schedulingValue')) {
        obj['schedulingValue'] = ApiClient.convertToType(data['schedulingValue'], ['String']);
      }
      if (data.hasOwnProperty('paused')) {
        obj['paused'] = ApiClient.convertToType(data['paused'], 'Boolean');
      }
      if (data.hasOwnProperty('pauseStatusChangedByUserId')) {
        obj['pauseStatusChangedByUserId'] = BeezUPCommonUserId.constructFromObject(data['pauseStatusChangedByUserId']);
      }
      if (data.hasOwnProperty('pauseStatusChangedUtcDate')) {
        obj['pauseStatusChangedUtcDate'] = ApiClient.convertToType(data['pauseStatusChangedUtcDate'], 'Date');
      }
      if (data.hasOwnProperty('duplicateProductConfiguration')) {
        obj['duplicateProductConfiguration'] = DuplicateProductValueConfiguration.constructFromObject(data['duplicateProductConfiguration']);
      }
      if (data.hasOwnProperty('schedulingLocalTimeZoneName')) {
        obj['schedulingLocalTimeZoneName'] = ApiClient.convertToType(data['schedulingLocalTimeZoneName'], 'String');
      }
    }
    return obj;
  }

  /**
   * @member {module:model/InputConfiguration} input
   */
  exports.prototype['input'] = undefined;
  /**
   * @member {module:model/BeezUPCommonUserId} inputConfiguredByUserId
   */
  exports.prototype['inputConfiguredByUserId'] = undefined;
  /**
   * @member {module:model/SchedulingType} schedulingType
   */
  exports.prototype['schedulingType'] = undefined;
  /**
   * @member {module:model/BeezUPCommonUserId} scheduledByUserId
   */
  exports.prototype['scheduledByUserId'] = undefined;
  /**
   * Indicate the scheduling value. If the scheduling type is Interval then the value will be a duration otherwise the values will be the time.
   * @member {Array.<String>} schedulingValue
   */
  exports.prototype['schedulingValue'] = undefined;
  /**
   * Indicate if the auto import is in pause or not.
   * @member {Boolean} paused
   * @default false
   */
  exports.prototype['paused'] = false;
  /**
   * @member {module:model/BeezUPCommonUserId} pauseStatusChangedByUserId
   */
  exports.prototype['pauseStatusChangedByUserId'] = undefined;
  /**
   * Indicate when the pause status has changed in UTC date.
   * @member {Date} pauseStatusChangedUtcDate
   */
  exports.prototype['pauseStatusChangedUtcDate'] = undefined;
  /**
   * @member {module:model/DuplicateProductValueConfiguration} duplicateProductConfiguration
   */
  exports.prototype['duplicateProductConfiguration'] = undefined;
  /**
   * Indicate the time zone name of the scheduling. If the scheduling type is \"Schedule\"
   * @member {String} schedulingLocalTimeZoneName
   * @default 'Romance Standard Time'
   */
  exports.prototype['schedulingLocalTimeZoneName'] = 'Romance Standard Time';



  return exports;
}));


