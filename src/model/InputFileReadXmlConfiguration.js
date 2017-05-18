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
    root.BeezUpApi.InputFileReadXmlConfiguration = factory(root.BeezUpApi.ApiClient);
  }
}(this, function(ApiClient) {
  'use strict';




  /**
   * The InputFileReadXmlConfiguration model module.
   * @module model/InputFileReadXmlConfiguration
   * @version 2.0
   */

  /**
   * Constructs a new <code>InputFileReadXmlConfiguration</code>.
   * The XML file description
   * @alias module:model/InputFileReadXmlConfiguration
   * @class
   * @param useXmlAttributes {Boolean} Indicate if the importation should take in account the attribute in the xml nodes.
   * @param flattenXmlChildElements {Boolean} Indicate if the children xml nodes should be flatten with there parent to take in account the sub node values.
   */
  var exports = function(useXmlAttributes, flattenXmlChildElements) {
    var _this = this;

    _this['useXmlAttributes'] = useXmlAttributes;
    _this['flattenXmlChildElements'] = flattenXmlChildElements;
  };

  /**
   * Constructs a <code>InputFileReadXmlConfiguration</code> from a plain JavaScript object, optionally creating a new instance.
   * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
   * @param {Object} data The plain JavaScript object bearing properties of interest.
   * @param {module:model/InputFileReadXmlConfiguration} obj Optional instance to populate.
   * @return {module:model/InputFileReadXmlConfiguration} The populated <code>InputFileReadXmlConfiguration</code> instance.
   */
  exports.constructFromObject = function(data, obj) {
    if (data) {
      obj = obj || new exports();

      if (data.hasOwnProperty('useXmlAttributes')) {
        obj['useXmlAttributes'] = ApiClient.convertToType(data['useXmlAttributes'], 'Boolean');
      }
      if (data.hasOwnProperty('flattenXmlChildElements')) {
        obj['flattenXmlChildElements'] = ApiClient.convertToType(data['flattenXmlChildElements'], 'Boolean');
      }
    }
    return obj;
  }

  /**
   * Indicate if the importation should take in account the attribute in the xml nodes.
   * @member {Boolean} useXmlAttributes
   */
  exports.prototype['useXmlAttributes'] = undefined;
  /**
   * Indicate if the children xml nodes should be flatten with there parent to take in account the sub node values.
   * @member {Boolean} flattenXmlChildElements
   */
  exports.prototype['flattenXmlChildElements'] = undefined;



  return exports;
}));

