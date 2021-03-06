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
    define(['ApiClient', 'model/LinksImportationGetImportationMonitoringLink'], factory);
  } else if (typeof module === 'object' && module.exports) {
    // CommonJS-like environments that support module.exports, like Node.
    module.exports = factory(require('../ApiClient'), require('./LinksImportationGetImportationMonitoringLink'));
  } else {
    // Browser globals (root is window)
    if (!root.BeezUpApi) {
      root.BeezUpApi = {};
    }
    root.BeezUpApi.InlineResponse409Links = factory(root.BeezUpApi.ApiClient, root.BeezUpApi.LinksImportationGetImportationMonitoringLink);
  }
}(this, function(ApiClient, LinksImportationGetImportationMonitoringLink) {
  'use strict';




  /**
   * The InlineResponse409Links model module.
   * @module model/InlineResponse409Links
   * @version 2.0
   */

  /**
   * Constructs a new <code>InlineResponse409Links</code>.
   * The action links
   * @alias module:model/InlineResponse409Links
   * @class
   */
  var exports = function() {
    var _this = this;


  };

  /**
   * Constructs a <code>InlineResponse409Links</code> from a plain JavaScript object, optionally creating a new instance.
   * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
   * @param {Object} data The plain JavaScript object bearing properties of interest.
   * @param {module:model/InlineResponse409Links} obj Optional instance to populate.
   * @return {module:model/InlineResponse409Links} The populated <code>InlineResponse409Links</code> instance.
   */
  exports.constructFromObject = function(data, obj) {
    if (data) {
      obj = obj || new exports();

      if (data.hasOwnProperty('currentImportation')) {
        obj['currentImportation'] = LinksImportationGetImportationMonitoringLink.constructFromObject(data['currentImportation']);
      }
    }
    return obj;
  }

  /**
   * @member {module:model/LinksImportationGetImportationMonitoringLink} currentImportation
   */
  exports.prototype['currentImportation'] = undefined;



  return exports;
}));


