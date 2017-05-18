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
    define(['ApiClient', 'model/BeezUPCommonHttpMethod'], factory);
  } else if (typeof module === 'object' && module.exports) {
    // CommonJS-like environments that support module.exports, like Node.
    module.exports = factory(require('../ApiClient'), require('./BeezUPCommonHttpMethod'));
  } else {
    // Browser globals (root is window)
    if (!root.BeezUpApi) {
      root.BeezUpApi = {};
    }
    root.BeezUpApi.BeezUPCommonLOVLink3 = factory(root.BeezUpApi.ApiClient, root.BeezUpApi.BeezUPCommonHttpMethod);
  }
}(this, function(ApiClient, BeezUPCommonHttpMethod) {
  'use strict';




  /**
   * The BeezUPCommonLOVLink3 model module.
   * @module model/BeezUPCommonLOVLink3
   * @version 2.0
   */

  /**
   * Constructs a new <code>BeezUPCommonLOVLink3</code>.
   * Describe the way you have to follow to get access to the LOV
   * @alias module:model/BeezUPCommonLOVLink3
   * @class
   * @param href {String} Indicate the uri to the list of value
   */
  var exports = function(href) {
    var _this = this;

    _this['href'] = href;

  };

  /**
   * Constructs a <code>BeezUPCommonLOVLink3</code> from a plain JavaScript object, optionally creating a new instance.
   * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
   * @param {Object} data The plain JavaScript object bearing properties of interest.
   * @param {module:model/BeezUPCommonLOVLink3} obj Optional instance to populate.
   * @return {module:model/BeezUPCommonLOVLink3} The populated <code>BeezUPCommonLOVLink3</code> instance.
   */
  exports.constructFromObject = function(data, obj) {
    if (data) {
      obj = obj || new exports();

      if (data.hasOwnProperty('href')) {
        obj['href'] = ApiClient.convertToType(data['href'], 'String');
      }
      if (data.hasOwnProperty('method')) {
        obj['method'] = BeezUPCommonHttpMethod.constructFromObject(data['method']);
      }
    }
    return obj;
  }

  /**
   * Indicate the uri to the list of value
   * @member {String} href
   */
  exports.prototype['href'] = undefined;
  /**
   * @member {module:model/BeezUPCommonHttpMethod} method
   */
  exports.prototype['method'] = undefined;



  return exports;
}));


