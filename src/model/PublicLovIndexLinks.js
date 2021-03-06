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
    define(['ApiClient', 'model/LinksGetPublicLovIndexLink', 'model/PublicLovLinks'], factory);
  } else if (typeof module === 'object' && module.exports) {
    // CommonJS-like environments that support module.exports, like Node.
    module.exports = factory(require('../ApiClient'), require('./LinksGetPublicLovIndexLink'), require('./PublicLovLinks'));
  } else {
    // Browser globals (root is window)
    if (!root.BeezUpApi) {
      root.BeezUpApi = {};
    }
    root.BeezUpApi.PublicLovIndexLinks = factory(root.BeezUpApi.ApiClient, root.BeezUpApi.LinksGetPublicLovIndexLink, root.BeezUpApi.PublicLovLinks);
  }
}(this, function(ApiClient, LinksGetPublicLovIndexLink, PublicLovLinks) {
  'use strict';




  /**
   * The PublicLovIndexLinks model module.
   * @module model/PublicLovIndexLinks
   * @version 2.0
   */

  /**
   * Constructs a new <code>PublicLovIndexLinks</code>.
   * @alias module:model/PublicLovIndexLinks
   * @class
   */
  var exports = function() {
    var _this = this;



  };

  /**
   * Constructs a <code>PublicLovIndexLinks</code> from a plain JavaScript object, optionally creating a new instance.
   * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
   * @param {Object} data The plain JavaScript object bearing properties of interest.
   * @param {module:model/PublicLovIndexLinks} obj Optional instance to populate.
   * @return {module:model/PublicLovIndexLinks} The populated <code>PublicLovIndexLinks</code> instance.
   */
  exports.constructFromObject = function(data, obj) {
    if (data) {
      obj = obj || new exports();

      if (data.hasOwnProperty('self')) {
        obj['self'] = LinksGetPublicLovIndexLink.constructFromObject(data['self']);
      }
      if (data.hasOwnProperty('lists')) {
        obj['lists'] = PublicLovLinks.constructFromObject(data['lists']);
      }
    }
    return obj;
  }

  /**
   * @member {module:model/LinksGetPublicLovIndexLink} self
   */
  exports.prototype['self'] = undefined;
  /**
   * @member {module:model/PublicLovLinks} lists
   */
  exports.prototype['lists'] = undefined;



  return exports;
}));


