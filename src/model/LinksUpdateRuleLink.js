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
    define(['ApiClient', 'model/BeezUPCommonDocUrl', 'model/BeezUPCommonHref', 'model/BeezUPCommonHttpMethod', 'model/BeezUPCommonInfoSummaries', 'model/BeezUPCommonLink3', 'model/BeezUPCommonLinkParameter3', 'model/BeezUPCommonOperationId'], factory);
  } else if (typeof module === 'object' && module.exports) {
    // CommonJS-like environments that support module.exports, like Node.
    module.exports = factory(require('../ApiClient'), require('./BeezUPCommonDocUrl'), require('./BeezUPCommonHref'), require('./BeezUPCommonHttpMethod'), require('./BeezUPCommonInfoSummaries'), require('./BeezUPCommonLink3'), require('./BeezUPCommonLinkParameter3'), require('./BeezUPCommonOperationId'));
  } else {
    // Browser globals (root is window)
    if (!root.BeezUpApi) {
      root.BeezUpApi = {};
    }
    root.BeezUpApi.LinksUpdateRuleLink = factory(root.BeezUpApi.ApiClient, root.BeezUpApi.BeezUPCommonDocUrl, root.BeezUpApi.BeezUPCommonHref, root.BeezUpApi.BeezUPCommonHttpMethod, root.BeezUpApi.BeezUPCommonInfoSummaries, root.BeezUpApi.BeezUPCommonLink3, root.BeezUpApi.BeezUPCommonLinkParameter3, root.BeezUpApi.BeezUPCommonOperationId);
  }
}(this, function(ApiClient, BeezUPCommonDocUrl, BeezUPCommonHref, BeezUPCommonHttpMethod, BeezUPCommonInfoSummaries, BeezUPCommonLink3, BeezUPCommonLinkParameter3, BeezUPCommonOperationId) {
  'use strict';




  /**
   * The LinksUpdateRuleLink model module.
   * @module model/LinksUpdateRuleLink
   * @version 2.0
   */

  /**
   * Constructs a new <code>LinksUpdateRuleLink</code>.
   * @alias module:model/LinksUpdateRuleLink
   * @class
   * @implements module:model/BeezUPCommonLink3
   * @param href {module:model/BeezUPCommonHref} 
   */
  var exports = function(href) {
    var _this = this;

    BeezUPCommonLink3.call(_this, href);
  };

  /**
   * Constructs a <code>LinksUpdateRuleLink</code> from a plain JavaScript object, optionally creating a new instance.
   * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
   * @param {Object} data The plain JavaScript object bearing properties of interest.
   * @param {module:model/LinksUpdateRuleLink} obj Optional instance to populate.
   * @return {module:model/LinksUpdateRuleLink} The populated <code>LinksUpdateRuleLink</code> instance.
   */
  exports.constructFromObject = function(data, obj) {
    if (data) {
      obj = obj || new exports();

      BeezUPCommonLink3.constructFromObject(data, obj);
    }
    return obj;
  }


  // Implement BeezUPCommonLink3 interface:
  /**
   * The label corresponding to the link. This label is automatically translated based on the Accept-Language http header.
   * @member {String} label
   */
exports.prototype['label'] = undefined;

  /**
   * @member {module:model/BeezUPCommonDocUrl} docUrl
   */
exports.prototype['docUrl'] = undefined;

  /**
   * The description of the link
   * @member {String} description
   */
exports.prototype['description'] = undefined;

  /**
   * @member {module:model/BeezUPCommonHref} href
   */
exports.prototype['href'] = undefined;

  /**
   * @member {module:model/BeezUPCommonOperationId} operationId
   */
exports.prototype['operationId'] = undefined;

  /**
   * @member {module:model/BeezUPCommonHttpMethod} method
   */
exports.prototype['method'] = undefined;

  /**
   * @member {Object.<String, module:model/BeezUPCommonLinkParameter3>} parameters
   */
exports.prototype['parameters'] = undefined;

  /**
   * indicates whether the href is templated or not
   * @member {Boolean} urlTemplated
   */
exports.prototype['urlTemplated'] = undefined;

  /**
   * indicates whether all required params have been provided
   * @member {Boolean} allRequiredParamsProvided
   */
exports.prototype['allRequiredParamsProvided'] = undefined;

  /**
   * indicates whether all optionals params have been provided
   * @member {Boolean} allOptionalParamsProvided
   */
exports.prototype['allOptionalParamsProvided'] = undefined;

  /**
   * @member {module:model/BeezUPCommonInfoSummaries} info
   */
exports.prototype['info'] = undefined;



  return exports;
}));


