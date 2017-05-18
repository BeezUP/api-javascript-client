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
    define(['ApiClient', 'model/Rule', 'model/RuleListLinks'], factory);
  } else if (typeof module === 'object' && module.exports) {
    // CommonJS-like environments that support module.exports, like Node.
    module.exports = factory(require('../ApiClient'), require('./Rule'), require('./RuleListLinks'));
  } else {
    // Browser globals (root is window)
    if (!root.BeezUpApi) {
      root.BeezUpApi = {};
    }
    root.BeezUpApi.RuleList = factory(root.BeezUpApi.ApiClient, root.BeezUpApi.Rule, root.BeezUpApi.RuleListLinks);
  }
}(this, function(ApiClient, Rule, RuleListLinks) {
  'use strict';




  /**
   * The RuleList model module.
   * @module model/RuleList
   * @version 2.0
   */

  /**
   * Constructs a new <code>RuleList</code>.
   * @alias module:model/RuleList
   * @class
   * @param rules {Array.<module:model/Rule>} Rule list
   * @param links {module:model/RuleListLinks} 
   */
  var exports = function(rules, links) {
    var _this = this;

    _this['rules'] = rules;
    _this['links'] = links;
  };

  /**
   * Constructs a <code>RuleList</code> from a plain JavaScript object, optionally creating a new instance.
   * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
   * @param {Object} data The plain JavaScript object bearing properties of interest.
   * @param {module:model/RuleList} obj Optional instance to populate.
   * @return {module:model/RuleList} The populated <code>RuleList</code> instance.
   */
  exports.constructFromObject = function(data, obj) {
    if (data) {
      obj = obj || new exports();

      if (data.hasOwnProperty('rules')) {
        obj['rules'] = ApiClient.convertToType(data['rules'], [Rule]);
      }
      if (data.hasOwnProperty('links')) {
        obj['links'] = RuleListLinks.constructFromObject(data['links']);
      }
    }
    return obj;
  }

  /**
   * Rule list
   * @member {Array.<module:model/Rule>} rules
   */
  exports.prototype['rules'] = undefined;
  /**
   * @member {module:model/RuleListLinks} links
   */
  exports.prototype['links'] = undefined;



  return exports;
}));


