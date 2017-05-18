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
    define(['ApiClient', 'model/CustomerIndexLinks', 'model/CustomerIndexLovLinks'], factory);
  } else if (typeof module === 'object' && module.exports) {
    // CommonJS-like environments that support module.exports, like Node.
    module.exports = factory(require('../ApiClient'), require('./CustomerIndexLinks'), require('./CustomerIndexLovLinks'));
  } else {
    // Browser globals (root is window)
    if (!root.BeezUpApi) {
      root.BeezUpApi = {};
    }
    root.BeezUpApi.CustomerIndex = factory(root.BeezUpApi.ApiClient, root.BeezUpApi.CustomerIndexLinks, root.BeezUpApi.CustomerIndexLovLinks);
  }
}(this, function(ApiClient, CustomerIndexLinks, CustomerIndexLovLinks) {
  'use strict';




  /**
   * The CustomerIndex model module.
   * @module model/CustomerIndex
   * @version 2.0
   */

  /**
   * Constructs a new <code>CustomerIndex</code>.
   * The index of the customer API
   * @alias module:model/CustomerIndex
   * @class
   * @param links {module:model/CustomerIndexLinks} 
   * @param lovLinks {module:model/CustomerIndexLovLinks} 
   */
  var exports = function(links, lovLinks) {
    var _this = this;

    _this['links'] = links;
    _this['lovLinks'] = lovLinks;
  };

  /**
   * Constructs a <code>CustomerIndex</code> from a plain JavaScript object, optionally creating a new instance.
   * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
   * @param {Object} data The plain JavaScript object bearing properties of interest.
   * @param {module:model/CustomerIndex} obj Optional instance to populate.
   * @return {module:model/CustomerIndex} The populated <code>CustomerIndex</code> instance.
   */
  exports.constructFromObject = function(data, obj) {
    if (data) {
      obj = obj || new exports();

      if (data.hasOwnProperty('links')) {
        obj['links'] = CustomerIndexLinks.constructFromObject(data['links']);
      }
      if (data.hasOwnProperty('lovLinks')) {
        obj['lovLinks'] = CustomerIndexLovLinks.constructFromObject(data['lovLinks']);
      }
    }
    return obj;
  }

  /**
   * @member {module:model/CustomerIndexLinks} links
   */
  exports.prototype['links'] = undefined;
  /**
   * @member {module:model/CustomerIndexLovLinks} lovLinks
   */
  exports.prototype['lovLinks'] = undefined;



  return exports;
}));


