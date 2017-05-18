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
    define(['ApiClient', 'model/ReportFilterLinks', 'model/ReportFilterParameters'], factory);
  } else if (typeof module === 'object' && module.exports) {
    // CommonJS-like environments that support module.exports, like Node.
    module.exports = factory(require('../ApiClient'), require('./ReportFilterLinks'), require('./ReportFilterParameters'));
  } else {
    // Browser globals (root is window)
    if (!root.BeezUpApi) {
      root.BeezUpApi = {};
    }
    root.BeezUpApi.ReportFilter = factory(root.BeezUpApi.ApiClient, root.BeezUpApi.ReportFilterLinks, root.BeezUpApi.ReportFilterParameters);
  }
}(this, function(ApiClient, ReportFilterLinks, ReportFilterParameters) {
  'use strict';




  /**
   * The ReportFilter model module.
   * @module model/ReportFilter
   * @version 2.0
   */

  /**
   * Constructs a new <code>ReportFilter</code>.
   * @alias module:model/ReportFilter
   * @class
   * @param reportFilterId {String} Report filter identifier
   * @param reportFilterName {String} Report filter name
   * @param parameters {module:model/ReportFilterParameters} 
   */
  var exports = function(reportFilterId, reportFilterName, parameters) {
    var _this = this;

    _this['reportFilterId'] = reportFilterId;
    _this['reportFilterName'] = reportFilterName;
    _this['parameters'] = parameters;

  };

  /**
   * Constructs a <code>ReportFilter</code> from a plain JavaScript object, optionally creating a new instance.
   * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
   * @param {Object} data The plain JavaScript object bearing properties of interest.
   * @param {module:model/ReportFilter} obj Optional instance to populate.
   * @return {module:model/ReportFilter} The populated <code>ReportFilter</code> instance.
   */
  exports.constructFromObject = function(data, obj) {
    if (data) {
      obj = obj || new exports();

      if (data.hasOwnProperty('reportFilterId')) {
        obj['reportFilterId'] = ApiClient.convertToType(data['reportFilterId'], 'String');
      }
      if (data.hasOwnProperty('reportFilterName')) {
        obj['reportFilterName'] = ApiClient.convertToType(data['reportFilterName'], 'String');
      }
      if (data.hasOwnProperty('parameters')) {
        obj['parameters'] = ReportFilterParameters.constructFromObject(data['parameters']);
      }
      if (data.hasOwnProperty('links')) {
        obj['links'] = ReportFilterLinks.constructFromObject(data['links']);
      }
    }
    return obj;
  }

  /**
   * Report filter identifier
   * @member {String} reportFilterId
   */
  exports.prototype['reportFilterId'] = undefined;
  /**
   * Report filter name
   * @member {String} reportFilterName
   */
  exports.prototype['reportFilterName'] = undefined;
  /**
   * @member {module:model/ReportFilterParameters} parameters
   */
  exports.prototype['parameters'] = undefined;
  /**
   * @member {module:model/ReportFilterLinks} links
   */
  exports.prototype['links'] = undefined;



  return exports;
}));


