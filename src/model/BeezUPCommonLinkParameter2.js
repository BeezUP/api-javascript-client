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
    define(['ApiClient', 'model/BeezUPCommonLOVLink2', 'model/BeezUPCommonParameterIn', 'model/BeezUPCommonParameterType'], factory);
  } else if (typeof module === 'object' && module.exports) {
    // CommonJS-like environments that support module.exports, like Node.
    module.exports = factory(require('../ApiClient'), require('./BeezUPCommonLOVLink2'), require('./BeezUPCommonParameterIn'), require('./BeezUPCommonParameterType'));
  } else {
    // Browser globals (root is window)
    if (!root.BeezUpApi) {
      root.BeezUpApi = {};
    }
    root.BeezUpApi.BeezUPCommonLinkParameter2 = factory(root.BeezUpApi.ApiClient, root.BeezUpApi.BeezUPCommonLOVLink2, root.BeezUpApi.BeezUPCommonParameterIn, root.BeezUpApi.BeezUPCommonParameterType);
  }
}(this, function(ApiClient, BeezUPCommonLOVLink2, BeezUPCommonParameterIn, BeezUPCommonParameterType) {
  'use strict';




  /**
   * The BeezUPCommonLinkParameter2 model module.
   * @module model/BeezUPCommonLinkParameter2
   * @version 2.0
   */

  /**
   * Constructs a new <code>BeezUPCommonLinkParameter2</code>.
   * @alias module:model/BeezUPCommonLinkParameter2
   * @class
   * @param name {String} The name of the parameter
   */
  var exports = function(name) {
    var _this = this;

    _this['name'] = name;






  };

  /**
   * Constructs a <code>BeezUPCommonLinkParameter2</code> from a plain JavaScript object, optionally creating a new instance.
   * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
   * @param {Object} data The plain JavaScript object bearing properties of interest.
   * @param {module:model/BeezUPCommonLinkParameter2} obj Optional instance to populate.
   * @return {module:model/BeezUPCommonLinkParameter2} The populated <code>BeezUPCommonLinkParameter2</code> instance.
   */
  exports.constructFromObject = function(data, obj) {
    if (data) {
      obj = obj || new exports();

      if (data.hasOwnProperty('name')) {
        obj['name'] = ApiClient.convertToType(data['name'], 'String');
      }
      if (data.hasOwnProperty('value')) {
        obj['value'] = ApiClient.convertToType(data['value'], 'String');
      }
      if (data.hasOwnProperty('required')) {
        obj['required'] = ApiClient.convertToType(data['required'], 'Boolean');
      }
      if (data.hasOwnProperty('in')) {
        obj['in'] = BeezUPCommonParameterIn.constructFromObject(data['in']);
      }
      if (data.hasOwnProperty('type')) {
        obj['type'] = BeezUPCommonParameterType.constructFromObject(data['type']);
      }
      if (data.hasOwnProperty('lovLink')) {
        obj['lovLink'] = BeezUPCommonLOVLink2.constructFromObject(data['lovLink']);
      }
      if (data.hasOwnProperty('lovRequired')) {
        obj['lovRequired'] = ApiClient.convertToType(data['lovRequired'], 'Boolean');
      }
    }
    return obj;
  }

  /**
   * The name of the parameter
   * @member {String} name
   */
  exports.prototype['name'] = undefined;
  /**
   * The value of the parameter
   * @member {String} value
   */
  exports.prototype['value'] = undefined;
  /**
   * @member {Boolean} required
   */
  exports.prototype['required'] = undefined;
  /**
   * @member {module:model/BeezUPCommonParameterIn} in
   */
  exports.prototype['in'] = undefined;
  /**
   * @member {module:model/BeezUPCommonParameterType} type
   */
  exports.prototype['type'] = undefined;
  /**
   * This parameter expect the values indicated in this list of values.
   * @member {module:model/BeezUPCommonLOVLink2} lovLink
   */
  exports.prototype['lovLink'] = undefined;
  /**
   * If true, you MUST use indicate a value from the list of values otherwise it's a freetext
   * @member {Boolean} lovRequired
   */
  exports.prototype['lovRequired'] = undefined;



  return exports;
}));

